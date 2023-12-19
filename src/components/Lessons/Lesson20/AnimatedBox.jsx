import { RoundedBox } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';

export const AnimatedBox = ({ boxPositions, ...props }) => {
  const box = useRef();

  useFrame(({ clock }) => {
    const seconds = parseInt(clock.getElapsedTime());
    const targetPosition = boxPositions[seconds % boxPositions.length];

    //   box.current.position.x = THREE.MathUtils.lerp(
    //     box.current.position.x,
    //     targetPosition.x,
    //     0.05
    //   );
    //   box.current.position.y = THREE.MathUtils.lerp(
    //     box.current.position.y,
    //     targetPosition.y,
    //     0.05
    //   );
    //   box.current.position.z = THREE.MathUtils.lerp(
    //     box.current.position.z,
    //     targetPosition.z,
    //     0.05
    //   );
    // });
    box.current.position.lerp(targetPosition, 0.05);
  });

  return (
    <group {...props}>
      <RoundedBox
        scale={0.5}
        position-x={boxPositions.x}
        position-y={boxPositions.y}
        position-z={boxPositions.z}
        ref={box}
      >
        <meshStandardMaterial color='white' />
      </RoundedBox>
    </group>
  );
};
