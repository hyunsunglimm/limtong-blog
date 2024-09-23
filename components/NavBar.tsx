import Link from "next/link";
import GithubIcon from "./icons/GithubIcon";

export default function NavBar() {
  return (
    <nav className="flex gap-6">
      <Link href="/post" className={LinkClass}>
        POST
      </Link>
      <Link href="/about" className={LinkClass}>
        ABOUT
      </Link>
      <Link href="https://github.com/hyunsunglimm" target="_blank">
        <GithubIcon />
      </Link>
    </nav>
  );
}

const LinkClass = "text-lg font-semibold hover:text-my transition";
