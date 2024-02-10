import { useEffect } from 'react';

import styled from '@emotion/styled';
import { useMotionValue } from 'framer-motion';
import useMenuStore from '../../../stores/MenuStore';

const Container = styled.div`
  transition: opacity 0.3s linear;
  opacity: 1;
  pointer-events: none;
  position: fixed;
  top: 1rem;
  left: 2rem;
  z-index: 100001;
  display: flex;
  align-self: center;

  circle {
    stroke-dashoffset: 0;
    stroke-width: 0.25rem;
    fill: none;
  }

  #progress .indicator {
    stroke: var(--primary);
  }
`;

const Loader = () => {
  const { scrollYProgress } = useMenuStore();
  useEffect(() => {
    console.log('progress', scrollYProgress);
  }, [scrollYProgress]);
  const y = useMotionValue(scrollYProgress);
  return (
    <Container
    // style={{ transform: `rotate(${scrollYProgress * 5 * 360}deg)` }}
    >
      <svg
        id='progress'
        width='32'
        height='32'
        viewBox='0 0 32 32'>
        <circle
          cx='16'
          cy='16'
          r='8'
          pathLength='1'
          className='indicator'
          strokeDasharray={`${scrollYProgress}px 1px`}
        />
      </svg>
    </Container>
  );
};

export default Loader;
