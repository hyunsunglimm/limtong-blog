import LeftSidebar from "@/components/LeftSidebar";
import { getPostList } from "@/service/post";
import PostCard from "./components/PostCard";

export default async function page() {
  const posts = await getPostList();

  return (
    <div className="flex">
      <LeftSidebar />
      <div className="xl:pl-[300px] w-full">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8">
          {posts.map((post) => (
            <PostCard key={post.url + post.date} post={post} />
          ))}
        </ul>
      </div>
    </div>
  );
}
