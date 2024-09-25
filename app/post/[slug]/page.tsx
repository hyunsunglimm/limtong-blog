import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";
import { getPost } from "@/service/post";

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
      <div className="pl-[60px] pr-[60px] xl:pl-[300px] lg:pr-[300px] w-full">
        <p>{post.content}</p>
        <p>{post.content}</p>
        <p>{post.content}</p>
        <p>{post.content}</p>
      </div>
      <RightSidebar />
    </div>
  );
}
