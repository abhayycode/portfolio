'use client';
import { EasingFunction, motion } from 'motion/react';

const motionProps = {
  initial: { opacity: 0, y: 10, filter: 'blur(10px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  transition: {
    duration: 0.5,
    ease: ['easeInOut'] as unknown as EasingFunction,
  },
};

export default function MySelf() {
  return (
    <div className="flex flex-col md:text-3xl text-2xl font-medium tracking-tighter">
      <motion.div className="leading-8" {...motionProps}>
        Hey there — I&apos;m Abhay Panchal{' '}
        <motion.img
          src="/cat.jpeg"
          alt="Abhay Panchal"
          width={50}
          height={50}
          className="rounded-full w-12.5 h-12.5 inline-block align-middle mx-1"
          transition={{ duration: 0.35, ease: 'easeInOut' }}
        />
        , a software engineer (frontend heavy) learning full stack along side. Right now I&apos;m
        building the features at <span className="">VectorShift</span>.
      </motion.div>

      <motion.div className="mt-10 leading-relaxed" {...motionProps}>
        I post about development on
        <a href="https://www.linkedin.com/in/abhay-panchal1/">
          <motion.img
            whileHover="hover"
            variants={{
              hover: { scale: 1.15 },
            }}
            src="/linkedin.webp"
            alt="LinkedIn"
            className="inline-block align-middle mx-1 rounded-md"
            width={30}
            height={30}
          />
        </a>{' '}
        and you&apos;ll find what I&apos;m building on{' '}
        <a href="https://github.com/abhayycode">
          <motion.img
            whileHover="hover"
            variants={{
              hover: { scale: 1.15 },
            }}
            src="/github.webp"
            alt="GitHub"
            className="inline-block align-middle mx-1 rounded-md"
            width={30}
            height={30}
          />
        </a>
      </motion.div>
    </div>
  );
}
