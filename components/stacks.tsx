"use client";

import React from "react";
import Image from "next/image";
import SectionHeading from "./section-heading";
import { stacksData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

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

export default function Stacks() {
  const { ref } = useSectionInView("Stacks");

  return (
    <section
      id="stacks"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My tech stacks</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-4 text-lg text-gray-800">
        {stacksData.map((stack, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl p-4 dark:bg-white/10 dark:text-white/80 hover:scale-105 transition-transform"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {/* Using Next.js Image component for better performance */}
            <div className="relative w-10 h-10">
              <Image
                src={stack.url}
                alt={`${stack.name} logo`}
                fill
                className="object-contain"
                sizes="40px"
              />
            </div>
            <span className="sr-only">{stack.name}</span>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
