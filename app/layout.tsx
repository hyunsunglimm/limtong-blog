import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "임통 블로그",
  description: "개발자 임통의 기술 블로그입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased bg-bg text-white">
        <Header />
        <main className="pt-[60px]">{children}</main>
      </body>
    </html>
  );
}
