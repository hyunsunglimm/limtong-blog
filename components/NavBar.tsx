import Link from "next/link";
import GithubIcon from "./icons/GithubIcon";

export default function NavBar() {
  return (
    <nav className="hidden sm:flex gap-6">
      <Link
        href="/about?tab=projects"
        className={LinkClass}
        aria-label="About 페이지로 이동합니다."
      >
        ABOUT
      </Link>
      <Link
        href="https://github.com/hyunsunglimm"
        target="_blank"
        aria-label="임현성의 깃허브 주소로 이동합니다."
      >
        <GithubIcon />
      </Link>
    </nav>
  );
}

const LinkClass = "text-lg font-semibold hover:text-my transition";
