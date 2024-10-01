import { getPost } from "@/service/post";
import dynamic from "next/dynamic";
import PostBody from "./components/PostBody";
import PostHeader from "./components/PostHeader";
import Comments from "@/components/Comments";
import { Metadata } from "next";

const LeftSidebar = dynamic(() => import("@/components/LeftSidebar"), {
  ssr: false,
});

const RightSidebar = dynamic(() => import("@/components/RightSidebar"), {
  ssr: false,
});

type PostDetailPageProps = {
  params: {
    slug: string;
  };
};

export default async function PostDetailPage({ params }: PostDetailPageProps) {
  const { slug } = params;
  const post = await getPost(slug);

  return (
    <div className="flex">
      <LeftSidebar />
      <div className="md:pl-[60px] xl:pl-[300px] md:pr-[60px] lg:pr-[300px] limit:pr-[316px] w-full">
        <PostHeader post={post} />
        <PostBody content={post.content} />
        <Comments />
      </div>
      <RightSidebar />
    </div>
  );
}

export async function generateMetadata({
  params,
}: PostDetailPageProps): Promise<Metadata> {
  const { slug } = params;
  const post = await getPost(slug);

  return {
    title: post.title,
    description: post.desc,
    openGraph: {
      title: post.title,
      description: post.desc,
      type: "website",
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/post/${slug}/`,
      images: post.thumbnail,
      siteName: "임통 블로그",
      locale: "ko_KR",
    },
  };
}
