'use client';
import styled from '@emotion/styled';
import { useProgress } from '@react-three/drei';
import clsx from 'clsx';
import { useState } from 'react';
import LoadingBar from 'react-top-loading-bar';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  background-color: var(--background);
  backdrop-filter: blur(10px);
  z-index: 10000;
  opacity: 1;
  transition: opacity 0.2s ease-out;
  p {
    font-size: 70vh;
    margin: 0;
  }
  &.hidden {
    opacity: 0;
    pointer-events: none;
  }
`;

const LoadingScreenSimple = ({ onLoaderFinished }) => {
  const { progress } = useProgress();

  const handleFinished = () => {
    setHidden(true);
    if (onLoaderFinished) onLoaderFinished();
  };

  const [hidden, setHidden] = useState(false);
  return (
    <Container className={clsx({ hidden: hidden })}>
      <div className={'loading-screen__container'}>
        <p>{parseInt(progress)}%</p>
        <LoadingBar
          color={'#1E1E1E'}
          progress={progress}
          onLoaderFinished={handleFinished}
        />
      </div>
    </Container>
  );
};

export default LoadingScreenSimple;
