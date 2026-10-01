import MySelf from '@/app/components/myself';
import GitHubHeatmap from '@/app/components/github-heatmap';
import Experience from '@/app/components/experience';

export default function Home() {
  return (
    <div className="flex flex-col flex-1 md:pt-72 pt-32 gap-20 font-sans w-[90%] sm:w-[80%] lg:w-[70%] xl:w-[40%] mx-auto tracking-tighter">
      <MySelf />
      <GitHubHeatmap />
      <Experience />
    </div>
  );
}
