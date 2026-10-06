'use client';

import { GitHubCalendar } from 'react-github-calendar';
import { useEffect, useState } from 'react';

export default function GitHubHeatmap() {
  // react-github-calendar renders different markup before/after its client-side
  // data fetch, so rendering it during SSR causes a hydration mismatch. Only
  // mount it on the client, after hydration, to avoid that.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="min-h-40">
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
    </div>
  );
}
