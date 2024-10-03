import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import schImage from "@/public/schss1.png";
import appleImage from "@/public/app1.png";
import chatImage from "@/public/CHATAPP.png";
import saasImage from "@/public/ss1.png";

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
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Frontend Developer",
    location: "Remote",
    description:
      "I worked as a Frontend developer at a Startup where I convert figma design into react code",
    icon: React.createElement(LuGraduationCap),
  },
] as const;

export const projectsData = [
  {
    title: "Schedulee",
    description:
      "This is a 1:1 meeting booking site just like Calendly . It has all the features that are required.",
    tags: ["React", "Next.js", "Tailwind", "NeonDB"], // This is correct
    imageUrl: schImage,
  },
  {
    title: "Apple Doors",
    description:
      "Apple Doors is a Full Stack Website for buying doors and it has an unique functionality that user can customize the door and view them in 3D.",
    tags: ["React", "Node.JS", "Tailwind", "MongoDB"], // This is correct
    imageUrl: appleImage,
  },
  {
    title: "Chat Application",
    description:
      "A chatting application where you can chat with your friends, family members.",
    tags: ["React", "Node.js", "MongoDB"], // This is correct
    imageUrl: chatImage,
  },
  {
    title: "SaaS Application",
    description:
      "It is a beautiful frontend application made for a SaaS business.",
    // FIX THIS: Separate "Next.js" and "Framer Motion" into two array elements
    tags: ["Next.js", "Framer Motion"], // Corrected
    imageUrl: saasImage,
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
  "MySQL",
  "MongoDB",
  "Redux",
  "Express",
  "Framer Motion",
] as const;
