import Link from "next/link";
import MenuIcon from "./icons/MenuIcon";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import GithubIcon from "./icons/GithubIcon";

export default function TopSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <MenuIcon />
      </SheetTrigger>
      <SheetContent className="bg-bg" side="top">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col items-center gap-2 mt-4 border-t py-4">
          <SheetClose asChild>
            <Link href="/about?tab=projects" className={LinkClass}>
              ABOUT
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              href="https://drive.google.com/file/d/12gAE4N6FfAdIL4U3g41-miOaI8pZE-3z/view"
              target="_blank"
              className={LinkClass}
            >
              RESUME
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href="https://github.com/hyunsunglimm" target="_blank">
              <GithubIcon />
            </Link>
          </SheetClose>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

const LinkClass = "text-lg font-semibold rounded-sm hover:text-my transition";
