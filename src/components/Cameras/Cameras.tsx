import { OrthographicCamera, PerspectiveCamera } from '@react-three/drei';
import useGameStore from './../../stores/GameStore';

export function Cameras() {
  const { camera, editor } = useGameStore();
  return editor ? (
    <OrthographicCamera
      makeDefault={editor}
      position={[0, 50, 0]}
      zoom={20}
    />
  ) : (
    <>
      <PerspectiveCamera
        makeDefault={!editor && camera !== 'BIRD_EYE'}
        fov={75}
        rotation={[0, Math.PI, 0]}
        position={[0, 10, -20]}
      />
      <OrthographicCamera
        makeDefault={!editor && camera === 'BIRD_EYE'}
        position={[0, 100, 0]}
        rotation={[(-1 * Math.PI) / 2, 0, Math.PI]}
        zoom={15}
      />
    </>
  );
}
