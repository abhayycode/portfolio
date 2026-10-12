'use client';

import { useRouter } from 'next/navigation';

import { BackButton } from '@/app/_svgs/BackButton';

export const BlogContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <article className={`${className} flex flex-col gap-5 pb-10`}>{children}</article>
  );
};

export function Heading({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <p className={`${className} text-3xl max-md:text-2xl`}>{children}</p>;
}

export function BackBtn() {
  const router = useRouter();

  return (
    <button
      className="p-1 rounded-md hover:bg-foreground w-fit cursor-pointer"
      onClick={() => router.push('/blogs')}
    >
      <BackButton />
    </button>
  );
}

export function Paragraphs({ children }: { children: React.ReactNode }) {
  return <p className="text-xl">{children}</p>;
}

export function BlogContainerMainContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex flex-col gap-3">{children}</div>;
}
