/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from "react";

export default function useObserver(
  setActiveId: React.Dispatch<React.SetStateAction<string>>
) {
  const headingElementsRef = useRef<any>(null);

  useEffect(() => {
    headingElementsRef.current = {};

    let direction = "";
    let prevYposition = 0;

    const checkScrollDirection = (prevY: number) => {
      if ((window.scrollY === 0 && prevY === 0) || window.scrollY === prevY)
        return;
      else if (window.scrollY > prevY) direction = "down";
      else direction = "up";

      prevYposition = window.scrollY;
    };

    const callback: IntersectionObserverCallback = (headings) => {
      checkScrollDirection(prevYposition);

      headingElementsRef.current = headings.reduce(
        (map: any, headingElement) => {
          map[headingElement.target.id] = headingElement;
          return map;
        },
        headingElementsRef.current
      );

      const visibleHeadings: IntersectionObserverEntry[] = [];

      Object.keys(headingElementsRef.current).forEach((key) => {
        const headingElement = headingElementsRef.current[key];

        if (headingElement.isIntersecting) visibleHeadings.push(headingElement);
      });

      const getIndexFromId = (id: string) =>
        headingElements.findIndex((heading) => heading.id === id);

      if (visibleHeadings.length === 1) {
        setActiveId(visibleHeadings[0].target.id);
      } else if (visibleHeadings.length > 1) {
        const sortedVisibleHeadings = visibleHeadings.sort(
          (a, b) => getIndexFromId(a.target.id) - getIndexFromId(b.target.id)
        );
        setActiveId(sortedVisibleHeadings[0].target.id);
      } else if (visibleHeadings.length === 0 && direction === "up") {
        setActiveId((prev) => {
          const prevId = getIndexFromId(prev);
          return headingElements[prevId - 1 < 0 ? 0 : prevId - 1].id;
        });
      }
    };

    const observer = new IntersectionObserver(callback, {
      rootMargin: "-60px 0px 0px 0px",
    });

    const headingElements = Array.from(document.querySelectorAll("h2, h3"));

    headingElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [setActiveId]);
  return;
}
