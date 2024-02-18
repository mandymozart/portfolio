import fibonacci from '@stdlib/math-base-special-fibonacci';
import { Variants } from 'framer-motion';

export const revealVariants: Variants = {
  offscreen: {
    y: 10,
    opacity: 0,
    scale: 0.7,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      bounce: 0.1,
      duration: 0.5,
    },
  },
};
export const staggerVariants: Variants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: (index: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.1,
      duration: 0.5,
      delay: 0 + fibonacci(index + 1) * 0.1,
    },
  }),
};
export const staggerOnceVariants: Variants = {
  initial: {
    y: 50,
    opacity: 0,
  },
  enter: (index: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.1,
      duration: 0.5,
      delay: 0 + fibonacci(index + 1) * 0.1,
    },
  }),
};

export const translateProjectVariants = {
  initial: {
    y: '50',
    height: 0,
    opacity: 0,
  },
  enter: (i) => ({
    y: 0,
    height: '100%',
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.76, 0, 0.24, 1],
      delay: 0 + fibonacci(i * 0.1) + 1,
    },
  }),
  exit: (i) => ({
    y: '50',
    height: 0,
    opacity: 0,
    transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: i },
  }),
};

export const blurVariants = {
  initial: {
    filter: 'blur(0px)',
    opacity: 1,
  },
  open: {
    filter: 'blur(4px)',
    opacity: 0.6,
    transition: { duration: 0.3 },
  },
  closed: {
    filter: 'blur(0px)',
    opacity: 1,
    transition: { duration: 0.3 },
  },
};

export const translateVariants = {
  initial: {
    y: '100%',
    opacity: 0,
  },
  enter: (i) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: i[0] + 0.5 },
  }),
  exit: (i) => ({
    y: '100%',
    opacity: 0,
    transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: i[1] },
  }),
};

export const fastTranslateVariants = {
  initial: {
    y: '100%',
    opacity: 0,
  },
  enter: (i) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: i[0] },
  }),
  exit: (i) => ({
    y: '100%',
    opacity: 0,
    transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: i[1] },
  }),
};
