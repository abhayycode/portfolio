'use client';

import { motion } from 'motion/react';

export default function MySelf() {
  return (
    <div className="flex flex-col md:text-3xl text-2xl font-medium tracking-tighter">
      <div className="leading-8">
        Hey there — I&apos;m Abhay Panchal{' '}
        <img
          src="/cat.jpeg"
          alt="Abhay Panchal"
          width={50}
          height={50}
          className="rounded-full w-12.5 h-12.5 inline-block align-middle mx-1"
        />
        , a software engineer (frontend heavy) learning full stack along side.
        Right now I&apos;m building the features at{' '}
        <span className="">VectorShift</span>.
      </div>

      <div className="mt-10 leading-relaxed">
        I post about development on
        <a href="https://www.linkedin.com/in/abhay-panchal1/">
          <motion.img
            whileHover={{
              scale: 1.15,
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
            whileHover={{
              scale: 1.15,
            }}
            src="/github.webp"
            alt="GitHub"
            className="inline-block align-middle mx-1 rounded-md"
            width={30}
            height={30}
          />
        </a>
      </div>
    </div>
  );
}
