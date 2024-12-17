import React from "react";
import { LuGraduationCap, LuBriefcase, LuCode } from "react-icons/lu";
import datavizxImg from "@/public/datavizxImg.png";
import portfolioImg from "@/public/portfolioImg.png";
import intellispaceImg from "@/public/intellispaceImg.png";

export const links = [
  {
    name: "Intro",
    hash: "#intro",
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
    name: "Stacks",
    hash: "#stacks",
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
    title: "Software Development Executive",
    location: "HSV Group - Ho Chi Minh City, Vietnam",
    description: "",
    icon: React.createElement(LuBriefcase),
    date: "Nov 2024 - now",
  },
  {
    title: "Front-end Software",
    location: "Tanca.io - Ho Chi Minh City, Vietnam",
    description: "",
    icon: React.createElement(LuCode),
    date: "Jun 2024 - Nov 2024",
  },
  {
    title: "Undergraduate at Ho Chi Minh City International University",
    location: "Ho Chi Minh City, Vietnam",
    description:
      "As a junior in my undergraduate program, I've already landed a front-end developer job. This allows me to gain valuable experience while I complete my degree.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - now",
  },
] as const;

export const projectsData = [
  {
    title: "IntelliSpace",
    description:
      "Experienced Next.js and Tailwind CSS developer specializing in the creation of visually stunning and high-performance user interfaces.",
    tags: ["React", "TypeScript", "Next.js", "TailwindCSS", "Framer motion"],
    imageUrl: intellispaceImg,
  },
  {
    title: "DataVizX",
    description:
      "DataVizX is a data visualization application. The application is the revolutionary tool that transforms your data into stunning visual insights.",
    tags: ["React", "React.js", "MongoDB", "TailwindCSS"],
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

export const stacksData: { name: string; url: string }[] = [
  {
    name: "HTML",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    name: "ReactJS",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Node.js",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Git",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  },
  {
    name: "GitLab",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg",
  },
  {
    name: "TailwindCSS",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg",
  },
  {
    name: "Framer Motion",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg",
  },
];
