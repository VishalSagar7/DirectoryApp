import React, { useState, useEffect } from 'react';

const RetriveInformation = () => {
    const [users, setUsers] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {

        const storedUsers = JSON.parse(localStorage.getItem('usersArray')) || [];
        setUsers(storedUsers);
    }, []);


    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.adhaar.includes(searchQuery) ||
        user.mobile.includes(searchQuery)
    );

    return (
        <div className="p-6 px-[60px] ">
            <h1 className="text-2xl font-semibold mb-4">Retrieve Information</h1>

        
            <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="mb-4 p-2 border border-gray-300 rounded-md w-full"
                placeholder="Search by name, Aadhaar, or mobile number"
            />

            <div className="">
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
                  
                        {filteredUsers.length > 0 ? (
                            filteredUsers.map((user, index) => (
                                <tr key={index} className="hover:bg-gray-50 transition-all">
                                    <td className="px-4 py-4 border-b">{user.name}</td>
                                    <td className="px-4 py-4 border-b">{user.birthdate}</td>
                                    <td className="px-4 py-4 border-b">{user.adhaar}</td>
                                    <td className="px-4 py-4 border-b">{user.mobile}</td>
                                    <td className="px-4 py-4 border-b">{user.age}</td>
                                    <td className="px-4 py-4 border-b">{user.actions}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="text-center py-4 text-gray-500">
                                    No users found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RetriveInformation;
