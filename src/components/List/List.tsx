"use client"
import { FC } from "react";
import Card from "@/components/Card";
import { TypeList } from "@/helpers/Type/type-list";
import Pagination from "@/components/Pagination";
import Link from "next/link";

interface Post {
  name: string
}
const List: FC<TypeList> = async ({ listItem, type }) => {
  const itemsPerPage = 10;
  const renderItem = (item) => (
      <div>
        <Card
            id={item.id}
            title={item.title}
            desc={item.body}
            author={item.user.name}
        />
      </div>
  );
  return (
    <div className="flex flex-col gap-6 py-5">
      <Pagination<Post> data={listItem} itemsPerPage={5} renderItem={renderItem} />
    </div>
  );
};

export default List;

List.defaultProps = {
  listItem: [],
};
