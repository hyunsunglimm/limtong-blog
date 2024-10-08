"use client";

import { useEffect, useRef } from "react";

export default function Comments() {
  const ref = useRef<HTMLDivElement>(null);

  // https://github.com/giscus/giscus/tree/main/styles/themes

  useEffect(() => {
    if (!ref.current || ref.current.hasChildNodes()) return;

    const scriptElem = document.createElement("script");
    scriptElem.src = "https://giscus.app/client.js";
    scriptElem.async = true;
    scriptElem.crossOrigin = "anonymous";

    scriptElem.setAttribute("data-repo", "hyunsunglimm/limtong-blog");
    scriptElem.setAttribute(
      "data-repo-id",
      process.env.NEXT_PUBLIC_DATA_REPO_ID || ""
    );
    scriptElem.setAttribute("data-category", "Comments");
    scriptElem.setAttribute(
      "data-category-id",
      process.env.NEXT_PUBLIC_DATA_CATEGORY_ID || ""
    );
    scriptElem.setAttribute("data-mapping", "pathname");
    scriptElem.setAttribute("data-strict", "0");
    scriptElem.setAttribute("data-reactions-enabled", "1");
    scriptElem.setAttribute("data-emit-metadata", "0");
    scriptElem.setAttribute("data-input-position", "bottom");
    scriptElem.setAttribute("data-theme", "transparent_dark");
    scriptElem.setAttribute("data-lang", "ko");

    ref.current.appendChild(scriptElem);
  }, []);

  // https://github.com/giscus/giscus/blob/main/ADVANCED-USAGE.md#isetconfigmessage
  useEffect(() => {
    const iframe = document.querySelector<HTMLIFrameElement>(
      "iframe.giscus-frame"
    );
    iframe?.contentWindow?.postMessage(
      { giscus: { setConfig: { theme: "dark" } } },
      "https://giscus.app"
    );
  }, []);

  return <section ref={ref} />;
}
