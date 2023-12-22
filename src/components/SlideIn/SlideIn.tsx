import { useRouteChangeListener } from '@/events/routerEvents';
import { SlideInRoute, SlideInRouteVariant } from '@/slideInRoutes';
import styled from '@emotion/styled';
import clsx from 'clsx';
import { distance2D, motion, useMotionValue, useSpring } from 'framer-motion';

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
  background-color: var(--color-captions);
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
  }
  .shadow-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 15rem;
    background: linear-gradient(
      to bottom,
      rgba(255, 217, 0, 1),
      rgba(255, 217, 0, 0)
    );
    opacity: 1;
    transition: opacity 0.3s;
    pointer-events: none;
    &--bottom {
      top: auto;
      bottom: 0;
      background: linear-gradient(
        to top,
        rgba(255, 217, 0, 0.533),
        rgba(255, 217, 0, 0)
      );
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
  const deltaY = useMotionValue(0);

  const handleDrag = (ev: MouseEvent | PointerEvent | DragEvent) => {
    sY.set(ev.y);
  };

  const handleDragStart = (ev: MouseEvent | PointerEvent | DragEvent) => {
    deltaY.set(ev.y);
  };

  const handleDragEnd = (ev: MouseEvent | PointerEvent | DragEvent) => {
    const d = distance2D({ x: 0, y: ev.y }, { x: 0, y: deltaY.get() });
    // console.log(ev.y, deltaY.get(), d);
    if (deltaY.get() < ev.y) {
      sY.set(variant.hidden.y);
    } else {
      sY.set(variant.visible.y);
    }
  };

  useRouteChangeListener(routeChange => {
    if (routeChange.to.key !== route.key) {
      // console.log('hide:', route.key);
      sY.set(variant.hidden.y);
      return;
    }
    if (routeChange.to.key === route.key) {
      // console.log('show', route.key);
      sY.set(variant.visible.y);
      return;
    }
  });

  if (!route) return <></>;
  return (
    <motion.div
      style={{ y: sY }}
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragTransition={{ bounceStiffness: 500, bounceDamping: 20 }}
      dragElastic={1}
      onDrag={handleDrag}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <Container
        className={clsx({
          isFooter: route.variant === SlideInRouteVariant.FOOTER,
        })}
        {...props}
      >
        <div className='inner scrollable scrollable-hint'>{children}</div>
        {/* <div className='shadow-overlay shadow-overlay--top'></div> */}
        <div className='shadow-overlay shadow-overlay--bottom'></div>
      </Container>
    </motion.div>
  );
};

export default SlideIn;
