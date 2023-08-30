import React, { FC, useState } from "react";

type modal = {
  isOpen: boolean;
  onClose: () => void;
};
const ModalDelete: FC<modal> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <div
        className="bg-white p-8 rounded-3xl shadow-md w-100"
        onClick={(e) => e.stopPropagation()}
      >
        <h1>Are you sure want to delete this user ?</h1>
        <div className="flex flex-row justify-between">
          <button
            className="border-2 border-black py-2 px-4 rounded mt-4 hover:bg-blue-500 hover:text-white"
            onClick={onClose}
          >
            Cancel
          </button>
          <button  type="submit" className="border-2 border-black py-2 px-4 rounded mt-4 hover:bg-blue-500 hover:text-white">
            delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalDelete;
