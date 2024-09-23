import Link from "next/link";

type BadgeProps = {
  title: string;
  url: string;
};

export default function Badge({ title, url }: BadgeProps) {
  return (
    <li>
      <Link
        href={url}
        target="_blank"
        className="border py-2 px-6 rounded-[24px] bg-white/5 hover:bg-white/10 transition font-semibold text-lg block"
      >
        {title}
      </Link>
    </li>
  );
}