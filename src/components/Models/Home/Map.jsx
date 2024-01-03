import { useGLTF } from '@react-three/drei';
import { Suspense } from 'react';
const modelUrl = `/models/map.glb`;
const Map = ({ props }) => {
  const gltf = useGLTF(modelUrl, true);
  return (
    <Suspense fallback={null}>
      <primitive
        object={gltf.scene}
        scale={20}
        {...props}
      />
    </Suspense>
  );
};

export default Map;

useGLTF.preload(modelUrl);
