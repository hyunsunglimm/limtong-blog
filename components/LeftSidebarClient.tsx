"use client";

import { useState } from "react";
import CategoryList from "./CategoryList";
import SearchBar from "./SearchBar";
import LeftMenuIcon from "./icons/LeftMenuIcon";
import useWidth from "@/hooks/useWidth";

type LeftSidebarClientProps = {
  categoryList: {
    category: string;
    items: {
      title: string;
      url: string;
    }[];
  }[];
};

export default function LeftSidebarClient({
  categoryList,
}: LeftSidebarClientProps) {
  const width = useWidth();
  const [isView, setIsView] = useState(false);

  return (
    <div
      className={`fixed z-10 bg-bg top-[60px] w-[240px] h-full border-r border-neutral-700 pt-12 pb-28 ${
        isView || width >= 1024 ? "translate-x-0" : "-translate-x-[256px]"
      } transition duration-300`}
    >
      <SearchBar />
      <CategoryList categoryList={categoryList} />
      <button
        className={`absolute top-0 right-0 bg-bg translate-x-full border-b border-x border-neutral-700 p-2 rounded-br-lg hover:text-my transition ${
          width >= 1024 ? "hidden" : "block"
        }`}
        onClick={() => setIsView((prev) => !prev)}
      >
        <LeftMenuIcon />
      </button>
    </div>
  );
}
