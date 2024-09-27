/* eslint-disable @typescript-eslint/no-explicit-any */
import { Image } from "./Image";
import { MDXComponents } from "mdx/types";
import { ExternalLink } from "./Link";
import { Callout } from "./Callout";
import * as Heading from "./Heading";
import { Ol, Ul } from "./List";
import { CodeBlock } from "./CodeBlock";

// 커스텀 스타일
export const MdxComponents: MDXComponents = {
  a: ExternalLink as any,
  img: Image as any,
  h1: Heading.h1 as any,
  h2: Heading.h2 as any,
  h3: Heading.h3 as any,
  h4: Heading.h4 as any,
  h5: Heading.h5 as any,
  h6: Heading.h6 as any,
  ul: Ul as any,
  ol: Ol as any,
  figure: CodeBlock as any,
  p: ({ children }) => <p className="leading-7 my-4">{children}</p>,
  blockquote: Callout,
  Callout,
};
