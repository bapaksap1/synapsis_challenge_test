"use client"
import React, { FC, useState } from "react";
import { TypeUsersDetail } from "@/helpers/Type/type-user";

const Users: FC<TypeUsersDetail> = (props) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
      <div className="flex-col flex gap-10 p-6 md:p-10">
        <h1 className="font-bold text-2xl md:text-4xl">User Detail</h1>
        <table className="w-full border-separate border-spacing-y-5">
          <thead>
          <tr>
            <th className="pr-2">Name</th>
            <th className="px-1 md:px-2">:</th>
            <td className="pl-2">{props.name}</td>
          </tr>
          <tr>
            <th className="pr-2">Email</th>
            <th className="px-1 md:px-2">:</th>
            <td className="pl-2">{props.email}</td>
          </tr>
          <tr>
            <th className="pr-2">Gender</th>
            <th className="px-1 md:px-2">:</th>
            <td className="pl-2">{props.gender}</td>
          </tr>
          <tr>
            <th className="pr-2">Status</th>
            <th className="px-1 md:px-2">:</th>
            <td className="pl-2">{props.status}</td>
          </tr>
          </thead>
        </table>
        <div className="flex flex-col md:flex-row md:justify-between gap-4">
          <button
              onClick={() => setModalOpen(true)}
              className="border-2 border-black w-full md:w-[40%] h-12 md:h-20 rounded-2xl"
          >
            Edit User
          </button>
          <button
              onClick={() => setModalOpen(true)}
              className="border-2 border-black w-full md:w-[40%] h-12 md:h-20 rounded-2xl"
          >
            Delete User
          </button>
        </div>
      </div>
  );
};

export default Users;
