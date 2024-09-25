import { getPost } from "@/service/post";
import dynamic from "next/dynamic";

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
        <p>{post.content}</p>
        <p>{post.content}</p>
        <p>{post.content}</p>
        <p>{post.content}</p>
      </div>
      <RightSidebar />
    </div>
  );
}
