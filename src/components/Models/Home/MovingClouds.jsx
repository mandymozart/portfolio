import { Cloud } from '@react-three/drei';
import { useControls } from 'leva';

export function MovingClouds({ ...props }) {
  const controls = useControls('CLOUDS', {
    speed: {
      value: 0.8,
      min: 0,
      max: 1,
      step: 0.01,
    },
    concentrate: {
      value: 'random',
      options: ['random', 'inside', 'outside'],
    },
    position: [0, 20, 0],
    growth: {
      value: 10,
      min: 0,
      max: 50,
      step: 1,
    },
    segments: {
      value: 200,
      min: 0,
      max: 200,
      step: 1,
    },
    opacity: {
      value: 1,
      min: 0,
      max: 1,
      step: 0.8,
    },
    color: {
      value: '#ffffff',
    },
    bounds: [50, 2, 50],
    volume: {
      value: 20,
      min: 0,
      max: 100,
      step: 1,
    },
  });

  return (
    <>
      <Cloud
        seed={1}
        bounds={controls.bounds}
        volume={controls.volume}
        position={controls.position}
        speed={controls.speed}
        color={controls.color}
        segments={controls.segments}
        growth={controls.growth}
        concentrate={controls.concentrate}
        {...props}
      />
    </>
  );
}
