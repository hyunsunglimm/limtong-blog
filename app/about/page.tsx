import AboutContents from "./components/AboutContents";
import AboutTab from "./components/AboutTab";
import Profile from "./components/Profile";
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

export default function AboutPage() {
  return (
    <section className="w-full max-w-center mx-auto">
      <Profile />
      <AboutTab />
      <AboutContents />
    </section>
  );
}
