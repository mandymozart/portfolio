import { editable as e } from '@theatre/r3f';
import { useRef } from 'react';

export const PointLight = ({ ...props }) => {
  const controls = {
    position: [9, 3, 12],
    intensity: 8.8,
    color: '#2b4159',
    distance: 10000,
    decay: 1,
  };
  const ref = useRef();
  return (
    <mesh>
      <e.ambientLight
        theatreKey='PointLight'
        {...props}
        ref={ref}
        // castShadow
        {...controls}
      />
    </mesh>
  );
};
