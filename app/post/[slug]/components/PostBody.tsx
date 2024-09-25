import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkA11yEmoji from "@fec/remark-a11y-emoji";
import remarkBreaks from "remark-breaks";
import { MdxComponents } from "@/components/mdx";

export default function PostBody({ content }: { content: string }) {
  return (
    <MDXRemote
      source={content}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm, remarkA11yEmoji, remarkBreaks],
          rehypePlugins: [
            [
              rehypePrettyCode,
              { theme: { dark: "github-dark-dimmed", light: "github-light" } },
            ],
            rehypeSlug,
          ],
        },
      }}
      components={MdxComponents}
    />
  );
}
