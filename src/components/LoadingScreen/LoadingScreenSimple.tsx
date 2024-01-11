import styled from '@emotion/styled';
import { useProgress } from '@react-three/drei';
import clsx from 'clsx';
import { useState } from 'react';
import LoadingBar from 'react-top-loading-bar';
import { initAudio, playTheme } from '../../audio';
import Spiral from './../Icons/Spiral';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  background-color: var(--background);
  background: rgba(253, 253, 253, 1);
  backdrop-filter: blur(10px);
  z-index: 10000;
  opacity: 1;
  transition: opacity 1s ease-out;
  .numerical {
    font-size: 6rem;
    line-height: 6rem;
    margin: 0;
    position: absolute;
    bottom: 2rem;
    right: 2rem;
    transform: translateY(0);
    transition: transform 1.2s ease-out;
  }
  &.loaded {
    opacity: 1;
    background: rgba(255, 255, 255, 0.0001);
    svg {
      animation-play-state: paused;
      scale: 1;
    }
    .numerical {
      transform: translateY(9rem);
    }
  }
  &.hidden {
    opacity: 0;
    pointer-events: none;
  }
  svg {
    width: 25vw;
    height: 25vw;
    scale: 2;
    animation: rotate 1.5s linear infinite;
    transition: scale 1.2s ease-out;
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

interface Props {
  onLoaderFinished?: () => void;
}

const LoadingScreenSimple = ({ onLoaderFinished }: Props) => {
  const { progress, loaded } = useProgress();

  /* forward reference to parent component */
  const handleFinished = () => {
    if (onLoaderFinished) onLoaderFinished();
  };
  const enter = () => {
    setHidden(true);
    initAudio();
    playTheme();
  };

  const [hidden, setHidden] = useState(false);

  return (
    <Container className={clsx({ hidden: hidden, loaded: loaded })}>
      <div className={'loading-screen__container'}>
        <Spiral />
        {loaded && (
          <button
            className='ready'
            onClick={enter}>
            Enter
          </button>
        )}
        <div className='numerical'>{parseInt(progress.toString())}%</div>
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
