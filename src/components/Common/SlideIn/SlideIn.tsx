import styled from '@emotion/styled';
import clsx from 'clsx';
import { motion, useAnimate, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';
import {
  RouteChangeEvent,
  useRouteChangeListener,
} from './../../../events/routerEvents';
import {
  SlideInRoute,
  SlideInRouteType,
  SlideInRouteVariant,
} from './../../../slideInRoutes';

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
  },
  visible: {
    y: '0vh',
  },
};
const innerVariants = {
  hidden: {
    y: '5vh',
    scale: 1,
    opacity: 0,
    filter: 'blur(20px)',
  },
  visible: {
    y: '0vh',
    scale: 1,
    opacity: 1,
    filter: 'blur(0px)',
  },
};

export function useMenuAnimation(isActive: boolean) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    // animate('.arrow', { rotate: isActive ? 180 : 0 }, { duration: 0.2 });

    // animate(
    //   '.list',
    //   {
    //     clipPath: isActive
    //       ? 'inset(0% 0% 0% 0% round 10px)'
    //       : 'inset(10% 50% 90% 50% round 10px)',
    //   },
    //   {
    //     type: 'spring',
    //     bounce: 0,
    //     duration: 0.5,
    //   },
    // );

    animate('.inner', isActive ? innerVariants.visible : innerVariants.hidden, {
      duration: 0.5,
      delay: isActive ? 0.5 : 0,
    });
  }, [isActive]);

  return scope;
}

const SlideIn = ({ children, route, ...props }: Props) => {
  const y = useMotionValue('100vh');
  const sY = useSpring(y);
  const [isActive, setIsActive] = useState(false);
  const scope = useMenuAnimation(isActive);

  useRouteChangeListener((event: RouteChangeEvent) => {
    if (event.to.key !== route.key) {
      sY.set(variant.hidden.y);
      setIsActive(false);
      return;
    }
    if (event.to.key === route.key) {
      if (
        route.type === SlideInRouteType.STATIC ||
        route.type === SlideInRouteType.ROOT
      ) {
        sY.set(variant.visible.y);
        setIsActive(true);
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
          isActive: isActive,
        })}
        ref={scope}
        {...props}>
        <div className='inner scrollable scrollable-hint'>
          {/* <div className='arrow'>➡️</div>
          <div className='list'>
            <div className='listitem'>{'item 1'}</div>
            <div className='listitem'>{'item 2'}</div>
            <div className='listitem'>{'item 3'}</div>
            <div className='listitem'>{'item 4'}</div>
          </div> */}
          {children}
        </div>
        {/* <div className='shadow-overlay shadow-overlay--top'></div> */}
        <div className='shadow-overlay shadow-overlay--bottom'></div>
      </Container>
    </motion.div>
  );
};

export default SlideIn;
