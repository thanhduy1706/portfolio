import React from "react";
import { LuGraduationCap, LuCode2 } from "react-icons/lu";
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
    title: "Front-end Software",
    location: "HSV Group - Ho Chi Minh City, Vietnam",
    description: "",
    icon: React.createElement(LuCode2),
    date: "Nov 2024 - now",
  },
  {
    title: "Front-end Software",
    location: "Tanca.io - Ho Chi Minh City, Vietnam",
    description:
      "Optimized website performance by analyzing and enhancing code structure, ensuring faster load times and a smoother user experience. Collaborated with the maintenance team to identify and fix interface errors, address logic-related bugs, and ensure cross-browser compatibility. Integrated new features into existing systems using modern front-end technologies like ReactJS, Recharts, and Ant Design, while maintaining compatibility with backend APIs.",
    icon: React.createElement(LuCode2),
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

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "TailwindCSS",
  "Framer Motion",
] as const;
