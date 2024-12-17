"use client";

import React from "react";
import Image from "next/image";
import SectionHeading from "./section-heading";
import { stacksData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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

/**
 * Renders a section displaying a list of technology stacks.
 * Utilizes motion effects for list items and tracks section view status.
 * Shows a tooltip with the stack name on hover.
 *
 * @returns {JSX.Element} A section element containing a heading and a list of tech stacks.
 */
export default function Stacks() {
  const { ref } = useSectionInView("Stacks");

  return (
    <section
      id="stacks"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My tech stack & tool</SectionHeading>
      <TooltipProvider delayDuration={100}>
        <ul className="flex flex-wrap justify-center gap-4 text-lg text-gray-800">
          {stacksData.map((stack) => (
            <motion.li
              className="bg-white borderBlack rounded-xl p-4 dark:bg-white/10 dark:text-white/80"
              key={stack.id}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={stack.id}
            >
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="relative w-10 h-10 hover:scale-125 transition-all ease-in-out duration-300">
                    <Image
                      src={stack.url}
                      alt={`${stack.name} logo`}
                      fill
                      className="object-contain"
                      sizes="50px"
                    />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{stack.name}</p>
                </TooltipContent>
              </Tooltip>
            </motion.li>
          ))}
        </ul>
      </TooltipProvider>
    </section>
  );
}
