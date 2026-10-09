'use client';

import { AnimatePresence, motion } from 'motion/react';
import { usePathname, useRouter } from 'next/navigation';

const FloatingBtnContainer = ({
  isSelected = true,
  handleClick = (_: string) => {},
  label = '',
}) => {
  return (
    <div className="h-full w-fit relative flex items-center">
      <button
        onClick={() => {
          handleClick(label == 'Home' ? '/' : '/components');
        }}
        className={`cursor-pointer w-fit min-w-fit px-2 rounded-full relative z-10 ${isSelected ? 'text-black' : 'text-white'}`}
      >
        {label}
      </button>

      {isSelected && (
        <motion.div
          layoutId="home"
          className="w-full h-full bg-white absolute top-0 left-0 rounded-full"
        />
      )}
    </div>
  );
};

export const FloatingNav = () => {
  /* ---------------------- Routing ---------------------- */
  const router = useRouter();
  const pathName = usePathname();

  const isHome = pathName == '/';

  /* ---------------------- Handlers ---------------------- */
  function handleClick(redirectUrl: string) {
    router.push(redirectUrl);
  }

  return (
    <AnimatePresence>
      <motion.div
        whileHover={{
          scale: 1.1,
        }}
        className="fixed custom-shadow left-[50%] translate-x-[-50%] top-[3%] md:top-[2%] lg:top-[3%] xl:top-[5%] bg-black rounded-full h-11 p-1 min-w-fit font-medium cursor-pointer flex items-center gap-1"
      >
        <FloatingBtnContainer
          handleClick={handleClick}
          isSelected={isHome}
          label={'Home'}
        />
        <FloatingBtnContainer
          isSelected={!isHome}
          handleClick={handleClick}
          label={'comps'}
        />
      </motion.div>
    </AnimatePresence>
  );
};
