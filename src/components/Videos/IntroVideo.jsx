'use client';

import styled from '@emotion/styled';
import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';
import { useIsMounted } from 'usehooks-ts';
import { BASE } from '../../../config';
import { AvatarChatMessageType, emitChat } from '../../events/avatarEvents';

const Container = styled.div`
  position: relative;
  margin: auto;
  width: 100%;
  height: 100%;
  overflow: hidden;
  clip-path: 0 0;
  transform: translatez(0);

  video {
    opacity: 0;
    transform: translatez(0);
    transition: all 2s ease-in-out;
    transform: translateY(5rem);
    position: absolute;
    top: -100%;
    bottom: -100%;
    left: -100%;
    right: -100%;
    filter: blur(15px);
    object-fit: cover;
    transform: scale(1.06); /* scale up to hide the edge blur */
    margin: auto;
    min-width: 100%;
    min-height: 100%;
    @media (max-width: 1350px) {
      --grid-padding: 2rem;
    }

    @media (max-width: 850px) {
      max-width: 100%;
      max-height: 100%;
    }
    &.playing {
      opacity: 1;
      filter: blur(0px);
      transform: translateY(0) scale(1);
    }
  }
  .caption {
    opacity: 0;
    position: absolute;
    bottom: 2rem;
    left: 6rem;
    right: 2rem;
    font-family: var(--font-mono);
    text-align: center;
    color: var(--color-captions);
    font-size: 3rem;
    &.visible {
      opacity: 1;
    }
  }
`;

export const IntroVideo = ({ playing, setPlaying }) => {
  const video = useRef();
  const duration = useRef();
  const [caption, setCaption] = useState('');

  let handleOnEnded = () => {
    video.current.currentTime = 0;
    setPlaying(false);
  };

  let initCaptions = () => {
    video.current.textTracks[0].mode = 'hidden'; // must occur before cues is retrieved
    let cues = video.current.textTracks[0].cues;
    for (var i in cues) {
      var cue = cues[parseInt(i)];
      if (parseInt(i) !== cues.length - 1) {
        if (typeof cue !== 'undefined') {
          cue.onenter = cueEnter;
          cue.onexit = cueExit;
        }
      }
    }
  };

  const play = () => {
    initCaptions();
    video.current.play();
  };
  const pause = () => {
    video.current.pause();
  };

  const isMounted = useIsMounted();
  useEffect(() => {
    if (!isMounted()) {
      return;
    } else {
      playing ? play() : pause();
    }
  }, [playing, isMounted]);

  const [visible, setVisible] = useState(false);

  const removeHtml = fragment => {
    const regex = /<b[^>]*>(.*?)<\/b>/g;

    // Initialize an array to store matched content
    const matches = [];

    // Use a loop to find all matches
    let match;
    while ((match = regex.exec(fragment.toString())) !== null) {
      matches.push(match[1]);
    }
    // Now 'matches' contains an array of captured text inside <b> tag
    setCaption(matches[0]);
  };

  const cueEnter = e => {
    removeHtml(e.target.text);
    emitChat({
      message: removeHtml(e.target.text),
      type: AvatarChatMessageType.ENTER,
    });
    setVisible(true);
  };
  const cueExit = e => {
    emitChat({
      message: removeHtml(e.target.text),
      type: AvatarChatMessageType.EXIT,
    });
    setVisible(false);
  };

  return (
    <Container>
      <video
        ref={video}
        duration={duration}
        onEnded={handleOnEnded}
        autoPlay={false}
        onCanPlay={initCaptions}
        id='video'
        playsInline
        className={clsx({ playing: playing })}
      >
        <source
          src={`${BASE}/videos/intro.webm`}
          type='video/webm'
        />
        <source
          src={`${BASE}/videos/intro.mov`}
          type={'video/mp4; codecs="hvc1"'}
        />
        <track
          default
          kind='captions'
          srcLang='en'
          src={`${BASE}/videos/intro.vtt`}
        />
      </video>
      <div className={clsx('caption', { visible: visible })}>{caption}</div>
    </Container>
  );
};
