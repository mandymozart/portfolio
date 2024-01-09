import { useGLTF } from '@react-three/drei';
const modelUrl = `/models/map.glb`;
const Map = ({ props }) => {
  const gltf = useGLTF(modelUrl, true);

  return (
    <primitive
      object={gltf.scene}
      scale={20}
      {...props}
    />
  );
};

export default Map;

useGLTF.preload(modelUrl);
