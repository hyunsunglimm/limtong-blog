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

export type SimplePost = {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  thumbnail: string;
};

export type FullPost = SimplePost & {
  content: string;
};
