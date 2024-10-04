import { FullPost, SimplePost } from "@/model/post";
import { redirect } from "next/navigation";
import PostHeader from "../../post/[id]/components/PostHeader";
import PostBody from "../../post/[id]/components/PostBody";
import Comments from "@/components/Comments";
import { Metadata } from "next";

export default async function page({ params }: { params: { id: string } }) {
  const { id } = params;
  const post: FullPost = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/${id}`
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
    id: post.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { id } = params;
  const post: FullPost = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/${id}`
  ).then((res) => res.json());

  if (!post) return redirect("/");

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "website",
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/post/${id}/`,
      images: post.thumbnail,
      siteName: "임통 블로그",
      locale: "ko_KR",
    },
  };
}
