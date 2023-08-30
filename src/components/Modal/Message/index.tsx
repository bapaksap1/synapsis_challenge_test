import React, { FC, useEffect, useState } from "react";
import { deleteUsers } from "@/helpers/Api/Users";

type modal = {
    isOpen: boolean;
    onClose: () => void;
    message: string;
};

const ModalMessage: FC<modal> = ({message, isOpen, onClose}) => {
    if (!isOpen) return null;


    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-full md:w-[400px] lg:w-[500px] xl:w-[600px] md:px-5 sm:px-5">
                <h1 className="text-lg md:text-xl lg:text-2xl xl:text-3xl mb-4">
                    {message}
                </h1>
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <button
                        className="border-2 border-black py-2 px-4 rounded mt-4 md:mt-0 md:mr-2 hover:bg-blue-500 hover:text-white"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ModalMessage;
