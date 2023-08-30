"use client";
import { FC, useState } from "react";
import Modal from "@/components/Modal/AddUser";
import Link from "next/link";
import ModalAdd from "@/components/Modal/AddUser";
import ModalDelete from "@/components/Modal/DeleteUser";
import ModalEdit from "@/components/Modal/EditUser";
import { ListUsers } from "@/helpers/Type/type-user";

const Users: FC<ListUsers> = (props) => {
  const [modalAdd, setModalAdd] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);

  return (
    <>
      <ModalAdd isOpen={modalAdd} onClose={() => setModalAdd(false)} />
      <ModalDelete isOpen={modalDelete} onClose={() => setModalDelete(false)} />
      <ModalEdit isOpen={modalEdit} onClose={() => setModalEdit(false)} />
      <div className="flex-col flex gap-10 ">
        <div className="font-bold text-4xl">User List</div>
        {props.users.map((e) => (
          <div className="flex flex-row justify-between border-b-[0.8px] border-b-[black] border-solid;">
            <div className="hover:font-bold hover:text-blue-500">
              {" "}
              <Link href={`users/${e.id}`}>{e.name}</Link>
            </div>
            <div className="flex flex-row gap-4">
              <img
                className="w-6 h-6"
                src={"delete.svg"}
                onClick={() => setModalDelete(true)}
              />
              <img
                className="w-6 h-6"
                src={"edit.svg"}
                onClick={() => setModalEdit(true)}
              />
            </div>
          </div>
        ))}
        <div className="flex flex-row justify-center">
          <button
            onClick={() => setModalAdd(true)}
            className="border-2 border-black w-25 h-20 w-[100%] rounded-2xl center hover:bg-blue-500 hover:text-white"
          >
            Add User
          </button>
        </div>
      </div>
    </>
  );
};

export default Users;
