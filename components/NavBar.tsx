import Link from "next/link";
import GithubIcon from "./icons/GithubIcon";

export default function NavBar() {
  return (
    <nav className="hidden sm:flex gap-6">
      <Link href="/about?tab=projects" className={LinkClass}>
        ABOUT
      </Link>
      <Link
        href="https://drive.google.com/file/d/12gAE4N6FfAdIL4U3g41-miOaI8pZE-3z/view"
        target="_blank"
        className={LinkClass}
      >
        RESUME
      </Link>
      <Link href="https://github.com/hyunsunglimm" target="_blank">
        <GithubIcon />
      </Link>
    </nav>
  );
}

const LinkClass = "text-lg font-semibold hover:text-my transition";
