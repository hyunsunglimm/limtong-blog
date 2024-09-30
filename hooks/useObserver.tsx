/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from "react";

export default function useObserver(
  setActiveId: React.Dispatch<React.SetStateAction<string>>
) {
  const headingElementsRef = useRef<any>(null);

  useEffect(() => {
    headingElementsRef.current = {};

    const callback: IntersectionObserverCallback = (headings) => {
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
      }
    };

    const observer = new IntersectionObserver(callback, {
      rootMargin: "-64px 0px -40% 0px",
    });

    const headingElements = Array.from(document.querySelectorAll("h1, h2, h3"));

    headingElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [setActiveId]);
  return;
}
