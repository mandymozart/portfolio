import CloudsShader from '$lib/shaders/clouds';
import * as THREE from 'three';
import { mergeBufferGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

let renderer;
let camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 3000);
let scene = new THREE.Scene();
let geometries = []; // Array to hold individual geometries
let mesh;
let position;
let material;

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

}

function animate() {

  requestAnimationFrame(animate);

  position = ((Date.now() - start_time) * 0.03) % 8000;

  camera.position.x += (mouseX - camera.position.x) * 0.01;
  camera.position.y += (- mouseY - camera.position.y) * 0.01;
  camera.position.z = - position + 8000;

  renderer.render(scene, camera);

}

export let loading;
export let error;

export const createScene = async (el) => {

  camera.position.z = 6000;

  var texture = await new THREE.TextureLoader().load('cloud10.png', loading, error);
  // THREE.ImageUtils.loadTexture('cloud10.png', null, animate);
  texture.magFilter = THREE.LinearMipMapLinearFilter;
  texture.minFilter = THREE.LinearMipMapLinearFilter;

  var fog = new THREE.Fog(0xfd1d1d, - 100, 3000);

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

  mesh = new THREE.Mesh(mergedGeometry, material);
  mesh.position.z = - 8000;
  scene.add(mesh);

  renderer = new THREE.WebGLRenderer({ antialias: false, canvas: el, alpha: true });
  renderer.setClearColor(0xffffff, 0);
  renderer.setSize(window.innerWidth, window.innerHeight);
  onWindowResize();
  animate();

}

document.addEventListener('mousemove', onDocumentMouseMove, false);
window.addEventListener('resize', onWindowResize, false);