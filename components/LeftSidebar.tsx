import SearchBar from "@/app/(home)/components/SearchBar";
import { Post } from "@/model/post";
import Link from "next/link";

export default function LeftSidebar({ posts }: { posts: Post[] }) {
  const categoryMap = posts.reduce<
    Record<string, { title: string; url: string }[]>
  >((acc, cur) => {
    acc[cur.category] = acc[cur.category]
      ? [...acc[cur.category], { title: cur.title, url: cur.url }]
      : [{ title: cur.title, url: cur.url }];
    return acc;
  }, {});

  const categories = Object.keys(categoryMap);

  return (
    <div className="fixed top-[60px] w-[240px] h-full border-r border-neutral-700 pt-12 pb-28 overflow-y-scroll">
      <SearchBar />
      <ul className="mt-4 flex flex-col gap-6">
        {categories.map((category) => (
          <li key={category}>
            <p className="font-bold">
              {category} ({categoryMap[category].length})
            </p>
            <div className="flex flex-col gap-2 px-2 mt-2">
              {categoryMap[category].map(({ title, url }) => (
                <Link
                  key={title}
                  href={url}
                  className="text-sm hover:text-my transition truncate"
                >
                  {title}
                </Link>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
