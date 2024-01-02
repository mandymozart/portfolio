'use client';
import { emitRouteChange } from '@/events/routerEvents';
import useMonoSynth from '@/hooks/useMonoSynth';
import { SlideInRoute, routes } from '@/slideInRoutes';
import styled from '@emotion/styled';
import useMenuStore from '../../stores/MenuStore';
import Loader from '../Loader/Loader';

const Container = styled.div`
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  z-index: 100000;
  margin: 0;
  nav {
    height: 4rem;
    display: grid;
    grid-template-columns: 3fr 1fr 1fr 1fr;
    width: var(--content-width);
    margin: 0 auto;
    &:hover {
      cursor: pointer;
    }
    @media (max-width: 1350px) {
    }
    @media (max-width: 850px) {
      grid-template-columns: 1fr 1fr;
    }
  }

  .item {
    text-decoration: none;
    font-weight: 400;
    font-size: 1rem;
    font-family: var(--font-serif);
    background: none;
    border: 0;
    color: inherit;
    display: flex;
    cursor: pointer;
    align-items: center;
    transition: all 0.2s ease-in;
    span {
      margin-left: 0;
      padding: 0.5rem 2rem;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 0 2rem;
      border-radius: 2rem;
      background: rgba(255, 255, 255, 0.0001);
      backdrop-filter: blur(10px);
      height: 2rem;
    }
    &--home {
      padding: 0 2rem;
      span {
        display: block;
        width: 2rem;
        height: 2rem;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        border-radius: 2rem;
        background: rgba(255, 255, 255, 0.0001);
        backdrop-filter: blur(10px);
      }
      &.active span,
      &:hover span {
        background: var(--primary);

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
      /* letter-spacing: 0.2rem; */
    }
  }
`;

const navItems = [routes.PROJECTS, routes.EXPERIENCES, routes.RESUME];

const NavMenu = () => {
  const activeMenuItem = useMenuStore(store => store.activeMenuItem);
  const setActiveMenuItem = useMenuStore(store => store.setActiveMenuItem);

  const { playToneAtRoute } = useMonoSynth();

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
          }`}
        >
          <Loader />
        </button>
        {navItems.map(route => (
          <button
            onClick={() => navigateTo(route)}
            key={route.key}
            className={`item ${
              activeMenuItem.key === route.key ? 'active' : ''
            }`}
          >
            <span>{route.label}</span>
          </button>
        ))}
      </nav>
    </Container>
  );
};

export default NavMenu;
