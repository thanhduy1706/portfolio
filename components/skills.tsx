'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { skillsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.15 * index,
        },
    }),
};

export default function Skills() {
    const { ref } = useSectionInView('Skills');

    return (
      <section
        id="skills"
        ref={ref}
        className="mb-16 max-w-[53rem] scroll-mt-28 text-center sm:mb-30"
      >
        <SectionHeading>Skills</SectionHeading>

        <div className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
          {skillsData.map((skill, index) => (
            <motion.div
              className="px-5 py-2 bg-white rounded-lg shadow-lg borderBlack hover:bg-true-gray-900 hover:border-light-50"
              key={index}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>
    );
}
