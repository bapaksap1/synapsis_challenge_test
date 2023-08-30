export type TypeList = {
  listItem: {
    id: string;
    title: string;
    body: string;
    user: {
      name: string;
    };
  }[];
  type: "blog" | "user";
};

export type ListPost = {
    id: number;
    user_id: number;
    title: string;
    body: string;
};
