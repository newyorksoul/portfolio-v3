"use client";
import Intro from "@/components/intro";
import Section from "@/components/section-divider";
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Contact from "@/components/contact";
import { MeshGradientRenderer } from "@johnn-e/react-mesh-gradient";
import React from "react";
import { useTheme } from "@/context/theme";
//import { colors as pallete } from "nice-color-palettes";

export default function Home() {
  const [speed, setSpeed] = React.useState(0.01);
  const [isWireframe, setIsWireframe] = React.useState(false);
  const [isDarkBackground, setIsDarkBackground] = React.useState(false);
  const appearance = useTheme();

  const pallette = () => {
    let lightMode = ["#DE5319", "#1704b", "#dOc7c4", "#f4ba41", "#ae7324"]
    let darkMode = ["#C3E4FF", "#6EC3F4", "#FE9900", "#B9BEFF", "#B3B8F9"]
    return (
      appearance.theme === "light" ? lightMode : darkMode
    )
  };

  return (
    <div>
      <MeshGradientRenderer
        className="gradient bg-grainy:after absolute top-[-6rem] -z-10 right-[11rem] h-1/4 w-full rounded-full blur-[10rem] sm:w-[68.75rem] "
        //colors={["#DE5319", "#1704b", "#dOc7c4", "#f4ba41", "#ae7324"]}
        colors={pallette()}
        speed={speed}
        wireframe={isWireframe}
        backgroundColor={isDarkBackground ? "#000000" : "#FFFFFF"}

      />
      <main className="flex flex-col items-center pxa-4">
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
