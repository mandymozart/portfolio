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
  background-color: #f1f1f185;
  backdrop-filter: blur(10px);
  z-index: 10000;
  opacity: 1;
  transition: opacity 0.5s linear;
  &.hidden {
    opacity: 0;
    pointer-events: none;
  }
`;

const LoadingScreen = ({ onLoaderFinished }) => {
  const { progress } = useProgress();
  const [hidden, setHidden] = useState(false);

  const handleFinished = () => {
    setHidden(true);
    if (onLoaderFinished) onLoaderFinished();
  };

  return (
    <Container className={clsx({ active: !hidden, hidden: hidden })}>
      <div className={'loading-screen__container'}>
        <h1>WAWA Sensei Course R3F</h1>
        <p>Loading ... {parseInt(progress)}%</p>
        <LoadingBar
          color={'#1E1E1E'}
          progress={progress}
          onLoaderFinished={handleFinished}
        />
      </div>
    </Container>
  );
};

export default LoadingScreen;
