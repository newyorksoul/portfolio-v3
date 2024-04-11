import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaLaptopCode } from "react-icons/fa";
import pocketwatchPreviewImage from "@/public/images/pocketwatch.webp";
import feteappPreviewImage from "@/public/images/feteappPreview.webp";
import hirescompressorPreviewImage from "@/public/images/hirescompressorPreview.webp";

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

export const experienceData = [
  {
    title: "Web Developer / Freelance",
    location: "NYC / Online",
    description:
      "I used online resources to jump start my tech pivot. I found contract jobs as a front-end developer while I continued my studies.",
    icon: React.createElement(FaLaptopCode),
    date: "2019",
  },
  {
    title: "React Native Developer / Freelance",
    location: "New York City, NY",
    description:
      "I did contract work as a front-end developer while I upskilled to full stack. I worked on mobile apps for clients using React Native.",
    icon: React.createElement(FaReact),
    date: "2020 - present",
  },
  {
    title: "Full-Stack Developer",
    location: "New York City, NY",
    description:
      "I'm now a full-stack developer working as a freelancer and I am open to full-time opportunities.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "PocketWatch",
    description:
      "This is an open salary viewer. Users can view wages and hours of public employees. Personal project. Available on App and Play Stores.",
    tags: ["React Native", "React", "Next.js", "Tailwind", "Firebase"],
    imageUrl: pocketwatchPreviewImage,
  },
  {
    title: "Fete App",
    description:
      "Event listing for soca fetes and carnival parties. It has features like search, event management and ticketing.",
    tags: ["React Native", "Expo", "React", "TypeScript", "Firebase"],
    imageUrl: feteappPreviewImage,
  },
  {
    title: "HiRes Compressor",
    description:
      "A public mobile app for quick conversion of high quality photos and videos into acceptable upload sizes or media types for social media. Reduce file size while maintaining excellent quality.",
    tags: ["React Native", "Expo", "TypeScript"],
    imageUrl: hirescompressorPreviewImage,
  },
] as const;

export const skillsData = [
  "React Native",
  "Expo",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "GCP",
  "Firebase",
  "GraphQL",
  "Unit Testing",
  "Python",
  "CI/CD",
] as const;
