'use client';

import { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { redirect } from 'next/navigation';

import { blogs } from '@/app/_lib/constants';
import { motionProps } from '@/app/_lib/motion';

export default function ComponentsPage() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const reduce = useReducedMotion();

  return (
    <motion.div
      {...motionProps}
      className="h-full flex flex-col gap-5 w-[90%] sm:w-[80%] lg:w-[70%] xl:w-[60%] mx-auto"
    >
      <p className="text-2xl font-medium">
        Frontend blogs mostly related to{' '}
        <span className="mark">Web Porformance</span> and{' '}
        <span className="mark">micro Interactions</span>:
      </p>

      <div className="w-full h-0.5 bg-black" />

      <div
        className="flex flex-col gap-2"
        onPointerLeave={() => setHoveredId(null)}
      >
        {Object.entries(blogs).map(([_, { id, title }], index) => {
          const blurred = !reduce && hoveredId !== null && hoveredId !== id;

          return (
            <motion.div
              key={id}
              className="text-xl cursor-pointer w-fit"
              onPointerEnter={(event) => {
                if (event.pointerType === 'touch') return;
                setHoveredId(id);
              }}
              onClick={() => redirect(`/blogs/${id}`)}
              animate={{ filter: blurred ? 'blur(3px)' : 'blur(0px)' }}
              transition={{ duration: 0.15, ease: 'easeIn' }}
            >
              {index + 1}. {title}.
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
