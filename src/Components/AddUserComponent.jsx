import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddUserComponent = () => {
    const [name, setName] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [adhaar, setAdhaar] = useState('');
    const [mobile, setMobile] = useState('');
    const [actions, setActions] = useState('');
    const [age, setAge] = useState('');

    const notify = (message, type = 'success') => {
        toast(message, { type });
    };


    const calculateAge = (birthdate) => {
        const today = new Date();
        const birthDate = new Date(birthdate);
        let calculatedAge = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
            calculatedAge--;
        }
        return calculatedAge;
    };

    const handleSaveBtn = () => {
        if (adhaar.length !== 12 || !/^\d+$/.test(adhaar)) {
            notify('Aadhaar number must be exactly 12 digits and contain only numbers.', 'error');
            return;
        }
        if (mobile.length !== 10 || !/^\d+$/.test(mobile)) {
            notify('Mobile number must be exactly 10 digits and contain only numbers.', 'error');
            return;
        }

        if (!name || !birthdate || !mobile || !adhaar || !actions || !age) {
            notify('Please fill all the inputs.', 'error');
            return;
        }

        const obj = {
            name,
            birthdate,
            adhaar,
            mobile,
            actions,
            age,
        };

        console.log(obj);

        const theLocalStorageArray = JSON.parse(localStorage.getItem('usersArray')) || [];
        const newArray = [...theLocalStorageArray, obj];

        localStorage.setItem('usersArray', JSON.stringify(newArray));

        notify('User added successfully!');
    };

    const handleBirthdateChange = (e) => {
        setBirthdate(e.target.value);
        const calculatedAge = calculateAge(e.target.value);
        setAge(calculatedAge);
    };

    return (
        <div className="p-6 ">
            <div className="px-[40px]">
                <table className="w-full max-w-full bg-white shadow-md rounded-lg">
                    <thead>
                        <tr className="bg-gray-300 text-gray-700">
                            <th className="text-left px-4 py-3 border-b font-semibold text-sm uppercase">Name</th>
                            <th className="text-left px-4 py-3 border-b font-semibold text-sm uppercase">Date of birth</th>
                            <th className="text-left px-4 py-3 border-b font-semibold text-sm uppercase">Aadhaar number</th>
                            <th className="text-left px-4 py-3 border-b font-semibold text-sm uppercase">Mobile number</th>
                            <th className="text-left px-4 py-3 border-b font-semibold text-sm uppercase">Age</th>
                            <th className="text-left px-4 py-3 border-b font-semibold text-sm uppercase">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="hover:bg-gray-50 transition-all">
                            <td className="px-4 py-4 border-b">
                                <input
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                    className="outline-none border border-gray-300 rounded-md h-full w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400 transition duration-300"
                                    type="text"
                                    placeholder="Enter name"
                                />
                            </td>
                            <td className="px-4 py-4 border-b">
                                <input
                                    value={birthdate}
                                    onChange={handleBirthdateChange}
                                    className="outline-none border border-gray-300 rounded-md h-full w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400 transition duration-300"
                                    type="date"
                                />
                            </td>
                            <td className="px-4 py-4 border-b">
                                <input
                                    onChange={(e) => setAdhaar(e.target.value)}
                                    value={adhaar}
                                    className="outline-none border border-gray-300 rounded-md h-full w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400 transition duration-300"
                                    type="text"
                                    placeholder="Enter Aadhaar number"
                                    maxLength={12} 
                                />
                            </td>
                            <td className="px-4 py-4 border-b">
                                <input
                                    value={mobile}
                                    onChange={(e) => setMobile(e.target.value)}
                                    className="outline-none border border-gray-300 rounded-md h-full w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400 transition duration-300"
                                    type="text"
                                    placeholder="Enter mobile number"
                                    maxLength={10} 
                                />
                            </td>
                            <td className="px-4 py-4 border-b">
                                <input
                                    value={age}
                                    onChange={(e) => setAge(e.target.value)}
                                    className="outline-none border border-gray-300 rounded-md h-full w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400 transition duration-300"
                                    type="number"
                                    placeholder="Enter age"
                                    readOnly 
                                />
                            </td>
                            <td className="px-4 py-4 border-b text-center">
                                <input
                                    value={actions}
                                    onChange={(e) => setActions(e.target.value)}
                                    className="outline-none border border-gray-300 rounded-md h-full w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400 transition duration-300"
                                    type="text"
                                    placeholder="Enter Action"
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>

                <button
                    onClick={handleSaveBtn}
                    className="mt-[20px] block ml-auto h-[40px] w-[120px] bg-green-600 text-white hover:bg-green-500 rounded"
                >
                    Save
                </button>
            </div>

          
            <ToastContainer />
        </div>
    );
};

export default AddUserComponent;
