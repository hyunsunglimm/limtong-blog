export const post = {
  title: "Post",
  name: "post",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Description",
      name: "description",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Category",
      name: "category",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Date",
      name: "date",
      type: "date",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Thumbnail",
      name: "thumbnail",
      type: "image",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Content",
      name: "content",
      type: "markdown",
      description: "포스트 내용을 작성해주세요",
      validation: (Rule) => Rule.required(),
    },
  ],
};
