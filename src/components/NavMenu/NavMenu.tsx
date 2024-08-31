'use client';
import styled from '@emotion/styled';
import { IoMoonOutline, IoSunnyOutline, IoVolumeHighOutline, IoVolumeMuteOutline } from 'react-icons/io5';
import useMenuStore from '../../stores/MenuStore';
import {
  BREAKPOINT_L,
  BREAKPOINT_SM,
  BREAKPOINT_XS
} from './../../../config';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  initAudio,
  isAudioMuted,
  playChordAtRoute,
  playToneAtRoute,
  toggleMute,
} from '../../audio';
import { IRoute, routes } from '../../routes';
import SynthControlPanel from '../SynthControlPanel';

const Container = styled.div`
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  z-index: 10;
  margin: 0;

  nav {
    height: 4rem;
    display: grid;
    grid-template-columns: 3fr 1fr 1fr 1fr; // Adjusted to fit the night mode button
    width: var(--content-width);
    margin: 0 auto;
    align-items: center;
    &:hover {
      cursor: pointer;
    }
    @media (max-width: ${BREAKPOINT_L}) {
      width: auto;
    }
    @media (max-width: ${BREAKPOINT_SM}) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
      padding: 0 var(--grid-padding);
      gap: var(--grid-padding);
    }
    @media (max-width: ${BREAKPOINT_XS}) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
      padding: 0 var(--grid-padding);
      gap: var(--grid-padding);
    }
  }

  .item {
    text-decoration: none;
    font-weight: 400;
    font-size: 1rem;
    font-family: var(--font);
    background: none;
    border: 0;
    margin: 0 var(--grid-padding);
    @media (max-width: ${BREAKPOINT_XS}) {
      margin: 0;
    }
    padding: 0;
    color: inherit;
    display: flex;
    cursor: pointer;
    align-items: center;
    transition: all 0.2s ease-in;
    position: relative;
    span {
      margin-left: 0;
      padding: 0.5rem 2rem;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 0 var(--grid-padding);
      border-radius: 2rem;
      background: rgba(255, 255, 255, 0.0001);
      backdrop-filter: blur(10px);
      height: 2rem;
      transition: all 0.2s ease-in-out;
    }
    &.item--projects {
      &.active,
      &:hover {
        span {
          background: var(--aero-blue);
          color: var(--primary);
        }
      }
    }
    &.item--about {
      &.active,
      &:hover {
        span {
          background: var(--perfume);
          color: var(--primary);
        }
      }
    }
    &.item--home {
      span {
        display: block;
        height: 2rem;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0 var(--grid-padding);
        border-radius: 2rem;
        margin-right: 1rem;
        @media (max-width: ${BREAKPOINT_XS}) {
          margin: 0;
        }
        background: rgba(255, 255, 255, 0.0001);
        backdrop-filter: blur(10px);
      }
      &.active span,
      &:hover span {
        background: var(--primary);
        color: var(--background);
        letter-spacing: normal;
      }
    }

    &.active,
    &:hover {
      color: var(--secondary);
      span {
        background: rgba(255, 255, 255, 0.11);
        backdrop-filter: blur(10px);
      }
    }
  }
  .controls {
    display: flex;
    gap: 1rem;
    justify-content: flex-end;
    align-items: center;
    padding: 0 var(--grid-padding);
    .item {
      margin: 0;
    }
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1000;
  background: ${(props) => (props.isNightMode ? 'white' : 'transparent')};
  mix-blend-mode: ${(props) => (props.isNightMode ? 'difference' : 'normal')};
  transition: all 0.3s ease-in-out;
`;

const navItems = [routes.HOME, routes.PROJECTS, routes.ABOUT];

const NavMenu = () => {
  const { activeMenuItem, setActiveMenuItem } = useMenuStore();
  const navigate = useNavigate();

  const [isMuted, setIsMuted] = useState(isAudioMuted());
  const [isNightMode, setIsNightMode] = useState(false);

  useEffect(() => {
    initAudio(isNightMode);
  }, [isNightMode]);

  const [isSynthControlVisible, setIsSynthControlVisible] = useState(false);

  const handleToggleSynthControl = () => {
    setIsSynthControlVisible((prev) => !prev);
  };

  const handleToggleMute = () => {
    toggleMute();
    setIsMuted(isAudioMuted());
  };

  const handleToggleNightMode = () => {
    setIsNightMode((prevMode) => !prevMode);
  };

  const navigateTo = (to: IRoute) => {
    if (activeMenuItem.key === to.key) {
      playToneAtRoute();
    } else {
      playChordAtRoute(to.key);
      navigate(to.slug);
      setActiveMenuItem(to);
    }
  };

  return (
    <>
      <Overlay isNightMode={isNightMode} />
      <Container isNightMode={isNightMode}>
        <nav>
          {navItems.map((route) => (
            <div key={route.key}>
              <button
                onClick={() => navigateTo(route)}
                className={`item item--${route.key} ${
                  activeMenuItem.key === route.key ? 'active' : ''
                }`}
              >
                <span>{route.label}</span>
              </button>
            </div>
          ))}
          <div className='controls'>
          {/* <button onClick={handleToggleSynthControl} className="item item--synth-control">
            <IoCogOutline size={20} />
          </button> */}
            <button onClick={handleToggleNightMode} className="item item--night-mode">
              {isNightMode ? <IoSunnyOutline  size={20} /> : <IoMoonOutline  size={20} />}
            </button>
            <button onClick={handleToggleMute} className="item item--mute">
              {isMuted ? <IoVolumeMuteOutline size={20} /> : <IoVolumeHighOutline size={20} />}
            </button>
          </div>
        </nav>
      </Container>
      {isSynthControlVisible && <SynthControlPanel />}
    </>
  );
};

export default NavMenu;
