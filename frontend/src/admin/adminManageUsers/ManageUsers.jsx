import React, { useEffect, useState } from 'react'
// Axios for getting user information to this page
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import AdminNavbar from '../AdminNavbar';

const ManageUsers = () => {

   // State to store the list of users
   const [users, setUsers] = useState([]);

   const { id } = useParams();


   // Load users from API
   useEffect(() => {
     loadUsers();
   }, []);

   const loadUsers = async () => {
     const result = await axios.get("http://localhost:8080/user/getallusers");
     setUsers(result.data);
   };

   const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/user/${id}`);
    loadUsers();
  };

   return (
    
    <div className="container mx-auto p-4 bg-white h-screen">
      <AdminNavbar/>
      <div className='mt-20' >
        <h1 className='text-center text-2xl font-bold text-[#f09c20]'>USER MANAGEMENT</h1>
      </div>
      <div className=''>
        <Link className='outline outline-[#f09c20]  text-[#f09c20]  hover:bg-[#f09c20] hover:text-white hover:outline-none py-2 px-4 rounded mr-2  ' to="/admin/adduser"  >Add NewUser</Link>  
      </div>
      <div className="overflow-x-auto shadow-xl mt-5">
        <table className="min-w-full bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-6 py-3 text-center text-sm text-gray-700 font-bold">ID</th>
              <th className="px-6 py-3 text-center text-sm text-gray-700 font-bold">Email</th>
              <th className="px-6 py-3 text-center text-sm text-gray-700 font-bold">Firstname</th>
              <th className="px-6 py-3 text-center text-sm text-gray-700 font-bold">Lastname</th>
              <th className="px-6 py-3 text-center text-sm text-gray-700 font-bold">Password</th>
              <th className="px-6 py-3 text-center text-sm text-gray-700 font-bold">Role</th> 
              <th className="px-6 py-3 text-center text-sm text-gray-700 font-bold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user, index) => (
                <tr key={index} className="hover:bg-gray-100 transition duration-300 ease-in-out">
                  <td className="px-6 py-4 text-gray-700 text-center font-bold ">{user.id}</td>
                  <td className="px-6 py-4 text-gray-700 text-center">{user.email}</td>
                  <td className="px-6 py-4 text-gray-700 text-center">{user.firstName}</td>
                  <td className="px-6 py-4 text-gray-700 text-center">{user.lastName}</td>
                  <td className="px-6 py-4 text-gray-700 text-center">{user.password}</td>
                  <td className="px-6 py-4 text-gray-700 text-center">{user.role}</td>
                  <td className="px-6 py-4 text-gray-700 text-center bg-gray-50 ">
                   
                    <Link className="outline outline-green-600  text-green-700  hover:bg-green-700 hover:text-white hover:outline-none py-2 px-4 rounded mr-2" to={`/admin/edituser/${user.id}`} >   
                      Edit
                    </Link>
                    <button className="outline outline-red-600 text-red-700 hover:bg-red-700 hover:text-white hover:outline-none py-2 px-4 rounded" onClick={() => deleteUser(user.id)} >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>

</div> )
};

export default ManageUsers;
