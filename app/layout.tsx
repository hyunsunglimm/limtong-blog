import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
