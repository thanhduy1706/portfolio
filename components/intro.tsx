"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Download, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import portrait from "@/public/portrait.png";

export default function Intro() {
  const { ref } = useSectionInView("Intro", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="intro"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={portrait}
              alt="portrait"
              width="162"
              height="162"
              quality="100"
              priority={true}
              className="h-29 w-29 rounded-full object-cover border-[0.35rem] hover:scale-110 transition border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-3xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            💻
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-10 px-4 font-medium text-2xl !leading-[1.5] sm:text-2xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 125,
          delay: 0.2,
          duration: 0.7,
        }}
      >
        <span className="font-bold">Hi! I'm Duy.</span> I'm a{" "}
        <span className="font-bold"> junior</span> with{" "}
        <span className="font-bold">1 year</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 125,
          delay: 0.3,
          duration: 0.7,
        }}
        className="flex flex-wrap items-center justify-center gap-4 px-4 sm:gap-6"
      >
        <Link
          href="#contact"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-white transition-all rounded-full bg-gradient-to-br from-indigo-300 via-indigo-500 to-indigo-700 shadow-lg hover:shadow-xl active:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 hover:scale-110 active:scale-105"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me!
          <ArrowRight className="w-4 h-4 transition opacity-70 group-hover:translate-x-2" />
        </Link>

        <Link
          href="/CV__FE_NguyenDuy.pdf"
          download={true}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-gray-700 transition-all rounded-full bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 shadow-lg hover:shadow-xl active:shadow-md border border-gray-300 hover:border-gray-400 hover:scale-110 active:scale-105"
        >
          Download CV
          <Download className="w-4 h-4 transition-transform group-hover:translate-y-1" />
        </Link>

        <div className="flex items-center gap-4 sm:gap-6">
          <Link
            href="https://www.linkedin.com/in/thanhduy1706/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-12 h-12 transition-all bg-white rounded-full shadow-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 hover:shadow-lg active:shadow-sm border border-gray-200 hover:border-blue-500 hover:scale-[1.15] active:scale-105"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5 text-blue-600" />
          </Link>
          <Link
            href="https://github.com/thanhduy1706"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-12 h-12 transition-all bg-white rounded-full shadow-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 hover:shadow-lg active:shadow-sm border border-gray-200 hover:border-gray-800 hover:scale-[1.15] active:scale-105"
            aria-label="GitHub Profile"
          >
            <Github className="w-5 h-5 text-gray-800" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
