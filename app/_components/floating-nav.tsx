'use client';

import { AnimatePresence, motion } from 'motion/react';
import { usePathname, useRouter } from 'next/navigation';

const FloatingBtnContainer = ({
  isHome = true,
  handleClick = () => {},
  label = '',
}) => {
  return (
    <div className="h-full w-fit relative flex items-center">
      <button
        onClick={handleClick}
        className={`cursor-pointer w-fit min-w-fit px-2 rounded-full relative z-10 ${isHome ? 'text-black' : 'text-white'}`}
      >
        {label}
      </button>

      {isHome && (
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
  function handleClick() {
    router.push(isHome ? '/components' : '/');
  }

  return (
    <AnimatePresence>
      <motion.div
        whileHover={{
          scale: 1.1,
        }}
        className="absolute custom-shadow left-[50%] translate-x-[-50%] top-[3%] md:top-[2%] lg:top-[3%] xl:top-[5%] bg-black rounded-full h-11 p-1 min-w-fit font-medium cursor-pointer flex items-center gap-1"
      >
        <FloatingBtnContainer
          handleClick={handleClick}
          isHome={isHome}
          label={'Home'}
        />
        <FloatingBtnContainer
          isHome={!isHome}
          handleClick={handleClick}
          label={'Comps*'}
        />
      </motion.div>
    </AnimatePresence>
  );
};
