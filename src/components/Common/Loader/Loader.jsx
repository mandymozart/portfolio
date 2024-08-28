import { useEffect } from 'react';

import styled from '@emotion/styled';
import { useScroll, useTransform } from 'framer-motion';

const Container = styled.div`
  transition: opacity 0.3s linear;
  opacity: 1;
  pointer-events: none;
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
  const { scrollYProgress } = useScroll();
// Transform scrollYProgress to a suitable range for strokeDasharray
const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

useEffect(() => {
  console.log('progress', scrollYProgress.get());
}, [scrollYProgress]);
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
          r='13'
          pathLength='1'
          className='indicator'
          strokeDasharray={`${pathLength}px 1px`}
        />
      </svg>
    </Container>
  );
};

export default Loader;
