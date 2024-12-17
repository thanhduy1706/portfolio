"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

/**
 * Contact component renders the contact section of the page.
 * It uses motion and viewport animations to appear when in view.
 * @returns {JSX.Element} The rendered contact section component.
 */
export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-5 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="mt-5 dark:text-gray-400 text-gray-700">
        Please contact me via{" "}
        <a
          className="underline dark:text-gray-200 text-gray-700"
          href="mailto:ndtduy.work@gmail.com"
        >
          ndtduy.work@gmail.com
        </a>
      </p>
    </motion.section>
  );
}
