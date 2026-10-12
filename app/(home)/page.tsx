'use client';

import { motion } from 'motion/react';

import MySelf from '@/app/_components/myself';
import GitHubHeatmap from '@/app/_components/github-heatmap';
import Experience from '@/app/_components/experience';
import { TechStack } from '@/app/_components/TechStack';

import { motionProps } from '@/app/_lib/motion';

export default function Home() {
  return (
    <motion.div
      {...motionProps}
      className="flex flex-col w-[90%] sm:w-[80%] lg:w-[70%] xl:w-[60%] mx-auto gap-20 font-sans"
    >
      <MySelf />
      <TechStack />
      <GitHubHeatmap />
      <Experience />
    </motion.div>
  );
}
