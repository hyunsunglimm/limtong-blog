"use client";

import useWidth from "@/hooks/useWidth";
import { useState } from "react";
import RightMenuIcon from "./icons/RightMenuIcon";

const END_POINT = 1024;

export default function RightSidebar() {
  const width = useWidth();
  const [isView, setIsView] = useState(false);

  return (
    <div
      className={`fixed z-10 top-[60px] right-[max(0px,calc(50%-750px))] bg-bg w-[256px] h-full border-l border-neutral-700 pt-12 pb-28 pl-4 ${
        isView || width >= END_POINT ? "translate-x-0" : "translate-x-[256px]"
      } ${width > 1500 ? "pr-0" : "pr-4"} transition duration-300`}
    >
      <button
        className={`absolute top-0 left-0 -translate-x-full bg-bg border-b border-x border-neutral-700 p-2 rounded-bl-lg hover:text-my transition ${
          width >= END_POINT ? "hidden" : "block"
        }`}
        onClick={() => setIsView((prev) => !prev)}
      >
        <RightMenuIcon />
      </button>
      <p className="break-words">
        RightSidebarRightSidebarRightSidebarRightSidebarRightSidebarRightSidebar
      </p>
    </div>
  );
}
