/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/map.glb -o src/components/Models/Home.jsx -r public 
*/

import { useGLTF } from '@react-three/drei';
import { useControls } from 'leva';

export function Island(props) {
  const gltf = useGLTF('/models/map.glb');
  const controls = useControls('ISLAND', {
    rotationY: 0,
    scale: {
      value: 40,
      min: 1,
      max: 200,
      step: 1,
    },
    position: [0, 1, 100],
    color: '#ffeb8c',
    roughness: { value: 0.4, min: 0, max: 1, step: 0.01 },
    metalness: { value: 0.1, min: 0, max: 1, step: 0.01 },
    transmission: { value: 0.9, min: 0, max: 1, step: 0.01 },
  });
  return (
    <group
      {...props}
      dispose={null}
      rotation={[0, controls.rotationY, 0]}
      scale={controls.scale}
      position={controls.position}
    >
      <mesh
        receiveShadow
        castShadow
        geometry={gltf.nodes.Rock_2.geometry}
        material={gltf.materials.Rock}
        position={[-0.74, -0.039, -0.034]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={5}
      >
        <meshPhysicalMaterial
          side={2}
          {...controls}
        />
      </mesh>
      <mesh
        receiveShadow
        castShadow
        geometry={gltf.nodes.Icosphere.geometry}
        material={gltf.materials['Material.004']}
        position={[0, 0, -0.038]}
        rotation={[0, 0.641, 0]}
      >
        {/* <meshMatcapMaterial matcap={satin} /> */}
        <meshPhysicalMaterial
          side={2}
          {...controls}
        />
      </mesh>
      <mesh
        receiveShadow
        castShadow
        geometry={gltf.nodes.Plane.geometry}
        material={gltf.materials['Material.001']}
        position={[0, -0.009, 0]}
      >
        <meshPhysicalMaterial
          side={2}
          {...controls}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload('/models/map.glb');
