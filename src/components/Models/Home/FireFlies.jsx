import { Sparkles } from '@react-three/drei';
import { useControls } from 'leva';
export const FireFlies = () => {
  const { position, size, scale, opacity } = useControls('FIREFLIES', {
    position: {
      x: 0,
      y: 0,
      z: 0,
    },
    size: {
      value: 5,
      min: 0,
      max: 10,
      step: 1,
    },
    scale: {
      value: 1,
      min: 0,
      max: 10,
      step: 1,
    },
    opacity: {
      value: 0.5,
      min: 0,
      max: 1,
      step: 0.01,
    },
  });

  return (
    <Sparkles
      position={[position.x, position.y, position.z]}
      size={size}
      scale={scale}
      opacity={opacity}
    />
  );
};
