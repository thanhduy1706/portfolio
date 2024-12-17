"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section id="experience" ref={ref} className="mb-16 scroll-mt-28 sm:mb-14">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="#4b5563">
        {experiencesData.map((experience, index) => (
          <VerticalTimelineElement
            key={index}
            visible={true}
            contentStyle={{
              background:
                theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
              boxShadow: "none",
              border: "1px solid rgba(0, 0, 0, 0.05)",
              borderRadius: "1rem",
              textAlign: "left",
              padding: "1.3rem 2rem",
            }}
            contentArrowStyle={{
              borderRight:
                theme === "light"
                  ? "0.4rem solid #9ca3af"
                  : "0.4rem solid rgba(255, 255, 255, 0.5)",
            }}
            date={experience.date}
            icon={experience.icon}
            iconStyle={{
              background:
                theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
              fontSize: "1.75rem",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              border: "1px solid #d1d5db",
            }}
          >
            <h3 className="font-bold text-xl text-gray-900 dark:text-white/95">
              {experience.title}
            </h3>
            <p className="font-medium text-gray-600 mt-1 dark:text-white/85">
              {experience.location}
            </p>
            <p className="mt-2 text-gray-700 leading-relaxed  dark:text-white/85">
              {experience.description}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}
