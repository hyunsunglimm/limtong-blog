import { SimplePost } from "@/model/post";
import PostCard from "./components/PostCard";
import LeftSidebar from "@/components/LeftSidebar";

export default async function page() {
  const posts: SimplePost[] = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`,
    { cache: "no-cache" }
  ).then((res) => res.json());

  return (
    <div className="flex">
      <LeftSidebar />
      <div className="xl:pl-[300px] w-full">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </ul>
      </div>
    </div>
  );
}
