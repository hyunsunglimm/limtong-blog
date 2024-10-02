import ResponsiveImage from "@/components/ResponsiveImage";
import TimeIcon from "@/components/icons/TimeIcon";
import { Post } from "@/model/post";
import Link from "next/link";

type PostCardProps = {
  post: Post;
};

export default function PostCard({ post }: PostCardProps) {
  return (
    <li className="relative hover:text-my transition">
      <Link
        href={post.url}
        aria-label={`${post.title}의 상세페이지로 이동합니다.`}
      >
        <ResponsiveImage
          src={post.thumbnail}
          alt={`${post.title} 썸네일`}
          priority
        />
        <p className="text-2xl font-bold mt-2 truncate">{post.title}</p>
        <p className="line-clamp-3">{post.desc}</p>
        <div className="flex justify-between mt-2">
          <p>{post.dateString}</p>
          <div className="flex items-center gap-1">
            <TimeIcon />
            {post.readingMinutes}분
          </div>
        </div>
      </Link>
      <p className="absolute top-2 right-2 bg-bg/80 backdrop-blur-sm rounded-md px-2 py-1 font-semibold">
        {post.category}
      </p>
    </li>
  );
}
