import { Cloud } from '@react-three/drei';
import { useControls } from 'leva';
import { Suspense } from 'react';

export function MovingClouds({ ...props }) {
  const controls = useControls('CLOUDS', {
    speed: {
      value: 0.3,
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
      value: 9,
      min: 0,
      max: 50,
      step: 1,
    },
    segments: {
      value: 150,
      min: 0,
      max: 200,
      step: 1,
    },
    opacity: {
      value: 1,
      min: 0,
      max: 1,
      step: 0.01,
    },
    color: {
      value: '#ffffff',
    },
    bounds: [50, 2, 50],
    volume: {
      value: 1,
      min: 0,
      max: 100,
      step: 1,
    },
  });

  // useFrame((state, delta) => {
  //   const time = state.clock.getElapsedTime();
  //   const { width, length, height } = state.viewport;
  //   const area = {
  //     left: position.x - width / 2,
  //     right: position.x + width / 2,
  //     top: position.y - height / 2,
  //     bottom: position.y + height / 2,
  //   };

  //   state.scene.traverse(child => {
  //     if (child.isMesh && child.name === 'cloud') {
  //       child.position.x += speed * delta;
  //       if (child.position.x > area.right + 10) {
  //         child.position.x = area.left - 10;
  //         child.position.y = random(area.top, area.bottom);
  //         child.position.z = random(-length / 2, length / 2);
  //       }
  //     }
  //   });
  // });

  return (
    <>
      <Suspense>
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
      </Suspense>
    </>
  );
}
