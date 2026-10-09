'use client';

import { motion } from 'motion/react';

import MySelf from '@/app/_components/myself';
// import GitHubHeatmap from '@/app/_components/github-heatmap';
import Experience from '@/app/_components/experience';
import { TechStack } from '@/app/_components/TechStack';

import { motionProps } from '../_lib/motion';

export default function Home() {
  return (
    <motion.div
      {...motionProps}
      className="flex flex-col gap-20 font-sans w-[90%] sm:w-[80%] lg:w-[70%] xl:w-[60%] mx-auto"
    >
      <MySelf />
      {/* <GitHubHeatmap /> */}
      <TechStack />
      <Experience />
    </motion.div>
  );
}
