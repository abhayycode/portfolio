import MySelf from '@/app/components/myself';
import GitHubHeatmap from '@/app/components/github-heatmap';
import Experience from '@/app/components/experience';

export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-center flex-1 gap-20 font-sans w-[90%] sm:w-[80%] lg:w-[70%] xl:w-[60%] mx-auto tracking-tighter">
      <MySelf />
      <GitHubHeatmap />
      <Experience />
    </div>
  );
}
