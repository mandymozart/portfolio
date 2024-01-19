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
