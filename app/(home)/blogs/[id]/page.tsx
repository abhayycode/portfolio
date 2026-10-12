import { notFound } from 'next/navigation';

import { getComponent } from '@/app/_lib/helpers';

export default async function BlogPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const Post = getComponent({ id });

  if (!Post) notFound();

  return (
    <div className="flex flex-col h-full w-[90%] sm:w-[80%] lg:w-[70%] xl:w-[60%] mx-auto">
      <Post />
    </div>
  );
}
