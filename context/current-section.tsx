"use client";
import React, { useState, createContext, useContext } from "react";
import type { SectionName } from "@/lib/types";

type CurrentSectionContextProviderProps = {
  children: React.ReactNode;
};

type CurrentSectionContextType = {
  currentSection: SectionName;
  setCurrentSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const CurrentSectionContext =
  createContext<CurrentSectionContextType | null>(null);

export default function CurrentSectionContextProvider({
  children,
}: CurrentSectionContextProviderProps) {
  const [currentSection, setCurrentSection] = useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0); // we need to keep track of this to disable the observer temporarily when user clicks on a link

  return (
    <CurrentSectionContext.Provider
      value={{
        currentSection,
        setCurrentSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </CurrentSectionContext.Provider>
  );
}

export function useCurrentSectionContext() {
  const context = useContext(CurrentSectionContext);

  if (context === null) {
    throw new Error(
      "useCurrentSectionContext must be used within an CurrentSectionContextProvider"
    );
  }

  return context;
}
