"use client";

import { useState } from "react";
import RightMenuIcon from "./icons/RightMenuIcon";
import useOutside from "@/hooks/useOutside";
import Toc from "./Toc";

export default function RightSidebar() {
  const [isView, setIsView] = useState(false);
  const onClose = () => setIsView(false);
  const ref = useOutside<HTMLDivElement>(onClose);

  return (
    <div
      className={`fixed z-10 top-[60px] right-[max(0px,calc(50%-750px))] bg-bg w-[256px] h-full border-l border-neutral-700 pt-12 pb-[60px] pl-4 pr-4 lg:pr-0 transition duration-300 flex flex-col ${
        isView ? "translate-x-0" : "translate-x-[256px] lg:translate-x-0"
      }`}
      ref={ref}
    >
      <button
        className="absolute top-0 left-0 -translate-x-full bg-bg border-b border-x border-neutral-700 p-2 rounded-bl-lg hover:text-my transition block lg:hidden"
        onClick={() => setIsView((prev) => !prev)}
      >
        <RightMenuIcon />
      </button>
      <div className="grow overflow-y-scroll pb-12">
        <Toc />
      </div>
    </div>
  );
}
