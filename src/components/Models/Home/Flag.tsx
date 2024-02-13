import {
  GradientTexture,
  MeshDistortMaterial,
  useCursor,
} from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import * as THREE from 'three';

function Flag() {
  const ref = useRef(null);
  const [hovered, hover] = useState(false);
  useCursor(hovered);
  useFrame(() => {
    ref.current.distort = THREE.MathUtils.lerp(
      ref.current.distort,
      hovered ? 0.4 : 0,
      hovered ? 0.05 : 0.01,
    );
  });
  return (
    <mesh
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
      scale={[2, 4, 1]}>
      <planeGeometry args={[1, 1, 32, 32]} />
      <MeshDistortMaterial
        ref={ref}
        speed={5}>
        <GradientTexture
          stops={[0, 0.8, 1]}
          colors={['#e63946', '#f1faee', '#a8dadc']}
          size={100}
        />
      </MeshDistortMaterial>
    </mesh>
  );
}
