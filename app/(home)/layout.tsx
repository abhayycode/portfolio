import { FloatingNav } from '@/app/_components/floating-nav';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-screen w-full relative overflow-y-auto max-md:pt-32 md:pt-40 lg:pt-52 pb-10">
      {children}
      <FloatingNav />
    </div>
  );
}
