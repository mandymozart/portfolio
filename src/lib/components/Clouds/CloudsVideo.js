import CloudsShader from '$lib/shaders/clouds';
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { mergeBufferGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

let renderer;
let camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 3000);
let scene = new THREE.Scene();
let geometries = []; // Array to hold individual geometries
let mesh;
let position;
let material;

let videoTexture, videoGeometry, videoMaterial, videoMesh;

let composer;


var mouseX = 0, mouseY = 0;
var start_time = Date.now();

var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

function onDocumentMouseMove(event) {

  mouseX = (event.clientX - windowHalfX) * 0.25;
  mouseY = (event.clientY - windowHalfY) * 0.15;

}

function onWindowResize(_) {

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
  composer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {

  requestAnimationFrame(animate);

  position = ((Date.now() - start_time) * 0.03) % 8000;

  camera.position.x += (mouseX - camera.position.x) * 0.01;
  camera.position.y += (- mouseY - camera.position.y) * 0.01;
  camera.position.z = - position + 8000;


  // const r = Date.now() * 0.0005;
  videoMesh.position.z = - position + 7300;
  // console.log(videoTexture)
  // console.log(position, videoMesh.position.z)
  render();

}

function render() {

  renderer.render(scene, camera);
}

export let loading;
export let error;

export const createScene = async (el, video) => {

  camera.position.z = 6000;

  // Cloud
  var texture = await new THREE.TextureLoader().load('textures/cloud10.png', loading, error);
  texture.magFilter = THREE.LinearMipMapLinearFilter;
  texture.minFilter = THREE.LinearMipMapLinearFilter;

  var fog = new THREE.Fog(0xffffff, - 100, 3000);

  material = new THREE.ShaderMaterial({

    uniforms: {

      "map": { type: "t", value: texture },
      "fogColor": { type: "c", value: fog.color },
      "fogNear": { type: "f", value: fog.near },
      "fogFar": { type: "f", value: fog.far },

    },
    vertexShader: CloudsShader.vertexShader,
    fragmentShader: CloudsShader.fragmentShader,
    depthWrite: false,
    depthTest: false,
    transparent: true

  });

  // Video

  // video.play();
  video.addEventListener("play", function () {
    this.currentTime = 0;
    console.log(video)
  });
  console.log(video)
  videoTexture = new THREE.VideoTexture(video);
  videoTexture.format = THREE.RGBAFormat;
  videoTexture.colorSpace = THREE.SRGBColorSpace;

  videoGeometry = new THREE.PlaneGeometry(480, 270);
  videoMaterial = new THREE.MeshPhongMaterial({ map: videoTexture });
  videoMaterial.transparent = true;
  videoMaterial.opacity = .5;
  videoMaterial.side = THREE.FrontSide;
  videoMaterial.shininess = 70;
  videoMesh = new THREE.Mesh(videoGeometry, videoMaterial);
  videoMesh.position.x = 0;
  videoMesh.position.y = 70;
  videoMesh.position.z = 6000;
  scene.add(videoMesh);

  // Clouds
  var planeGeometry = new THREE.PlaneGeometry(64, 64);

  for (var i = 0; i < 8000; i++) {
    var plane = new THREE.Mesh(planeGeometry);

    plane.position.x = Math.random() * 1000 - 500;
    plane.position.y = - Math.random() * Math.random() * 200 - 15;
    plane.position.z = i;
    plane.rotation.z = Math.random() * Math.PI;
    plane.scale.x = plane.scale.y = Math.random() * Math.random() * 1.5 + 0.5;

    plane.updateMatrix(); // Important: update the matrix
    geometries.push(planeGeometry.clone().applyMatrix4(plane.matrix));


  }

  let mergedGeometry = mergeBufferGeometries(geometries, false);
  mesh = new THREE.Mesh(mergedGeometry, material);
  scene.add(mesh);

  // const light = new THREE.DirectionalLight(0xffffff, 7);
  // light.position.set(0.5, 1, 1).normalize();
  // scene.add(light);



  renderer = new THREE.WebGLRenderer({ antialias: true, canvas: el, alpha: true });
  // renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setClearColor(0xffffff, 0);
  renderer.setSize(window.innerWidth, window.innerHeight);
  const renderScene = new RenderPass(scene, camera);

  const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);
  bloomPass.threshold = 0;
  bloomPass.strength = 3;
  bloomPass.radius = 0;

  const outputPass = new OutputPass();

  composer = new EffectComposer(renderer);
  composer.addPass(renderScene);
  composer.addPass(bloomPass);
  composer.addPass(outputPass);

  onWindowResize();
  animate();

}

document.addEventListener('mousemove', onDocumentMouseMove, false);
window.addEventListener('resize', onWindowResize, false);