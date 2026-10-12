import fs from 'node:fs';
import path from 'node:path';

import type { ComponentType } from 'react';
import dynamic from 'next/dynamic';

import { blogs } from '@/app/_lib/constants';

const postsDir = path.join(process.cwd(), 'app/(home)/blogs/_posts');

const posts: Record<string, ComponentType> = {};

for (const id of Object.keys(blogs)) {
  if (!fs.existsSync(path.join(postsDir, `${id}.tsx`))) continue;

  posts[id] = dynamic(() => import(`../(home)/blogs/_posts/${id}.tsx`));
}

export const getComponent = ({ id }: { id: string }) => {
  return posts[id];
};
