import Image from "next/image";
import Link from "next/link";
import NavBar from "./NavBar";
import TopSheet from "./TopSheet";

export default function Header() {
  return (
    <header className="fixed top-0 z-10 bg-bg/90 backdrop-blur-sm border-b border-neutral-700 w-full h-header flex items-center px-4">
      <div className="w-full max-w-limit mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center gap-2 hover:text-my transition"
        >
          <Image
            src="/images/limtong-icon.png"
            alt="임통 아이콘"
            width={40}
            height={45}
            priority
          />
          <p className="font-semibold text-lg">임통 블로그</p>
        </Link>
        <div className="block sm:hidden">
          <TopSheet />
        </div>
        <NavBar />
      </div>
    </header>
  );
}
