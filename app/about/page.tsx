import { redirect } from "next/navigation";
import AboutTab from "./components/AboutTab";
import Profile from "./components/Profile";
import { tabs } from "@/utils/about";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "임통 블로그 | About",
  description: "안녕하세요. 프론트엔드 개발자, 임현성에 관한 페이지입니다.",
  openGraph: {
    title: "임통 블로그 | About",
    description: "안녕하세요. 프론트엔드 개발자, 임현성에 관한 페이지입니다.",
    type: "website",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
    images: "https://www.limtong.com/images/blog-main.png",
    siteName: "임통 블로그",
    locale: "ko_KR",
  },
};

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
