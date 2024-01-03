import { Cloud } from '@react-three/drei';
import { useControls } from 'leva';
import { Suspense } from 'react';

export function Heaven({ ...props }) {
  const { speed, position } = useControls('CLOUDS', {
    speed: {
      value: 0.1,
      min: 0,
      max: 1,
      step: 0.01,
    },
    position: {
      x: 0,
      y: 30,
      z: -20,
    },
  });
  return (
    <>
      <Suspense>
        <group
          {...props}
          position={[position.x, position.y, position.z]}
        >
          <group>
            <Cloud
              position={[-20, 0, 0]}
              speed={speed}
            />
            <Cloud
              position={[-15, 0, 0]}
              speed={speed}
            />
            <Cloud
              position={[-10, 0, 0]}
              speed={speed}
            />
            <Cloud
              position={[-5, 0, 0]}
              speed={speed}
            />
            <Cloud
              position={[0, 0, 0]}
              speed={speed}
            />
            <Cloud
              position={[5, 0, 0]}
              speed={speed}
            />
            <Cloud
              position={[10, 0, 0]}
              speed={speed}
            />
            <Cloud
              position={[15, 0, 0]}
              speed={speed}
            />
            <Cloud
              position={[20, 0, 0]}
              speed={speed}
            />
          </group>
          <group>
            <Cloud
              position={[-10, 0, 0]}
              speed={speed}
            />
            <Cloud
              position={[-5, 0, 0]}
              speed={speed}
            />
            <Cloud
              position={[0, 0, 0]}
              speed={speed}
            />
            <Cloud
              position={[5, 0, 0]}
              speed={speed}
            />
            <Cloud
              position={[10, 0, 0]}
              speed={speed}
            />
          </group>
          <group position-z={10}>
            <Cloud
              position={[-10, 0, 0]}
              speed={speed}
            />
            <Cloud
              position={[-5, 0, 0]}
              speed={speed}
            />
            <Cloud
              position={[0, 0, 0]}
              speed={speed}
            />
            <Cloud
              position={[5, 0, 0]}
              speed={speed}
            />
            <Cloud
              position={[10, 0, 0]}
              speed={speed}
            />
          </group>
        </group>
      </Suspense>
    </>
  );
}
