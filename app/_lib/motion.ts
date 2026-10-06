import { EasingFunction } from 'motion/react';

export const motionProps = {
  initial: { opacity: 0, y: 10, filter: 'blur(10px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  transition: {
    duration: 0.5,
    ease: ['easeInOut'] as unknown as EasingFunction,
  },
};
