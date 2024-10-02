import { getPostDetail } from "@/service/post";
import PostBody from "./components/PostBody";
import PostHeader from "./components/PostHeader";
import Comments from "@/components/Comments";
import { Metadata } from "next";

type PostDetailPageProps = {
  params: {
    id: string;
  };
};

export default async function PostDetailPage({ params }: PostDetailPageProps) {
  const { id } = params;
  const post = await getPostDetail(id);

  return (
    <>
      <PostHeader post={post} />
      <PostBody content={post.content} />
      <Comments />
    </>
  );
}

export async function generateMetadata({
  params,
}: PostDetailPageProps): Promise<Metadata> {
  const { id } = params;
  const post = await getPostDetail(id);

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
