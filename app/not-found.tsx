import Link from "next/link";
import "./globals.css";

export default function notFoundPage() {
  return (
    <section className="w-full h-screen bg-bg flex flex-col gap-4 items-center justify-center">
      <h1 className="text-white text-4xl">
        요청하신 페이지가 존재하지 않습니다.
      </h1>
      <Link
        href="/"
        className="text-white text-xl hover:bg-white/5 px-3 py-1 rounded-md transition"
      >
        홈으로 돌아가기
      </Link>
    </section>
  );
}
