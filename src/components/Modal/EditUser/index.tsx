import React, { FC, useState } from "react";

type modal = {
    isOpen: boolean;
    onClose: () => void;
};
const ModalEdit: FC<modal> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        gender: "",
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Submitted data:", formData);
        // You can perform additional actions with the form data here
    };

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
                            className="w-full p-2 border rounded mt-1"
                        />
                    </label>
                    <label className="block mb-2">
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded mt-1"
                        />
                    </label>
                    <label className="block mb-2">
                        Gender:
                        <select
                            name="gender"
                            value={formData.gender}
                            onChange={() =>handleInputChange}
                            className="w-full p-2 border rounded mt-1"
                        >
                            <option value="">Select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
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
        </div>
    );
};

export default ModalEdit;
