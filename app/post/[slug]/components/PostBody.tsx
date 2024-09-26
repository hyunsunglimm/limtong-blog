import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkBreaks from "remark-breaks";
import { MdxComponents } from "@/components/mdx";

export default function PostBody({ content }: { content: string }) {
  return (
    <MDXRemote
      source={content}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm, remarkBreaks],
          rehypePlugins: [
            [
              rehypePrettyCode,
              {
                theme: "github-dark-dimmed",
              },
            ],
            rehypeSlug,
          ],
        },
      }}
      components={MdxComponents}
    />
  );
}
