import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { useRef, useState } from 'react';

const Container = styled.div`
  position: relative;
  left: 2rem;
  bottom: 2rem;
  display: flex;
  align-items: start;
  gap: 1rem;
  flex-direction: column;
  justify-content: flex-end;

  button {
    pointer-events: all;
    transform: translateY(0);
    cursor: pointer;
  }

  &.playing {
    opacity: 1;
    button {
      transform: translateY(0) translateX(0);
    }
  }
`;

const VideoReaction = ({ videoid }) => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    const video = videoRef.current;
    if (playing) {
      video.pause();
      setPlaying(false);
    } else {
      video.play();
      setPlaying(true);
    }
  };

  return (
    <Container className={playing ? 'playing' : ''}>
      {videoid && (
        <video
          css={css`
            opacity: 0.1;
            pointer-events: none;
            cursor: default;
            transform: scale(1.06);
            height: 20rem;

            &.playing {
              opacity: 1;
              filter: blur(0px);
              transform: translateY(0) scale(1);
            }
          `}
          ref={videoRef}
          loop
          playsInline
          className={playing ? 'playing' : ''}
        >
          <source
            src={`/videos/${videoid}.webm`}
            type='video/webm'
          />
          <track
            default
            kind='captions'
            srclang='en'
            src={`/videos/${videoid}.vtt`}
          />
        </video>
      )}

      <div
        id='overlay'
        className={playing ? 'playing' : ''}
      >
        <button
          id='startButton'
          onClick={togglePlay}
        >
          {playing ? 'Pause' : 'Play Reaction'}
        </button>
      </div>
    </Container>
  );
};

export default VideoReaction;
