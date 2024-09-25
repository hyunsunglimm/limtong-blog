/* eslint-disable @typescript-eslint/no-explicit-any */
import { Image } from "./Image";
import { MDXComponents } from "mdx/types";
import { ExternalLink } from "./Link";
import { Callout } from "./Callout";

export const MdxComponents: MDXComponents = {
  a: ExternalLink as any,
  img: Image as any,
  blockquote: Callout,
  Callout,
};
