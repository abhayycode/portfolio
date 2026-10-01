'use client';

import { GitHubCalendar } from 'react-github-calendar';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function GitHubHeatmap() {
  // react-github-calendar renders different markup before/after its client-side
  // data fetch, so rendering it during SSR causes a hydration mismatch. Only
  // mount it on the client, after hydration, to avoid that.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="min-h-[160px]"
    >
      {mounted && (
        <GitHubCalendar
          username="abhayycode"
          fontSize={14}
          colorScheme="light"
          theme={{
            light: ['#ebedf0', '#c6c6c6', '#8f8f8f', '#4d4d4d', '#111111'],
          }}
        />
      )}
    </motion.div>
  );
}
