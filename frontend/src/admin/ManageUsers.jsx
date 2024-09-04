import React, { useState, useEffect } from 'react';
import AdminNavbar from './AdminNavbar';


const ManageUser = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [newUser, setNewUser] = useState({ name: '', email: '', role: 'Customer' });

  useEffect(() => {
    // Mock fetching data from API or backend service
    const fetchUsers = async () => {
      const response = await fetch('/api/users'); // Replace with actual API endpoint
      const data = await response.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleNewUserChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddUser = () => {
    // Logic to add new user to the database
    console.log('Adding user:', newUser);
    // After adding the user, clear the form
    setNewUser({ name: '', email: '', role: 'Customer' });
  };

  const handleUpdateUser = (userId) => {
    // Logic to update the selected user in the database
    console.log('Updating user:', userId, selectedUser);
    setSelectedUser(null);
  };

  const handleDeleteUser = (userId) => {
    // Logic to delete the user from the database
    console.log('Deleting user with ID:', userId);
  };

  return (
    <div className='bg-black text-white min-h-screen flex flex-col justify-between'>

<AdminNavbar/>
      <div className='flex-grow mt-16'>
        <div className='max-w-[1240px] mx-auto py-12'>
          <h1 className='text-4xl font-bold text-center mb-8 text-[#d4af37]'>User Management</h1>
          
          {/* User List */}
          <div className='overflow-x-auto'>
            <table className='min-w-full bg-[#1c1c1c] text-white'>
              <thead>
                <tr>
                  <th className='px-6 py-3 border-b-2 border-gray-600 text-left text-xs font-semibold uppercase tracking-wider'>Name</th>
                  <th className='px-6 py-3 border-b-2 border-gray-600 text-left text-xs font-semibold uppercase tracking-wider'>Email</th>
                  <th className='px-6 py-3 border-b-2 border-gray-600 text-left text-xs font-semibold uppercase tracking-wider'>Role</th>
                  <th className='px-6 py-3 border-b-2 border-gray-600 text-left text-xs font-semibold uppercase tracking-wider'>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className='hover:bg-[#333333]'>
                    <td className='px-6 py-4 border-b border-gray-600'>{user.name}</td>
                    <td className='px-6 py-4 border-b border-gray-600'>{user.email}</td>
                    <td className='px-6 py-4 border-b border-gray-600'>{user.role}</td>
                    <td className='px-6 py-4 border-b border-gray-600'>
                      <button
                        className='bg-[#d4af37] text-black px-4 py-2 mr-2 rounded-md hover:scale-105 duration-300'
                        onClick={() => setSelectedUser(user)}
                      >
                        Edit
                      </button>
                      <button
                        className='bg-red-600 text-white px-4 py-2 rounded-md hover:scale-105 duration-300'
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

          {/* Edit User */}
          {selectedUser && (
            <div className='mt-8'>
              <h2 className='text-2xl font-bold text-center mb-4 text-[#d4af37]'>Edit User</h2>
              <div className='max-w-[600px] mx-auto bg-[#262626] p-6 rounded-lg'>
                <div className='mb-4'>
                  <label className='block text-[#d4af37] text-sm font-bold mb-2' htmlFor='name'>
                    Name
                  </label>
                  <input
                    className='w-full p-2 rounded-md bg-black text-white'
                    id='name'
                    name='name'
                    type='text'
                    value={selectedUser.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className='mb-4'>
                  <label className='block text-[#d4af37] text-sm font-bold mb-2' htmlFor='email'>
                    Email
                  </label>
                  <input
                    className='w-full p-2 rounded-md bg-black text-white'
                    id='email'
                    name='email'
                    type='email'
                    value={selectedUser.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className='mb-4'>
                  <label className='block text-[#d4af37] text-sm font-bold mb-2' htmlFor='role'>
                    Role
                  </label>
                  <select
                    className='w-full p-2 rounded-md bg-black text-white'
                    id='role'
                    name='role'
                    value={selectedUser.role}
                    onChange={handleInputChange}
                  >
                    <option value='Customer'>Customer</option>
                    <option value='Staff'>Staff</option>
                    <option value='Admin'>Admin</option>
                  </select>
                </div>
                <div className='flex justify-center'>
                  <button
                    className='bg-[#d4af37] text-black px-4 py-2 rounded-md hover:scale-105 duration-300'
                    onClick={() => handleUpdateUser(selectedUser.id)}
                  >
                    Update User
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Add New User */}
          <div className='mt-8'>
            <h2 className='text-2xl font-bold text-center mb-4 text-[#d4af37]'>Add New User</h2>
            <div className='max-w-[600px] mx-auto bg-[#262626] p-6 rounded-lg'>
              <div className='mb-4'>
                <label className='block text-[#d4af37] text-sm font-bold mb-2' htmlFor='newName'>
                  Name
                </label>
                <input
                  className='w-full p-2 rounded-md bg-black text-white'
                  id='newName'
                  name='name'
                  type='text'
                  value={newUser.name}
                  onChange={handleNewUserChange}
                />
              </div>
              <div className='mb-4'>
                <label className='block text-[#d4af37] text-sm font-bold mb-2' htmlFor='newEmail'>
                  Email
                </label>
                <input
                  className='w-full p-2 rounded-md bg-black text-white'
                  id='newEmail'
                  name='email'
                  type='email'
                  value={newUser.email}
                  onChange={handleNewUserChange}
                />
              </div>
              <div className='mb-4'>
                <label className='block text-[#d4af37] text-sm font-bold mb-2' htmlFor='newRole'>
                  Role
                </label>
                <select
                  className='w-full p-2 rounded-md bg-black text-white'
                  id='newRole'
                  name='role'
                  value={newUser.role}
                  onChange={handleNewUserChange}
                >
                  <option value='Customer'>Customer</option>
                  <option value='Staff'>Staff</option>
                  <option value='Admin'>Admin</option>
                </select>
              </div>
              <div className='flex justify-center'>
                <button
                  className='bg-[#d4af37] text-black px-4 py-2 rounded-md hover:scale-105 duration-300'
                  onClick={handleAddUser}
                >
                  Add User
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ManageUser;
