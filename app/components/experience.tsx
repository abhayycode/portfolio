'use client';

import { motion } from 'motion/react';

const experiences = [
  {
    company: 'VectorShift',
    position: 'Software Engineer',
    date: 'Aug 2026 - Present',
  },
  {
    company: 'SurveySparrow',
    position: 'Frontend Engineer',
    date: 'May 2024 - Aug 2026',
  },
];

export default function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-4"
    >
      {experiences.map((experience) => (
        <div key={experience.company} className="flex items-center gap-4">
          <div className="flex items-center md:gap-2 max-md:flex-col max-md:items-start">
            {experience.company}
            <p className="text-xl font-medium min-w-fit">  {experience.position}</p>
          </div>

          <div
            className='flex-1 h-0.5 bg-black'
          />

          <p className="text-xl font-medium">{experience.date}</p>
        </div>
      ))}
    </motion.div>
  );
}
