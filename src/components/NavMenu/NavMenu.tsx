'use client';
import styled from '@emotion/styled';
import useMenuStore from '../../stores/MenuStore';
import Loader from '../Common/Loader/Loader';
import {
  BREAKPOINT_L,
  BREAKPOINT_MD,
  BREAKPOINT_SM,
  BREAKPOINT_XS,
} from './../../../config';
import { emitRouteChange } from './../../events/routerEvents';

import { playToneAtRoute } from '../../audio';
import { SlideInRoute, routes } from './../../slideInRoutes';

const Container = styled.div`
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  z-index: 1;
  margin: 0;
  nav {
    height: 4rem;
    display: grid;
    grid-template-columns: 4fr 1fr 1fr;
    width: var(--content-width);
    margin: 0 auto;
    &:hover {
      cursor: pointer;
    }
    @media (max-width: ${BREAKPOINT_L}) {
      width: auto;
    }
    @media (max-width: ${BREAKPOINT_MD}) {
    }
    @media (max-width: ${BREAKPOINT_SM}) {
    }
    @media (max-width: ${BREAKPOINT_XS}) {
      grid-template-columns: 1fr 1fr 1fr;
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
      /* padding: 0 2rem; */
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
      &.active span {
        padding-right: 8rem;
        @media (max-width: ${BREAKPOINT_XS}) {
          padding-right: var(--grid-padding);
        }
      }
      /* letter-spacing: 0.2rem; */
    }
  }
`;

const navItems = [routes.PROJECTS, routes.ABOUT];

const NavMenu = () => {
  const { activeMenuItem, setActiveMenuItem } = useMenuStore();

  const navigateTo = (to: SlideInRoute) => {
    if (activeMenuItem.key === to.key) {
      playToneAtRoute();
    } else {
      playToneAtRoute(to.key);
      emitRouteChange({ to });
      setActiveMenuItem(to);
    }
  };

  return (
    <Container>
      <nav>
        <button
          onClick={() => navigateTo(routes.HOME)}
          className={`item item--home ${
            activeMenuItem.key === routes.HOME.key ? 'active' : ''
          }`}>
          <span>Home</span>
          <Loader />
        </button>

        {navItems.map((route) => (
          <button
            onClick={() => navigateTo(route)}
            key={route.key}
            className={`item item--${route.key} ${
              activeMenuItem.key === route.key ? 'active' : ''
            }`}>
            <span> {route.label}</span>
          </button>
        ))}
      </nav>
    </Container>
  );
};

export default NavMenu;
