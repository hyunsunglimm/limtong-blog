import { FullPost, SimplePost } from "@/model/post";
import { redirect } from "next/navigation";
import PostHeader from "../../post/[id]/components/PostHeader";
import PostBody from "../../post/[id]/components/PostBody";
import Comments from "@/components/Comments";

export default async function page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post: FullPost = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/${slug}`
  ).then((res) => res.json());

  if (!post) return redirect("/");

  return (
    <>
      <PostHeader post={post} />
      <PostBody content={post.content} />
      <Comments />
    </>
  );
}

export async function generateStaticParams() {
  const posts: SimplePost[] = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`
  ).then((res) => res.json());

  return posts.map((post) => ({
    slug: post.id,
  }));
}
