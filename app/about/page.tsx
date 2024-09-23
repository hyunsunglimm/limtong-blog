import { redirect } from "next/navigation";
import AboutTab from "./components/AboutTab";
import Profile from "./components/Profile";
import { tabs } from "@/utils/about";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function AboutPage({
  searchParams,
}: {
  searchParams: { tab: string };
}) {
  const tab = searchParams.tab;

  if (!tab || !tabs.includes(tab)) return redirect("/about?tab=project");

  return (
    <section className="w-full max-w-center mx-auto">
      <Profile />
      <AboutTab tab={tab} />
      {tab === "projects" && <Projects />}
      {tab === "skills" && <Skills />}
    </section>
  );
}
