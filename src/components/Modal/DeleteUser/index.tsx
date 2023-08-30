import React, { FC, useEffect, useState } from "react";
import { deleteUsers } from "@/helpers/Api/Users";
import 'react-toastify/dist/ReactToastify.css'; // Import the Toastify styles
import { ToastContainer, toast } from 'react-toastify';
import ModalMessage from "@/components/Modal/Message";

type modal = {
  isOpen: boolean;
  onClose: () => void;
  id: string;
};

const ModalDelete: FC<modal> = ({ isOpen, onClose, id }) => {
  const [messageModal, setMessageModal] = useState(false)
  const [message, setMessage] = useState("")
  if (!isOpen) return null;
  let pesan
  const DeleteUsers = async () => {
    const a = await deleteUsers(id);
    setMessageModal(true)
    setMessage(a.pesan)
    onClose
  };
  


  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full md:w-[400px] lg:w-[500px] md:px-5 sm:px-5">
        <h1 className="text-lg md:text-xl lg:text-2xl xl:text-2xl mb-4">
          Are you sure you want to delete this user?
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <button
            className="border-2 border-black py-2 px-4 rounded mt-4 md:mt-0 md:mr-2 hover:bg-blue-500 hover:text-white"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="border-2 border-black py-2 px-4 rounded mt-4 md:mt-0 hover:bg-red-500 hover:text-white"
            onClick={() => DeleteUsers()}
          >
            Delete
          </button>
        </div>
      </div>
      <ModalMessage isOpen={messageModal} onClose={() => setMessageModal(false)} message={message} />
    </div>
  );
};

export default ModalDelete;
