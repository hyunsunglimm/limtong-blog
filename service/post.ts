import fs from "fs";
import path from "path";
import dayjs from "dayjs";
import matter from "gray-matter";
import readingTime from "reading-time";
import { Post, PostMatter } from "@/model/post";
import { sync } from "glob";

const BASE_PATH = "src/posts";
const POSTS_PATH = path.join(process.cwd(), BASE_PATH);

// MDX 파일 파싱 : abstract / detail 구분
const parsePost = async (postPath: string): Promise<Post> => {
  const postAbstract = parsePostAbstract(postPath);
  const postDetail = await parsePostDetail(postPath);
  return { ...postAbstract, ...postDetail };
};

const parsePostAbstract = (postPath: string) => {
  const filePath = postPath
    .slice(postPath.indexOf(BASE_PATH))
    .replace(`${BASE_PATH}/`, "")
    .replace(".mdx", "");

  const [category, slug] = filePath.split("/");

  const url = `/post/${slug}`;

  return { url, category, slug };
};

// MDX Detail
const parsePostDetail = async (postPath: string) => {
  const file = fs.readFileSync(postPath, "utf8");
  const { data, content } = matter(file);
  const grayMatter = data as PostMatter;
  const readingMinutes = Math.ceil(readingTime(content).minutes);
  const dateString = dayjs(grayMatter.date)
    .locale("ko")
    .format("YYYY년 MM월 DD일");
  return { ...grayMatter, dateString, content, readingMinutes };
};

// 모든 MDX 파일 조회
const getPostPaths = (category?: string) => {
  const folder = category || "**";
  const paths: string[] = sync(`${POSTS_PATH}/${folder}/**/*.mdx`);
  return paths;
};

// 모든 포스트 목록 조회
export const getPostList = async (category?: string): Promise<Post[]> => {
  const paths: string[] = getPostPaths(category);
  const posts = await Promise.all(paths.map((postPath) => parsePost(postPath)));
  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
};

// 상세 포스트 조회
export const getPost = async (slug: string) => {
  const path = sync(`${POSTS_PATH}/**/${slug}/content.mdx`)[0];
  const post = await parsePost(path);
  return post;
};

export const getCategoryList = async () => {
  const posts = await getPostList();
  const categories = [...new Set(posts.map((post) => post.category))];
  const categoryList = categories.map((category) => ({
    category,
    items: posts
      .filter((post) => post.category === category)
      .map((post) => ({ title: post.title, url: post.url })),
  }));
  return categoryList;
};
