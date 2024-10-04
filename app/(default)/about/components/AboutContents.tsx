"use client";

import { useTabStore } from "@/store/tab";
import Projects from "./Projects";
import Skills from "./Skills";

export default function AboutContents() {
  const { tab } = useTabStore();

  return (
    <>
      {tab === "projects" && <Projects />}
      {tab === "skills" && <Skills />}
    </>
  );
}
