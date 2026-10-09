'use client';

import { motion } from 'motion/react';

import MySelf from '@/app/_components/myself';
import GitHubHeatmap from '@/app/_components/github-heatmap';
import Experience from '@/app/_components/experience';

import { motionProps } from '../_lib/motion';

export default function Home() {
  return (
    <motion.div
      {...motionProps}
      className="flex flex-col max-md:mt-10 max-md:pt-20 h-screen justify-center flex-1 gap-20 font-sans w-[90%] sm:w-[80%] lg:w-[70%] xl:w-[60%] mx-auto"
    >
      <MySelf />
      <GitHubHeatmap />
      <Experience />
    </motion.div>
  );
}
