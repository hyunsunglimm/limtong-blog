import SearchBar from "@/components/SearchBar";
import { getCategoryList } from "@/service/post";
import CategoryList from "./CategoryList";

export default async function LeftSidebar() {
  const categoryList = await getCategoryList();

  return (
    <div className="fixed top-[60px] w-[240px] h-full border-r border-neutral-700 pt-12 pb-28 overflow-y-scroll">
      <SearchBar />
      <CategoryList categoryList={categoryList} />
    </div>
  );
}
