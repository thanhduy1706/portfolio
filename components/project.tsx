"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";

type ProjectProps = (typeof projectsData)[number];

/**
 * Renders a project component with title, description, tags, image, and links.
 *
 * @param {Object} ProjectProps - The properties object for the project.
 * @param {string} ProjectProps.title - The title of the project.
 * @param {string} ProjectProps.description - A brief description of the project.
 * @param {Array} ProjectProps.tags - An array of tags associated with the project.
 * @param {string} ProjectProps.imageUrl - The URL of the image representing the project.
 * @param {string} ProjectProps.githubLink - The URL to the project's GitHub repository.
 * @param {string} ProjectProps.liveLink - The URL to the live version of the project.
 * @returns {JSX.Element} A motion-enabled div rendering the project details.
 */
export default function Project({
  title,
  description,
  tags,
  imageUrl,
  githubLink,
  liveLink,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-50 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <div className="flex items-center gap-4">
            <h3 className="text-2xl font-bold">{title}</h3>
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <FaGithub className="hoverScale" size={25} />
            </a>
            <a href={liveLink} target="_blank" rel="noopener noreferrer">
              <AiOutlineGlobal className="hoverScale" size={25} />
            </a>
          </div>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={tag}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={100}
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        transition
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40"
        />
      </section>
    </motion.div>
  );
}
