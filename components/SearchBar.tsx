"use client";

import SearchIcon from "@/components/icons/SearchIcon";
import { useSearchStore } from "@/store/search";

export default function SearchBar() {
  const { keyword, setKeyword } = useSearchStore();

  return (
    <div className="relative w-[220px] group">
      <input
        type="text"
        className="border border-neutral-700 placeholder-neutral-700 bg-bg w-full p-2 pl-3 pr-10 rounded-md outline-none focus:border-my transition"
        placeholder="제목을 검색하세요."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <div className="absolute top-1/2 -translate-y-1/2 right-3 text-neutral-700 group-focus-within:text-my transition">
        <SearchIcon />
      </div>
    </div>
  );
}
