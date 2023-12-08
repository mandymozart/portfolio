<script lang="ts">
	import { T } from '@threlte/core';
	import { Float, OrbitControls, interactivity } from '@threlte/extras';
	import { spring } from 'svelte/motion';
	import * as THREE from 'three';
	import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';

	interactivity();
	const scale = spring(1);

	const hdrEquirect = new RGBELoader().load(
		'static/textures/mud_road_puresky_1k.exr',
		// 'static/textures/kloofendal_misty_morning_puresky_1k.hdr',
		() => {
			hdrEquirect.mapping = THREE.EquirectangularReflectionMapping;
		}
	);

	const textureLoader = new THREE.TextureLoader();
	const normalMapTexture = textureLoader.load('static/textures/normal.jpg');
	normalMapTexture.wrapS = THREE.RepeatWrapping;
	normalMapTexture.wrapT = THREE.RepeatWrapping;

	export let nextScreen: () => void;
</script>

<T.PerspectiveCamera makeDefault position={[-10, 10, 10]} fov={15}>
	<OrbitControls autoRotate enableZoom={false} enableDamping autoRotateSpeed={0.5} target.y={1.5} />
</T.PerspectiveCamera>

<T.DirectionalLight intensity={4} position.x={0} position.y={5} position.z={10} />
<T.AmbientLight intensity={1} />
<!-- 
<Grid
	position.y={-0.001}
	cellColor="#ffffff"
	sectionColor="#ffffff"
	sectionThickness={0}
	fadeDistance={25}
	cellSize={2}
/> -->

<Float floatIntensity={1} floatingRange={[0, 0.4]}>
	<T.Mesh
		position.y={1.2}
		position.z={0}
		scale={$scale}
		on:pointerenter={() => scale.set(1.5)}
		on:pointerleave={() => scale.set(1)}
	>
		<T.SphereGeometry widthSegments={20} heightSegements={20} />
		<T.MeshPhysicalMaterial
			color="#1E1E1E"
			metalness{0}
			envMap={hdrEquirect}
			roughness={0.2}
			transmission={10}
			thickness={0.1}
		/>
	</T.Mesh>
</Float>
