import React, {FC, useEffect, useState} from "react";
import {editUsers} from "@/helpers/Api/Users";
import ModalMessage from "@/components/Modal/Message";

type modal = {
  isOpen: boolean;
  onClose: () => void;
  id: string
  bio: {name:  string,
  email: string,
  gender: string,
  status: string},
};
const ModalEdit: FC<modal> = ({ isOpen, onClose , id, bio}) => {
  const [messageModal, setMessageModal] = useState(false);
  const [message, setMessage] = useState<any>("");
  const [formData, setFormData] = useState({
    name: bio.name,
    email: bio.email,
    gender: bio.gender,
    status: bio.status,
  });

  useEffect(() => {
    setFormData(bio)
  }, [bio]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const a = await editUsers(id ,formData.name, formData.gender, formData.email, formData.status);
    setMessageModal(true);
    setMessage(a.message);
  };

  if (!isOpen) return null;
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-3xl shadow-md w-100 ">
        <h2 className="text-xl mb-4 font-bold">Edit Users</h2>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2">
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-2xl  mt-1"
            />
          </label>
          <label className="block mb-2">
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-2xl  mt-1"
            />
          </label>
          <label className="block mb-2">
            Gender:
            <select
              name="gender"
              value={formData.gender}
              onChange={(e: any) => handleInputChange(e)}
              className="w-full p-2 border rounded-2xl mt-1"
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
          <label className="block mb-2">
            Gender:
            <select
              name="status"
              value={formData.status}
              onChange={(e: any) => handleInputChange(e)}
              className="w-full p-2 border rounded-2xl mt-1"
            >
              <option value="">Select</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </label>
          <button
            type="submit"
            className="border-2 border-black py-2 px-4 rounded mt-4 hover:bg-blue-500 hover:text-white"
          >
            Edit
          </button>
        </form>
        <button
          className="block mt-4 ml-auto text-sm text-gray-600 hover:text-gray-800"
          onClick={onClose}
        >
          Close
        </button>
      </div>
      <ModalMessage
          isOpen={messageModal}
          onClose={() => {
            setMessageModal(false);
            onClose();
          }}
          message={message}
      />
    </div>
  );
};

export default ModalEdit;
