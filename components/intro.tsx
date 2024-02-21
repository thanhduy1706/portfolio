"use client"

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section
    id='home'
    className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
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
              src="https://i.scdn.co/image/ab6761610000e5ebd95cf4457fac4cc62311f84f"
              alt="Jennie portrait"
              width="192"
              height="192"
              quality="100"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
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
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1 className="mb-10 mt-4 px-4 font-medium text-2xl !leading-[1.5] sm:text-2xl"
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
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">36 years</span> of experience. I enjoy
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

      className="flex flex-col items-center justify-center gap-3 px-4 text-lg font-medium sm:flex-row">

        <Link href="#contact" className="flex items-center gap-2 py-3 text-white transition bg-gray-900 rounded-full outline-none cursor-pointer group focus:scale-110 hover:scale-110 hover:bg-gray-950 px-7 active:scale-105">Contact me!
        <BsArrowRight className="transition opacity-70 group-hover:translate-x-2"/>{" "}
        </Link>

        <a
          className="flex items-center gap-2 py-3 transition bg-white border rounded-full outline-none cursor-pointer group px-7 focus:scale-110 hover:scale-110 active:scale-105 border-black/10 dark:bg-white/10"
          href="/CV.pdf" download={true}>
          Download CV{" "}
          <HiDownload className="transition opacity-60 group-hover:translate-y-1" />
        </a>


        <a className="bg-white p-4 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border-black/10"
          href="https://www.linkedin.com/in/thanhduy1706/"
          target="_blank">
          <BsLinkedin/>
        </a>

        <a className="bg-white p-4 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border-black/10"
          href="https://github.com/thanhduy1706"
          target="_blank">
          <FaGithubSquare/>
        </a>
      </motion.div>

    </section>
  )
}
