import React from "react";
// import { CgWorkAlt } from 'react-icons/cg';
// import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from "react-icons/lu";
import datavizxImg from "@/public/datavizxImg.png";
import portfolioImg from "@/public/portfolioImg.png";
// import wordanalyticsImg from '@/public/wordanalytics.png';

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Undergraduate at Ho Chi Minh City International University",
    location: "Ho Chi Minh City, Vietnam",
    description:
      "As a junior in my undergraduate program, I've already landed a front-end developer job. This allows me to gain valuable experience while I complete my degree.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - now",
  },
  // {
  //   title: "Front-End Developer",
  //   location: "X",
  //   description:
  //     "X",
  //   icon: React.createElement(CgWorkAlt),
  //   date: "X",
  // },
  // {
  //   title: "X",
  //   location: "X",
  //   description:
  //     "X",
  //   icon: React.createElement(FaReact),
  //   date: "X",
  // },
] as const;

export const projectsData = [
  {
    title: "DataVizX",
    description:
      "DataVizX is a data visualization application. The application is the revolutionary tool that transforms your data into stunning visual insights.",
    tags: ["React", "React.js", "MongoDB", "Tailwind"],
    imageUrl: datavizxImg,
  },
  {
    title: "Portfolio",
    description:
      "Skilled Next.js and Tailwind CSS developer focused on crafting beautiful, performant user interfaces. Passionate about staying ahead in web development.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Framer motion"],
    imageUrl: portfolioImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  // "Prisma",
  // "MongoDB",
  // "Redux",
  // "GraphQL",
  // "Apollo",
  // "Express",
  // "PostgreSQL",
  // "Python",
  // "Django",
  "Framer Motion",
] as const;
