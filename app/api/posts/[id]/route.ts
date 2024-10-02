import { getPostDetail } from "@/service/post";

type Context = {
  params: {
    id: string;
  };
};

export const GET = async (_: Request, context: Context) => {
  const { id } = context.params;

  const post = await getPostDetail(id);

  return Response.json(post);
};
