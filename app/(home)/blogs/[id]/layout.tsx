'use client';

import { motionProps } from '@/app/_lib/motion';
import { motion } from 'motion/react';

export default function DetailedBlogPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div {...motionProps} className="w-full h-full">
      {children}
    </motion.div>
  );
}
