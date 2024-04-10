"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { FaLongArrowAltRight, FaLinkedinIn } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useCurrentSectionContext } from "@/context/current-section";
import { motion } from "framer-motion";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setCurrentSection, setTimeOfLastClick } = useCurrentSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/profile.jpg"
              alt="Kristoff portrait"
              width="1800"
              height="2400"
              quality="95"
              priority={true}
              className="h-64 w-64 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Kristoff.</span> I'm a{" "}
        <span className="font-bold">software engineer</span> with{" "}
        <span className="font-bold">four years</span> of experience. I enjoy
        building <span className="italic">apps & websites</span>. My focus is{" "}
        <span className="underline">React Native</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-3 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setCurrentSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <FaLongArrowAltRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-3 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/CV.pdf"
          download
        >
          Download CV{" "}
          <LuDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex  text-[1.35rem]items-center gap-3 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://linkedin.com/in/kborrel"
          target="_blank"
        >
          <FaLinkedinIn />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-3 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/newyorksoul"
          target="_blank"
        >
          <FaGithub />
        </a>
      </motion.div>
    </section>
  );
}