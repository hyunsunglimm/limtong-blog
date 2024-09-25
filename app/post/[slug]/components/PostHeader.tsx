import ResponsiveImage from "@/components/ResponsiveImage";
import { Post } from "@/model/post";

export default function PostHeader({ post }: { post: Post }) {
  return (
    <section className="border-b pb-6">
      <h1 className="text-4xl sm:text-5xl text-center font-bold">
        {post.title}
      </h1>
      <div className="flex justify-between items-center pt-8 pb-4">
        <p className="bg-white/10 px-3 py-1 rounded-[24px] text-lg">
          {post.category}
        </p>
        <p>{post.dateString}</p>
      </div>
      <ResponsiveImage
        src={post.thumbnail}
        alt={`${post.title}의 썸네일`}
        priority
        isFull
      />
    </section>
  );
}
