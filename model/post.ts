export type PostMatter = {
  title: string;
  date: Date;
  desc: string;
  thumbnail: string;
};

export type Post = PostMatter & {
  slug: string;
  url: string;
  category: string;
  dateString: string;
  content: string;
  readingMinutes: number;
};
