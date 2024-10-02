import { getPosts } from "@/service/post";

export async function GET() {
  const posts = await getPosts();

  return Response.json(posts);
}
