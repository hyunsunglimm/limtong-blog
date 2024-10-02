import { getPost } from "@/service/post";
import { Metadata } from "next";

type PostDetailPageProps = {
  params: {
    slug: string;
  };
};

export default async function PostDetailPage({ params }: PostDetailPageProps) {
  const { slug } = params;

  return <p>{slug}</p>;
}

export async function generateMetadata({
  params,
}: PostDetailPageProps): Promise<Metadata> {
  const { slug } = params;
  const post = await getPost(slug);

  return {
    title: post.title,
    description: post.desc,
    openGraph: {
      title: post.title,
      description: post.desc,
      type: "website",
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/post/${slug}/`,
      images: post.thumbnail,
      siteName: "임통 블로그",
      locale: "ko_KR",
    },
  };
}
