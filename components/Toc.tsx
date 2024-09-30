import useObserver from "@/hooks/useObserver";
import { useEffect, useState } from "react";

type TocItem = {
  id: string;
  tagName: string;
  title: string;
};

export default function Toc() {
  const [activeId, setActiveId] = useState<string>("");
  const [tocList, setTocList] = useState<TocItem[]>([]);
  const [headingEls, setHeadingEls] = useState<Element[]>([]);

  useObserver(setActiveId);

  useEffect(() => {
    const headingElements = Array.from(document.querySelectorAll("h2, h3"));
    setHeadingEls(headingElements);

    const headingData = headingElements.map((header) => ({
      id: header.id,
      tagName: header.tagName.toLowerCase(),
      title:
        (header as HTMLElement).innerText.replace("#", "") ||
        "타이틀이 없습니다.",
    }));

    setTocList(headingData);
  }, []);

  const onScoll = (index: number) => {
    headingEls[index].scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      {tocList.length === 0 && (
        <p className="ml-4 text-neutral-400">해당 글은 목차가 없습니다.</p>
      )}
      <ul className="flex flex-col gap-2">
        {tocList.map(({ id, tagName, title }, i) => (
          <li key={id} className={`${tagName === "h3" && "ml-4 text-[15px]"}`}>
            <p
              className={`${
                activeId === id && "text-my"
              } hover:text-my transition cursor-pointer`}
              onClick={() => onScoll(i)}
            >
              {title}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}
