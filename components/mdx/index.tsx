/* eslint-disable @typescript-eslint/no-explicit-any */
import { Image } from "./Image";
import { MDXComponents } from "mdx/types";
import { ExternalLink } from "./Link";
import { Callout } from "./Callout";

// 커스텀 스타일
export const MdxComponents: MDXComponents = {
  a: ExternalLink as any,
  img: Image as any,
  h1: ({ children }) => <h1 className="text-4xl font-bold my-4">{children}</h1>,
  h2: ({ children }) => <h1 className="text-3xl font-bold my-4">{children}</h1>,
  h3: ({ children }) => <h1 className="text-2xl font-bold my-4">{children}</h1>,
  h4: ({ children }) => <h1 className="text-xl font-bold my-4">{children}</h1>,
  h5: ({ children }) => <h1 className="text-lg font-bold my-4">{children}</h1>,
  h6: ({ children }) => <h1 className="font-bold mb-4">{children}</h1>,
  p: ({ children }) => <p className="leading-8">{children}</p>,
  blockquote: Callout,
  Callout,
};
