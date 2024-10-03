"use client";
import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaCode,
  FaDumbbell,
  FaTableTennis,
  FaAws,
  FaDocker,
} from "react-icons/fa";

const HighlightedText = ({ children, icon: Icon }) => (
  <motion.span
    className="inline-flex items-center bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm font-medium mr-2 mb-2"
    whileHover={{ scale: 1.05, backgroundColor: "#93C5FD" }}
    whileTap={{ scale: 0.95 }}
  >
    {Icon && <Icon className="mr-1" />}
    {children}
  </motion.span>
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] scroll-mt-28"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      id="about"
    >
      <motion.h2
        className="text-3xl font-bold mb-8 text-center"
        variants={itemVariants}
      >
        About Me
      </motion.h2>

      <motion.div
        className="bg-white shadow-lg rounded-lg p-6 mb-6"
        variants={itemVariants}
      >
        <motion.p className="mb-4 leading-7" variants={itemVariants}>
          I am currently pursuing a{" "}
          <HighlightedText icon={FaGraduationCap}>
            B-Tech in CSE
          </HighlightedText>
          , driven by my passion for programming. My focus is on
          <HighlightedText icon={FaLaptopCode}>
            full-stack development
          </HighlightedText>
          .
        </motion.p>

        <motion.p className="mb-4 leading-7" variants={itemVariants}>
          What I love most about programming is the thrill of problem-solving.
          There&apos;s nothing quite like the satisfaction of cracking a
          challenging problem.
        </motion.p>

        <motion.p className="mb-4 leading-7" variants={itemVariants}>
          My core tech stack includes:
          <HighlightedText icon={FaCode}>React</HighlightedText>
          <HighlightedText icon={FaCode}>Next.js</HighlightedText>
          <HighlightedText icon={FaCode}>Node.js</HighlightedText>
          <HighlightedText icon={FaCode}>MongoDB</HighlightedText>
          I&apos;m also proficient with TypeScript and MySQL.
        </motion.p>

        <motion.p className="mb-4 leading-7" variants={itemVariants}>
          I&apos;m always eager to expand my skill set and am currently
          exploring opportunities for
          <HighlightedText icon={undefined}>
            Internships
          </HighlightedText> and{" "}
          <HighlightedText icon={undefined}>Freelancing</HighlightedText>.
        </motion.p>
      </motion.div>

      <motion.div
        className="bg-gray-100 rounded-lg p-6"
        variants={itemVariants}
      >
        <motion.h3
          className="text-xl font-semibold mb-4"
          variants={itemVariants}
        >
          Beyond Coding
        </motion.h3>
        <motion.p className="mb-2 leading-7" variants={itemVariants}>
          When I&apos;m not immersed in code, you can find me:
        </motion.p>
        <motion.ul
          className="list-disc list-inside mb-4"
          variants={containerVariants}
        >
          <motion.li variants={itemVariants}>
            <HighlightedText icon={FaTableTennis}>
              Playing table tennis
            </HighlightedText>
          </motion.li>
          <motion.li variants={itemVariants}>
            <HighlightedText icon={FaDumbbell}>Hitting the gym</HighlightedText>
          </motion.li>
          <motion.li variants={itemVariants}>
            Enjoying some downtime with reels
          </motion.li>
        </motion.ul>
        <motion.p className="leading-7" variants={itemVariants}>
          I&apos;m also expanding my tech horizons by learning about:
          <HighlightedText icon={FaAws}>AWS</HighlightedText>
          <HighlightedText icon={FaDocker}>Docker</HighlightedText>
        </motion.p>
      </motion.div>
    </motion.section>
  );
}
