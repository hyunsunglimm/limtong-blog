"use client";

import useWidth from "@/hooks/useWidth";
import { useState } from "react";
import RightMenuIcon from "./icons/RightMenuIcon";
import useOutside from "@/hooks/useOutside";

const END_POINT = 1024;

export default function RightSidebar() {
  const width = useWidth();
  const [isView, setIsView] = useState(false);
  const onClose = () => setIsView(false);
  const ref = useOutside<HTMLDivElement>(onClose);

  return (
    <div
      className={`fixed z-10 top-[60px] right-[max(0px,calc(50%-750px))] bg-bg w-[256px] h-full border-l border-neutral-700 pt-12 pb-[60px] pl-4 ${
        isView || width >= END_POINT ? "translate-x-0" : "translate-x-[256px]"
      } ${
        width > 1500 ? "pr-0" : "pr-4"
      } transition duration-300 flex flex-col `}
      ref={ref}
    >
      <button
        className={`absolute top-0 left-0 -translate-x-full bg-bg border-b border-x border-neutral-700 p-2 rounded-bl-lg hover:text-my transition ${
          width >= END_POINT ? "hidden" : "block"
        }`}
        onClick={() => setIsView((prev) => !prev)}
      >
        <RightMenuIcon />
      </button>
      <ul className="grow overflow-y-scroll pb-12">
        <li className="break-words">Google Analytics란?</li>
        <li className="break-words">사용자 행동 분석</li>
        <li className="break-words">유입 경로 분석</li>
        <li className="break-words">목표 및 전환 추적</li>
        <li className="break-words">고급 보고서</li>
        <li className="break-words">Google Analytics를 사용하는 이유</li>
        <li className="break-words">1. 사용자 행동 분석</li>
        <li className="break-words">2. 마케팅 캠페인 성과 측정</li>
        <li className="break-words">3. 웹사이트 성능 개선</li>
        <li className="break-words">4. 타겟팅 및 개인화</li>
        <li className="break-words">5. 데이터 기반 의사결정</li>
        <li className="break-words">Google Analytics 적용하기</li>
        <li className="break-words">Google Analytics 설정</li>
        <li className="break-words">프로젝트에 적용</li>
      </ul>
    </div>
  );
}
