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

      <p className="mb-3">
        With a unique blend of academic knowledge in{" "}
        <span className="font-medium">Psychology</span> and{" "}
        <span className="font-medium">Business</span>, complemented by
        self-taught expertise in full-stack development, I bring a holistic
        approach to <span className="font-medium">software engineering</span>. My journey into coding was fueled by a
        passion for creating and a knack for problem-solving, leading me to
        engulf myself in technologies such as <span className="font-medium">React Native/Expo, React/Next.js, Node.js,
        and MySQL.</span> Proficient in <span className="font-medium">TypeScript</span>, I am committed to continuous
        learning and am actively seeking a full-time role where I can contribute
        to innovative projects.
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
