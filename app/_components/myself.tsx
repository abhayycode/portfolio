'use client';

import { motion } from 'motion/react';

export default function MySelf() {
  return (
    <div className="flex flex-col md:text-3xl text-2xl font-medium gap-5 md:gap-10">
      <div className="leading-8">Hey there — I&apos;m Abhay Panchal.</div>

      <p>
        A software engineer <span className="mark">(frontend heavy)</span> with{' '}
        <span className="mark">2.5+ years</span> building responsive,
        accessible, and performant web apps used by{' '}
        <span className="mark">100K+ people.</span>
      </p>

      <p>
        Previously at SurveySparrow I cut bundle size by{' '}
        <span className="mark">43%</span> and page load times by{' '}
        <span className="mark">50%</span>, owned SAML SSO for public dashboard
        sharing end to end, and was the sole owner of Analyze codebase.
      </p>

      <p>
        Currently at VectorShift I build data-dense dashboards and
        permission-aware UI for a private-market investment platform.
      </p>

      <div className="leading-relaxed">
        I post about development on
        <a href="https://www.linkedin.com/in/abhay-panchal1/">
          <motion.img
            whileHover={{
              scale: 1.15,
            }}
            src="/linkedin.webp"
            alt="LinkedIn"
            className="inline-block align-middle mx-1 rounded-md"
            width={30}
            height={30}
          />
        </a>{' '}
        and you&apos;ll find what I&apos;m building on{' '}
        <a href="https://github.com/abhayycode">
          <motion.img
            whileHover={{
              scale: 1.15,
            }}
            src="/github.webp"
            alt="GitHub"
            className="inline-block align-middle mx-1 rounded-md"
            width={30}
            height={30}
          />
        </a>
      </div>
    </div>
  );
}
