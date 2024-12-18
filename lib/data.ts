import React from "react";
import datavizxImg from "@/public/datavizxImg.png";
import portfolioImg from "@/public/portfolioImg.png";
import intellispaceImg from "@/public/intellispaceImg.png";
import {
  HCMIUicon,
  HSVGicon,
  Tancaicon,
} from "@/components/customIcon/custom_icon";
import { LuBriefcaseBusiness } from "react-icons/lu";

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
    description:
      "I work with The Face Shop, Beauty Box, and the internal website.",
    icon: React.createElement(HSVGicon),
    date: "Nov 2024 - now",
  },
  {
    title: "Front-end Software",
    location: "Tanca Joint Stock Company - Ho Chi Minh City, Vietnam",
    description: "I work with Tanca.io website.",
    icon: React.createElement(Tancaicon),
    date: "Jun 2024 - Nov 2024",
  },
  {
    title: "Undergraduate at Ho Chi Minh City International University",
    location: "Ho Chi Minh City, Vietnam",
    description:
      "As a junior in my undergraduate program, I've already landed a front-end developer job. This allows me to gain valuable experience while I complete my degree.",
    icon: React.createElement(HCMIUicon),
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
    githubLink: "https://github.com/thanhduy1706/IntelliSpace",
    liveLink: "https://intelli-space.vercel.app/",
  },
  {
    title: "DataVizX",
    description:
      "DataVizX is a data visualization application. The application is the revolutionary tool that transforms your data into stunning visual insights.",
    tags: ["React", "React.js", "MongoDB", "TailwindCSS"],
    imageUrl: datavizxImg,
    githubLink: "https://github.com/thanhduy1706/DataVizX",
    liveLink: "https://datavizx.vercel.app/",
  },
  {
    title: "Portfolio",
    description:
      "Skilled Next.js and Tailwind CSS developer focused on crafting beautiful, performant user interfaces. Passionate about staying ahead in web development.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Framer motion"],
    imageUrl: portfolioImg,
    githubLink: "https://github.com/thanhduy1706/tduy1706_portfolio",
    liveLink: "https://tduy1706.vercel.app/",
  },
] as const;

export const stacksData: { id: number; name: string; url: string }[] = [
  {
    id: 1,
    name: "HTML",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  },
  {
    id: 2,
    name: "CSS",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  },
  {
    id: 3,
    name: "JavaScript",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    id: 4,
    name: "TypeScript",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    id: 5,
    name: "ReactJS",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    id: 6,
    name: "Next.js",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },
  {
    id: 7,
    name: "Node.js",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  },
  {
    id: 8,
    name: "Git",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  },
  {
    id: 9,
    name: "GitHub",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  },
  {
    id: 10,
    name: "GitLab",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg",
  },
  {
    id: 11,
    name: "TailwindCSS",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg",
  },
  {
    id: 12,
    name: "Framer Motion",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg",
  },
  {
    id: 13,
    name: "Ant Design",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/antdesign/antdesign-original.svg",
  },
  {
    id: 14,
    name: "Axios",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg",
  },
  {
    id: 15,
    name: "Docker",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg",
  },
  {
    id: 16,
    name: "Postman",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
  },
  {
    id: 17,
    name: "Figma",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
  },
  {
    id: 18,
    name: "Adobe Illustrator",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-plain.svg",
  },
  {
    id: 19,
    name: "Adobe Photoshop",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg",
  },
  {
    id: 20,
    name: "Adobe Premiere",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/premierepro/premierepro-original.svg",
  },
];
