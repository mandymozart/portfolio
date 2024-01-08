import { PivotControls, useHelper } from '@react-three/drei';
import { useControls } from 'leva';
import { useRef } from 'react';
import { BoxHelper } from 'three';

export const PointLight = ({ ...props }) => {
  const ref = useRef();
  useHelper(ref, BoxHelper, 'red');
  const controls = useControls('LIGHT', {
    position: [10, 10, -20],
    intensity: 100,
    color: '#ffffff',
    distance: 10000,
    decay: 1,
    active: {
      value: true,
    },
  });
  return (
    <PivotControls
      visible
      object={ref}
      rotation={[0, -Math.PI / 2, 0]}
      depthTest={false}
      lineWidth={2}
      anchor={[0, 1, 0]}
    >
      <mesh
        {...props}
        ref={ref}
        position={controls.position}
      >
        <boxGeometry
          width={10}
          height={10}
          depth={10}
        />
        <meshBasicMaterial
          color='white'
          transparent
          opacity={1}
        />
        {controls.active && (
          <pointLight
            castShadow
            {...controls}
          />
        )}
      </mesh>
    </PivotControls>
  );
};
