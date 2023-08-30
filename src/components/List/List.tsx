import { FC } from "react";
import Card from "@/components/Card";
import { TypeList } from "@/helpers/Type/type-list";

const List: FC<TypeList> = async ({ listItem, type }) => {
  return (
    <div className="flex flex-col gap-6 py-5">
      {listItem.map((item) =>
        type === "blog" ? (
          <div>
            <Card
              id={item.id}
              title={item.title}
              desc={item.body}
              author={item.user.name}
            />
          </div>
        ) : null,
      )}
    </div>
  );
};

export default List;

List.defaultProps = {
  listItem: [],
};
