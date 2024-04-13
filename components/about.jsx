"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>

      <p className="mb-3">An autodidact, my expertise in software engineering is enriched by a comprehensive background in{" "} <span className="font-medium">Psychology</span> and <span className="font-medium">Business</span>, along with a self-directed mastery in <span className="font-medium">full-stack development</span>. Driven by an innate passion for creation and problem-solving, I have immersed myself in cutting-edge technologies including <span className="font-medium">React Native, Expo, Next.js, Node.js,</span> and <span className="font-medium">GraphQL</span>. Proficient in <span className="font-medium">TypeScript</span>, my dedication to perpetual learning fuels my pursuit of a full-time role where I can apply my skills to groundbreaking projects.
      </p>

      <p>
        <span className="italic">Outside of programming, </span>I am an avid swimmer,
        music enthusiast, traveler, and pet lover, with a keen
        interest in{" "}
        <span className="font-medium">history and art</span> and the evolving landscape of AI
        technology.
      </p>
    </motion.section>
  );
}
