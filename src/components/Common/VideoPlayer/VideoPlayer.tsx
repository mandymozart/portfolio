import styled from '@emotion/styled';
import clsx from 'clsx';
import { FC, useEffect, useRef, useState } from 'react';
import useIdle from '../../../hooks/useIdle';
import PlayButton from '../FormElements/PlayButton';

const Container = styled.div`
  .video-player {
    position: relative;
    img,
    video {
      width: 100%;
      height: 100%;
      border-radius: 2rem;
      overflow: hidden;
    }
    .video-placeholder {
      border-radius: 2rem;
      overflow: hidden;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      display: flex;
      justify-content: center;
      transition: opacity 0.3s ease;
      &-overlay {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        align-content: center;
        justify-content: center;
        .play-button {
        }
      }

      opacity: 0;
      pointer-events: none;
    }

    &--visible {
      .video-placeholder {
        opacity: 1;
        pointer-events: all;
      }
    }
  }
`;

interface Props extends React.ComponentPropsWithoutRef<'div'> {
  poster: string;
}

const VideoPlayer: FC = ({ poster, ...props }: Props) => {
  const [visible, setVisible] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [ended, setEnded] = useState(false);
  const idle = useIdle(1000);
  useEffect(() => {
    // console.log('idle', idle, hovered, visible);
    if (idle && playing) {
      setVisible(false);
    }
    if (!idle && hovered) {
      setVisible(true);
    }
  }, [idle, hovered, visible]);
  const ref = useRef(null);
  const play = () => {
    if (!ref.current) return;
    ref.current.play();
    // replay if ended
    if (ended) {
      ref.current.currentTime = 0;
      setEnded(false);
    }
    setVisible(false);
    setPlaying(true);
  };
  const stop = () => {
    if (!ref.current) return;
    ref.current.pause();
    setPlaying(false);
  };
  const handleEnded = () => {
    setEnded(true);
    setPlaying(false);
  };
  return (
    <Container>
      <div
        className={clsx(
          'video-player',
          { 'video-player--visible': visible },
          { 'video-player--playing': playing },
          { 'video-player--hovered': hovered },
          { 'video-player--ended': ended },
        )}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => {
          if (playing) {
            stop();
          } else {
            play();
          }
        }}
        onEnded={handleEnded}>
        <video
          ref={ref}
          poster={poster}>
          {props.children}
        </video>
        <div className='video-placeholder'>
          <div className='video-placeholder-overlay'>
            <PlayButton className='play-button'>
              {playing ? 'Pause' : <>{ended ? 'Replay' : 'Play Video'}</>}
            </PlayButton>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default VideoPlayer;
