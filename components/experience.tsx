"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

const ExperienceCard = ({ item, theme }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: theme === "light" ? "#ffffff" : "rgba(255, 255, 255, 0.05)",
      boxShadow: "0 3px 0 #3b82f6",
      border: "1px solid rgba(0, 0, 0, 0.05)",
      textAlign: "left",
      padding: "1.5rem 2rem",
      borderRadius: "0.5rem",
    }}
    contentArrowStyle={{
      borderRight:
        theme === "light"
          ? "7px solid #3b82f6"
          : "7px solid rgba(59, 130, 246, 0.5)",
    }}
    date={item.date}
    icon={item.icon}
    iconStyle={{
      background: theme === "light" ? "#3b82f6" : "rgba(59, 130, 246, 0.5)",
      color: "#ffffff",
      fontSize: "1.5rem",
    }}
  >
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="font-semibold text-xl mb-1">{item.title}</h3>
      <p className="font-medium text-blue-600 dark:text-blue-400 mb-2">
        {item.location}
      </p>
      <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
      {item.skills && (
        <div className="mt-3">
          <p className="font-medium mb-1">Skills:</p>
          <div className="flex flex-wrap gap-2">
            {item.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  </VerticalTimelineElement>
);

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <motion.h2
        className="text-3xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Experience
      </motion.h2>
      <VerticalTimeline lineColor={theme === "light" ? "#e5e7eb" : "#374151"}>
        {experiencesData.map((item, index) => (
          <ExperienceCard key={index} item={item} theme={theme} />
        ))}
      </VerticalTimeline>
    </section>
  );
}
