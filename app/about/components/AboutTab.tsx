import { tabs } from "@/utils/about";
import Link from "next/link";

export default function AboutTab({ tab }: { tab: string }) {
  return (
    <section className="mt-8 mb-4 grid grid-cols-4 gap-4">
      {tabs.map((v) => (
        <Link
          key={v}
          href={`/about?tab=${v}`}
          className={`${tabClass} ${tab === v && "bg-white/10"}`}
        >
          {v.toUpperCase()}
        </Link>
      ))}
    </section>
  );
}

const tabClass =
  "p-2 text-center text-lg font-semibold rounded-sm hover:bg-white/10 transition";
