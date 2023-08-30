"use client";
import { FC, useState } from "react";
import Modal from "@/components/Modal/AddUser";
import {TypeUsersDetail} from "@/helpers/Type/type-user";

const Users: FC<TypeUsersDetail> = (props) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="flex-col flex gap-10 mt-5">
      <div className="font-bold text-4xl">User Detail</div>
      <table className="border-separate border-spacing-y-5">
        <thead>
          <tr>
            <td>Name</td>
            <td>:</td>
            <td>{props.name}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>:</td>
            <td>{props.email}</td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>:</td>
            <td>{props.gender}</td>
          </tr>
          <tr>
            <td>Status</td>
            <td>:</td>
            <td>{props.status}</td>
          </tr>
        </thead>
      </table>
      <div className="flex flex-row justify-between">
        <button
            onClick={() => setModalOpen(true)}
            className="border-2 border-black w-25 h-20 w-[40%] rounded-2xl"
        >
          Edit User
        </button>
        <button
            onClick={() => setModalOpen(true)}
            className="border-2 border-black w-25 h-20 w-[40%] rounded-2xl"
        >
          Delete User
        </button>
      </div>

    </div>
  );
};

export default Users;
