import ResponsiveImage from "@/components/ResponsiveImage";
import { SimplePost } from "@/model/post";

export default function PostHeader({ post }: { post: SimplePost }) {
  return (
    <section className="pb-6">
      <h1 className="text-4xl sm:text-5xl text-center font-bold">
        {post.title}
      </h1>
      <div className="flex justify-between items-center pt-8 pb-4 border-b border-neutral-700">
        <p className="bg-white/10 px-3 py-1 rounded-[24px] text-lg">
          {post.category}
        </p>
        <p>{post.date}</p>
      </div>
      <div className="pt-4">
        <ResponsiveImage
          src={post.thumbnail}
          alt={`${post.title}의 썸네일`}
          priority
          isFull
        />
      </div>
    </section>
  );
}
