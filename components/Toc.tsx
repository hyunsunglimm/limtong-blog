import { getIntersectionObserver } from "@/utils/observer";
import Link from "next/link";
import { useEffect, useState } from "react";

type TocItem = {
  id: string;
  tagName: string;
  title: string;
};

export default function Toc() {
  const [currentId, setCurrentId] = useState<string>("");
  const [tocList, setTocList] = useState<TocItem[]>([]);

  useEffect(() => {
    const observer = getIntersectionObserver(setCurrentId);
    const headingElements = Array.from(document.querySelectorAll("h2, h3"));

    const headingData = headingElements.map((header) => ({
      id: header.id,
      tagName: header.tagName.toLowerCase(),
      title:
        (header as HTMLElement).innerText.replace("#", "") ||
        "타이틀이 없습니다.",
    }));

    setTocList(headingData);

    headingElements.map((header) => {
      observer.observe(header);
    });
  }, []);

  return (
    <>
      {tocList.length === 0 && (
        <p className="ml-4 text-neutral-400">해당 글은 목차가 없습니다.</p>
      )}
      <ul className="flex flex-col gap-2">
        {tocList.map(({ id, tagName, title }) => (
          <li key={id} className={`${tagName === "h3" && "ml-4 text-[15px]"}`}>
            <Link
              href={`#${id}`}
              className={`${
                currentId === id && "text-my"
              } hover:text-my transition`}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
