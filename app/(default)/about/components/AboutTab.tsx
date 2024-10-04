"use client";

import { tabs } from "@/static/about";
import { useTabStore } from "@/store/tab";

export default function AboutTab() {
  const { tab, setTab } = useTabStore();
  return (
    <section className="mt-8 mb-4 grid grid-cols-3 md:grid-cols-4 gap-4">
      {tabs.map((v) => (
        <div
          key={v}
          onClick={() => setTab(v)}
          className={`${tabClass} ${tab === v && "bg-white/10"} cursor-pointer`}
          aria-label={`${v} 탭으로 이동`}
        >
          {v.toUpperCase()}
        </div>
      ))}
    </section>
  );
}

const tabClass =
  "p-2 text-center text-lg font-semibold rounded-sm hover:bg-white/10 transition";
