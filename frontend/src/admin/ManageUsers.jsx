import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavbar from './AdminNavbar';

// Extracted Modal component for better code organization
const UserModal = ({ isEdit, user, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    address: '',
    role: 'Customer',
  });

  // Populate form data for editing
  useEffect(() => {
    if (isEdit && user) {
      setFormData(user);
    }
  }, [isEdit, user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (!formData.email || !formData.firstName || !formData.lastName) {
      alert("Please fill out all fields!");
      return;
    }
    onSubmit(formData); // Pass form data back to parent
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-gray-400 rounded-lg shadow-lg p-8 w-1/2">
        <h2 className="text-3xl mb-4 text-center text-black font-semibold">
          {isEdit ? 'Edit User' : 'Add New User'}
        </h2>
        <div className="text-black grid grid-cols-2 gap-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-2 border rounded-md"
            value={formData.email}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="w-full p-2 border rounded-md"
            value={formData.firstName}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="w-full p-2 border rounded-md"
            value={formData.lastName}
            onChange={handleInputChange}
          />
          {!isEdit && (
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full p-2 border rounded-md"
              value={formData.password}
              onChange={handleInputChange}
            />
          )}
          <input
            type="text"
            name="address"
            placeholder="Address"
            className="w-full p-2 border rounded-md"
            value={formData.address}
            onChange={handleInputChange}
          />
          <select
            name="role"
            className="w-full p-2 border rounded-md"
            value={formData.role}
            onChange={handleInputChange}
          >
            <option value="Customer">Customer</option>
            <option value="Staff">Staff</option>
            <option value="Admin">Admin</option>
          </select>
        </div>
        <div className="flex justify-end mt-4">
          <button
            className="bg-[#d4af37] text-black px-4 py-2 rounded-md mr-2 hover:scale-105 duration-300"
            onClick={handleSubmit}
          >
            {isEdit ? 'Update' : 'Add'}
          </button>
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded-md hover:scale-105 duration-300"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

const ManageUser = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8080/user/getallusers');
        setUsers(response.data);
      } catch (error) {
        setError('Error fetching users');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleAddUser = async (newUser) => {
    try {
      await axios.post('http://localhost:8080/user/register', newUser);
      setUsers((prevUsers) => [...prevUsers, newUser]);
      setShowModal(false);
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  const handleUpdateUser = async (updatedUser) => {
    try {
      await axios.put(`http://localhost:8080/user/${updatedUser.id}`, updatedUser);
      setUsers((prevUsers) =>
        prevUsers.map((user) => (user.id === updatedUser.id ? updatedUser : user))
      );
      setIsEditing(false);
      setSelectedUser(null);
      setShowModal(false);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:8080/user/${userId}`);
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleOpenModal = (user = null) => {
    setSelectedUser(user);
    setIsEditing(!!user);
    setShowModal(true);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-between">
      <AdminNavbar />
      <div className="flex-grow mt-16">
        <div className="max-w-[1240px] mx-auto py-12">
          <h1 className="text-4xl font-bold text-center mb-8 text-[#d4af37]">User Management</h1>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-[#1c1c1c] text-white">
              <thead>
                <tr>
                  <th className="px-6 py-3 border-b-2 border-gray-600">UserID</th>
                  <th className="px-6 py-3 border-b-2 border-gray-600">Email</th>
                  <th className="px-6 py-3 border-b-2 border-gray-600">First Name</th>
                  <th className="px-6 py-3 border-b-2 border-gray-600">Last Name</th>
                  <th className="px-6 py-3 border-b-2 border-gray-600">Role</th>
                  <th className="px-6 py-3 border-b-2 border-gray-600">Address</th>
                  <th className="px-6 py-3 border-b-2 border-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="hover:bg-[#333333]">
                    <td className="px-6 py-4 border-b border-gray-600">{user.id}</td>
                    <td className="px-6 py-4 border-b border-gray-600">{user.email}</td>
                    <td className="px-6 py-4 border-b border-gray-600">{user.firstName}</td>
                    <td className="px-6 py-4 border-b border-gray-600">{user.lastName}</td>
                    <td className="px-6 py-4 border-b border-gray-600">{user.role}</td>
                    <td className="px-6 py-4 border-b border-gray-600">{user.address}</td>
                    <td className="px-6 py-4 border-b border-gray-600">
                      <button
                        className="bg-[#d4af37] text-black px-4 py-2 rounded-md mr-2 hover:scale-105 duration-300"
                        onClick={() => handleOpenModal(user)}
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-500 text-white px-4 py-2 rounded-md hover:scale-105 duration-300"
                        onClick={() => handleDeleteUser(user.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-end mt-4">
            <button
              className="bg-[#d4af37] text-black px-4 py-2 rounded-md hover:scale-105 duration-300"
              onClick={() => handleOpenModal()}
            >
              Add New User
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <UserModal
          isEdit={isEditing}
          user={selectedUser}
          onClose={() => setShowModal(false)}
          onSubmit={isEditing ? handleUpdateUser : handleAddUser}
        />
      )}
    </div>
  );
};

export default ManageUser;
