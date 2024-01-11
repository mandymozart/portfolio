import { useEffect } from 'react';

import styled from '@emotion/styled';
import { useProgress } from '@react-three/drei';
import clsx from 'clsx';
import useMenuStore from '../../stores/MenuStore';
import Spiral from '../Icons/Spiral';

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
  svg {
    width: 2rem;
    animation: rotate 1.5s linear infinite;
  }

  &.paused svg {
    animation-play-state: paused;
  }

  &.active svg {
    transform: scale(1.2);
  }

  @keyframes rotate {
    0% {
      -webkit-transform: rotate3d(0, 0, 1, 0deg);
      transform: rotate3d(0, 0, 1, 0deg);
    }
    25% {
      -webkit-transform: rotate3d(0, 0, 1, 90deg);
      transform: rotate3d(0, 0, 1, 90deg);
    }
    50% {
      -webkit-transform: rotate3d(0, 0, 1, 180deg);
      transform: rotate3d(0, 0, 1, 180deg);
    }
    75% {
      -webkit-transform: rotate3d(0, 0, 1, 270deg);
      transform: rotate3d(0, 0, 1, 270deg);
    }
    100% {
      -webkit-transform: rotate3d(0, 0, 1, 360deg);
      transform: rotate3d(0, 0, 1, 360deg);
    }
  }
`;

const Loader = () => {
  const { active, progress, loaded } = useProgress();

  const { scrollYProgress } = useMenuStore();
  useEffect(() => {
    console.log('progress', progress, scrollYProgress);
  }, [scrollYProgress]);

  return (
    <Container
      className={clsx({ active: active, paused: !active })}
      style={{ transform: `rotate(${scrollYProgress * 5 * 360}deg)` }}>
      <Spiral />
      {!loaded && <span>{parseInt(progress)}%</span>}
    </Container>
  );
};

export default Loader;
