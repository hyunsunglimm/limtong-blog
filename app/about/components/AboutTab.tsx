"use client";

import { useTabStore } from "@/store/tab";
import { tabs } from "@/utils/about";

export default function AboutTab() {
  const { tab, setTab } = useTabStore();
  return (
    <section className="mt-8 mb-4 grid grid-cols-3 md:grid-cols-4 gap-4">
      {tabs.map((v) => (
        <button
          key={v}
          className={`${tabClass} ${tab === v && "bg-white/10"}`}
          onClick={() => setTab(v)}
          aria-label={`${v} 탭으로 변경`}
        >
          {v.toUpperCase()}
        </button>
      ))}
    </section>
  );
}

const tabClass =
  "p-2 text-center text-lg font-semibold rounded-sm hover:bg-white/10 transition";
