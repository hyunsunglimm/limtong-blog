import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/Header";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
  title: "임통 블로그",
  description: "안녕하세요. 프론트엔드 개발자, 임현성의 블로그입니다.",
  openGraph: {
    title: "임통 블로그",
    description: "안녕하세요. 프론트엔드 개발자, 임현성의 블로그입니다.",
    type: "website",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
    images: "https://www.limtong.com/images/blog-main.png",
    siteName: "임통 블로그",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased bg-bg text-white">
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
        )}
        <Header />
        <main className="pt-[60px] w-full px-4">
          <div className="w-full max-w-limit mx-auto py-12">{children}</div>
        </main>
      </body>
    </html>
  );
}
