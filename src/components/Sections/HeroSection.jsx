import React, { useState } from 'react';

import styled from '@emotion/styled';
import clsx from 'clsx';
import { IntroVideo } from '../Videos/IntroVideo';

const Container = styled.section`
  position: relative;
  height: 100vh;
  max-width: var(--content-width);
  margin: 0 auto;
  scroll-snap-align: start;
  h1 {
    text-align: left;
    font-weight: 400;
    font-size: 6rem;
  }
  #overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 4rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-direction: column;
    justify-content: center;
    transition: all 0.7s ease-in-out;
    transform: translateY(0);
    .message {
      text-align: center;
    }
    &.playing {
      opacity: 0;
      transform: translateY(3rem);
    }
    @media (max-width: 1350px) {
      margin: 6rem;
    }
    @media (max-width: 850px) {
      margin: 2rem;
    }
  }
  button {
    cursor: pointer;
    border: 0;
    border-radius: 2rem;
    padding: 0.5rem 1rem;
  }
`;

const HeroSection = ({ ...props }) => {
  const [playing, setPlaying] = useState(false);
  const togglePlay = () => {
    setPlaying(!playing);
  };
  return (
    <Container {...props}>
      <IntroVideo
        playing={playing}
        setPlaying={setPlaying}
      />
      <div
        id='overlay'
        className={clsx({ playing: playing })}
      >
        <h1 className='title'>
          I am Tilman Porschütz, a Vienna based creative developer crafting
          boutique experiences, websites and apps.
        </h1>
        <div className='message'></div>
        <button
          id='startButton'
          onClick={togglePlay}
        >
          {playing ? 'Pause' : 'Play'}
        </button>
      </div>
    </Container>
  );
};

export default HeroSection;
