export type TypeBlogDetail = {
  title: string;
  desc: string;
  author: string;
  user: {name: string};
  comment: { body: string; user: string, name: string}[];
};
