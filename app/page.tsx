"use client";
import Intro from "@/components/intro";
import Section from "@/components/section-divider";
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Contact from "@/components/contact";
import { MeshGradientRenderer } from "@johnn-e/react-mesh-gradient";

export default function Home() {
  return (
    <div>
      <MeshGradientRenderer
        className="gradient bg-grainy:after absolute top-[-6rem] -z-10 right-[11rem] h-1/4 w-full rounded-full blur-[10rem] sm:w-[68.75rem] "
        //colors={["#ffd78a", "#f7a2a1", "#FE9900", "#f9cdc3", "#f4762d"]}
        colors={["#C3E4FF", "#6EC3F4", "#FE9900", "#B9BEFF", "#B3B8F9"]}

      />
      <main className="flex flex-col items-center px-4">
        <Intro />
        <Section />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
