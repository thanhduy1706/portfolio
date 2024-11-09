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

export default function Experience() {
  const { ref } = useSectionInView("Experience");

  return (
    <section id="experience" ref={ref} className="mb-16 scroll-mt-28 sm:mb-14">
      <SectionHeading>Experience</SectionHeading>
      <VerticalTimeline lineColor="#4b5563">
        {experiencesData.map((experience, index) => (
          <VerticalTimelineElement
            key={index}
            visible={true}
            contentStyle={{
              background: "#e5e7eb",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              border: "1px solid #d1d5db",
              textAlign: "left",
              padding: "1.5rem 2.5rem",
              borderRadius: "1.25rem",
            }}
            contentArrowStyle={{
              borderRight: "0.5rem solid #6b7280",
            }}
            date={experience.date}
            icon={experience.icon}
            iconStyle={{
              background: "#ffffff",
              fontSize: "1.75rem",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              border: "1px solid #d1d5db",
            }}
          >
            <h3 className="font-semibold text-lg text-gray-900">
              {experience.title}
            </h3>
            <p className="font-medium text-gray-600 mt-1">
              {experience.location}
            </p>
            <p className="mt-2 text-gray-700 leading-relaxed">
              {experience.description}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}
