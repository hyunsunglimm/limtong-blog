"use client";

import { useSearchStore } from "@/store/search";
import { highlightedText } from "@/utils/text";
import Link from "next/link";
import { useParams } from "next/navigation";

type CategoryListProps = {
  categoryList: {
    category: string;
    items: {
      title: string;
      url: string;
      slug: string;
    }[];
  }[];
};

export default function CategoryList({ categoryList }: CategoryListProps) {
  const { keyword } = useSearchStore();
  const { slug } = useParams();
  const filteredCategoryList = categoryList
    .map((c) => {
      const filteredItems = c.items.filter((item) =>
        item.title.toLowerCase().includes(keyword.toLowerCase())
      );
      return { category: c.category, items: filteredItems };
    })
    .filter((c) => c.items.length > 0);

  return (
    <>
      {filteredCategoryList.length === 0 && (
        <p className="mt-4 text-end w-[220px]">검색 결과가 없습니다.</p>
      )}
      <ul className="mt-4 flex flex-col gap-6 grow overflow-y-scroll pb-12">
        {filteredCategoryList.map(({ category, items }) => (
          <li key={category}>
            <p className="font-bold">
              {category} ({items.length})
            </p>
            <div className="flex flex-col gap-2 px-2 mt-2">
              {items.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className={`text-sm hover:text-my transition truncate ${
                    item.slug === slug && "text-my"
                  }`}
                >
                  {highlightedText(item.title, keyword)}
                </Link>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
