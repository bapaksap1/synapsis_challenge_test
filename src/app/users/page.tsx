import { FC } from "react";
import Users from "@/components/Users";
import { getUsers } from "@/helpers/Api/Users";

const UsersList= async () => {
  const UsersList = await getUsers();
  return (
    <div className="flex-col flex gap-5 py-5">
      <Users users={UsersList} />
    </div>
  );
};

export default UsersList;
