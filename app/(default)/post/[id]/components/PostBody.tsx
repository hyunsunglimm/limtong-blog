import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkBreaks from "remark-breaks";
import { MdxComponents } from "@/components/mdx";

export default async function PostBody({ postId }: { postId: string }) {
  const content = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/${postId}`
  )
    .then((res) => res.json())
    .then((post) => post.content);

  return (
    <div className="pb-8">
      <MDXRemote
        source={content}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm, remarkBreaks],
            rehypePlugins: [
              [
                rehypePrettyCode,
                {
                  theme: "material-theme-darker",
                },
              ],
              rehypeSlug,
            ],
          },
        }}
        components={MdxComponents}
      />
    </div>
  );
}
