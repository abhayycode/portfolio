import Image from 'next/image';

import ComingSoon from '@/app/_svgs/coming-soon.svg';

export default function ComponentsPage() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center font-medium text-3xl">
      <Image src={ComingSoon} alt="Coming Soon..." className='size-60' />
      <p>Coming Soon...</p>
    </div>
  );
}
