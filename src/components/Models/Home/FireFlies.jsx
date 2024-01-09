import { Sparkles } from '@react-three/drei';
import { useControls } from 'leva';
export const FireFlies = () => {
  const controls = useControls('FIREFLIES', {
    position: [10, 0, 10],
    size: {
      value: 10,
      min: 0,
      max: 10,
      step: 1,
    },
    scale: {
      value: 10,
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
    count: { value: 100 },
    noise: {
      value: 10,
      min: 0,
      max: 10,
      step: 1,
    },
  });

  return <Sparkles {...controls} />;
};
