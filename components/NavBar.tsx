import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex gap-6">
      <Link href="/post" className={LinkClass}>
        POST
      </Link>
      <Link href="/about" className={LinkClass}>
        ABOUT
      </Link>
    </nav>
  );
}

const LinkClass = "text-lg font-semibold hover:text-my transition";
