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
