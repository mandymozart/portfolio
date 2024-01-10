import styled from '@emotion/styled';
import clsx from 'clsx';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import {
  RouteChangeEvent,
  useRouteChangeListener,
} from './../../events/routerEvents';
import {
  SlideInRoute,
  SlideInRouteType,
  SlideInRouteVariant,
} from './../../slideInRoutes';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  pointer-events: all;
  height: calc(100vh + 10rem);
  padding: 0;
  border-radius: 4rem 4rem 0 0;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.0001);
  backdrop-filter: blur(10px);
  /* background: var(--background-accent-gradient); */

  .inner {
    /* scrollbar-gutter: stable both-edges;
    overflow-y: scroll; */
    padding-top: 4rem;
    padding-bottom: 20rem;
  }
  &.isVisible {
    /* transform: translateY(0); */
  }
  &.isFooter {
    background-color: var(--primary);
    color: var(--background);
    /* background: #0f0c29; /* fallback for old browsers */
    /* background: -webkit-linear-gradient(
      to right,
      #24243e,
      #302b63,
      #0f0c29 
    ); */
    /* background: linear-gradient(
      to right,
      #24243e,
      #302b63,
      #0f0c29 
    );  */

    .shadow-overlay--bottom {
      background: linear-gradient(
        to top,
        rgb(30, 30, 30) 50%,
        rgba(30, 30, 30, 0)
      );
    }
  }
  .shadow-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 25rem;
    /* background: linear-gradient(
      to bottom,
      rgba(255, 217, 0, 1),
      rgba(255, 217, 0, 0)
    ); */
    opacity: 1;
    transition: opacity 0.3s;
    pointer-events: none;
    &--bottom {
      top: auto;
      bottom: 0;
      /* background: linear-gradient(
        to top,
        rgba(255, 217, 0, 1) 50%,
        rgba(255, 217, 0, 0)
      ); */
    }
    &:hover {
      opacity: 0;
    }
  }
`;

interface Props extends React.ComponentPropsWithoutRef<'div'> {
  route: SlideInRoute;
}

const variant = {
  hidden: {
    y: '100vh',
    scaleX: 0.5,
  },
  visible: {
    y: '0vh',
    scaleX: 1,
  },
};

const SlideIn = ({ children, route, ...props }: Props) => {
  const y = useMotionValue('100vh');
  const sY = useSpring(y);

  useRouteChangeListener((event: RouteChangeEvent) => {
    if (event.to.key !== route.key) {
      sY.set(variant.hidden.y);
      return;
    }
    if (event.to.key === route.key) {
      if (
        route.type === SlideInRouteType.STATIC ||
        route.type === SlideInRouteType.ROOT
      ) {
        sY.set(variant.visible.y);
        return;
      }
    }
  });

  if (!route) return <></>;
  return (
    <motion.div style={{ y: sY }}>
      <Container
        className={clsx({
          isFooter: route.variant === SlideInRouteVariant.FOOTER,
        })}
        {...props}>
        <div className='inner scrollable scrollable-hint'>{children}</div>
        {/* <div className='shadow-overlay shadow-overlay--top'></div> */}
        <div className='shadow-overlay shadow-overlay--bottom'></div>
      </Container>
    </motion.div>
  );
};

export default SlideIn;
