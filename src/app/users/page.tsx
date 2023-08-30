import { FC } from "react";
import Users from "@/components/Users";
import { getUsers } from "@/helpers/Api/Users";

type TUsers = {
  users: {
    name: string;
    id: string;
  }[];
};
const UsersList: FC<TUsers> = async (props) => {
  const UsersList = await getUsers();
  return (
    <div className="flex-col flex gap-5 py-5">
      <Users users={UsersList} />
    </div>
  );
};

export default UsersList;
