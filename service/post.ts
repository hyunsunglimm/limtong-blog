import dayjs from "dayjs";
import { FullPost, SimplePost } from "@/model/post";
import { client } from "@/sanity/lib/client";

const simplePost = `
  "id": _id,
  title,
  description,
  category,
  date,
  "thumbnail": thumbnail.asset->url,
`;

const fullPost = `
  ${simplePost}
  content
`;

export const getPosts = async (): Promise<SimplePost[]> => {
  return client
    .fetch(
      `
      *[_type == "post"] | order(date desc) {
        ${simplePost}
      }
    `,
      {},
      { cache: "no-store" }
    )
    .then((posts) =>
      posts.map((post: SimplePost) => ({
        ...post,
        date: dayjs(post.date).locale("ko").format("YYYY년 MM월 DD일"),
      }))
    );
};

export const getPostDetail = async (
  postId: string
): Promise<FullPost | null> => {
  const post = await client.fetch(
    `
      *[_type == "post" && _id == "${postId}"] {
        ${fullPost}
      }[0]
    `,
    {},
    { cache: "no-store" }
  );

  if (!post) return null;

  return {
    ...post,
    date: dayjs(post.date).locale("ko").format("YYYY년 MM월 DD일"),
  };
};

// 카테고리별 포스트 분류
export const getCategoryList = async () => {
  const posts: SimplePost[] = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`
  ).then((res) => res.json());
  const categories = [...new Set(posts.map((post) => post.category))];
  const categoryList = categories.map((category) => ({
    category,
    items: posts
      .filter((post) => post.category === category)
      .map((post) => ({ title: post.title, id: post.id })),
  }));

  const sortedCategories = categoryList.sort((a, b) => {
    if (a.category === "기타") return 1; // '기타'를 마지막으로
    if (b.category === "기타") return -1; // '기타'를 마지막으로
    return a.category.localeCompare(b.category); // 사전순 정렬
  });
  return sortedCategories;
};
