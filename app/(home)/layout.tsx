import { FloatingNav } from '@/app/_components/floating-nav';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-screen w-full relative">
      {children}
      <FloatingNav />
    </div>
  );
}
