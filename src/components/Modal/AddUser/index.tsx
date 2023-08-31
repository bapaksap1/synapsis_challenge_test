import React, { FC, useState } from "react";
import {addUsers} from "@/helpers/Api/Users";
import ModalMessage from "@/components/Modal/Message";

type modal = {
  isOpen: boolean;
  onClose: () => void;
};
const ModalAdd: FC<modal> = ({ isOpen, onClose }) => {
  const [messageModal, setMessageModal] = useState(false);
  const [message, setMessage] = useState<any>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    status: "",
  });
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const a = await addUsers(formData.name, formData.gender, formData.email, formData.status);
    setMessageModal(true);
    setMessage(a.message);
  };

  if (!isOpen) return null;
  return (
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-8 rounded-3xl shadow-md w-100 ">
          <h2 className="text-xl mb-4 font-bold">Add Users</h2>
          <form onSubmit={handleSubmit}>
            <label className="block mb-2">
              Name:
              <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-2xl  rounded mt-1"
              />
            </label>
            <label className="block mb-2">
              Email:
              <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-2xl mt-4"
              />
            </label>
            <label className="block mb-2">
              Gender:
              <select
                  name="gender"
                  value={formData.gender}
                  onChange={(e: any) => handleInputChange(e)}
                  className="w-full p-2 border rounded-2xl  mt-1"
              >
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </label>
            <label className="block mb-2">
              Gender:
              <select
                  name="status"
                  value={formData.status}
                  onChange={(e: any) => handleInputChange(e)}
                  className="w-full p-2 border rounded-2xl  mt-1"
              >
                <option value="">Select</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </label>
            <button
                type="submit"
                className="border-2 border-black py-2 px-4 rounded mt-4 hover:bg-blue-500 hover:text-white"
            >
              Submit
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
}

export default ModalAdd;
