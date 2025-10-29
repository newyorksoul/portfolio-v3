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
    name: "Experience",
    hash: "#experience",
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

export const experienceData = [
  {
    title: "Web Developer / Freelance",
    description:
      "Leveraged online resources to kickstart my tech journey. Secured contract jobs as a front-end developer while continuing my studies. Contributed to various web projects during this period.",
    date: "2019",
    icon: React.createElement(FaLaptopCode),
    location: "",
  },
  {
    title: "React Native Developer / Freelance",
    description:
      "Specialized in React Native development. Collaborated with clients to build mobile apps. Upskilled from front-end to full-stack capabilities during freelance work.",
    date: "2021 - present",
    icon: React.createElement(FaReact),
    location: "",
  },
  {
    title: "Software Engineer",
    description: "Currently freelancing and open to full-time opportunities.",
    date: "Present",
    icon: React.createElement(CgWorkAlt),
    location: "",
  },
] as const;

export const projectsData = [
  {
    title: "PocketWatch",
    description:
      "PocketWatch helps users transparently view public employee salaries. I built the mobile app using React Native and Firebase, integrating real-time data and intuitive search filters. It’s live on both app stores and used by over 500 users monthly.",
    tags: ["React Native", "React", "Next.js", "Tailwind", "Firebase"],
    imageURL: pocketwatchPreviewImage,
    appStoreURL:
      "https://apps.apple.com/us/app/pocketwatch-salary-tracker/id6467176746",
    playStoreURL:
      "https://play.google.com/store/apps/details?id=com.xiii.pocketwatch",
  },
  {
    title: "Event Listing App",
    description:
      "Event listing platform specializing in soca fetes and carnival parties. It has features like search, event management and ticketing. Passion project.",
    tags: ["React Native", "Expo", "React", "TypeScript", "Firebase"],
    imageURL: feteappPreviewImage,
    appStoreURL: "",
    playStoreURL: "",
  },
  {
    title: "HiRes Compressor",
    description:
      "An app for quick conversion of HQ photos and videos into acceptable upload sizes or media types for social media. Reduce file size while maintaining excellent quality.",
    tags: ["React Native", "Expo", "TypeScript"],
    imageURL: hirescompressorPreviewImage,
    appStoreURL: "",
    playStoreURL: "",
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
  "SQL",
  "GraphQL",
  "Jest",
  "CI/CD",
  "Python",
] as const;
