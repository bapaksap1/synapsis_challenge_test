export type TypeBlogDetail = {
  title?: string;
  desc?: string;
  author?: string;
  comment: { body: string; user: string, name: string}[];
};
