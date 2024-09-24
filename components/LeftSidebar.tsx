import { getCategoryList } from "@/service/post";
import LeftSidebarClient from "./LeftSidebarClient";

export default async function LeftSidebar() {
  const categoryList = await getCategoryList();

  return <LeftSidebarClient categoryList={categoryList} />;
}
