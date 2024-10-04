import Link from "next/link";
import "./globals.css";

export default function notFoundPage() {
  return (
    <section className="fixed top-1/2 left-1/2 flex flex-col items-center gap-4 -translate-x-1/2 -translate-y-1/2">
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
