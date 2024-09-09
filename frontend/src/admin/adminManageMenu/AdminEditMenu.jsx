import React , {useState, useEffect} from 'react'
import axios from 'axios';
import {useNavigate, useParams,Link } from "react-router-dom";

const AdminEditUsers = () => {

    let navigate = useNavigate();

    const { id } = useParams();

    const [user, setUser] = useState({
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      address: "",
      role: "",
    });
  
    const { email, firstName, lastName,password,address, role   } = user;  
  
    const onInputChange = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        loadUser();
      }, []);
  
    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/user/${id}`, user);
        navigate("/admin/users");
      };

      const loadUser = async () => {
        const result = await axios.get(`http://localhost:8080/user/${id}`);
        setUser(result.data);
      };

  return (
    <div className="bg-white h-full flex items-center  justify-center">
  <div className="container">
    <div className="flex justify-center">
      <div className="w-full md:w-1/2 lg:w-1/3 bg-white p-8 rounded-lg shadow-lg my-6 ">
        <h2 className="text-center text-2xl font-bold mb-6">Edit User</h2>

        <form onSubmit={(e) => onSubmit(e)} >
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your e-mail address"
              name="email"  
              value={email}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-medium mb-2">
              Firstname
            </label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your firstname"
              name="firstName"
              value={firstName}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Lastname
            </label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your lastname"
              name="lastName"
              value={lastName}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
              name="password"
              value={password}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="address" className="block text-gray-700 font-medium mb-2">
              Address
            </label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your address"
              name="address"
              value={address}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <div className="mb-4">
          <label htmlFor="address" className="block text-gray-700 font-medium mb-2">
              Role
            </label>
          <select 
                name="role"
                className="border p-2 rounded"
                value={role}
                onChange={(e) => onInputChange(e)}
              >
               <option  value="ROLE_CUSTOMER">Customer</option>
                <option value="ROLE_STAFF">Staff</option>
                <option value="ROLE_ADMIN">Admin</option>
              </select>
          </div>

          <div className="flex justify-between">
            <button type="submit" className="outline outline-[#f09c20]  text-[#f09c20]  hover:bg-[#f09c20] hover:text-white hover:outline-none font-bold py-2 px-4 rounded-lg">
              Update
            </button>
            <Link type="button" className="outline outline-red-600 text-red-700 hover:bg-red-700 hover:text-white hover:outline-none font-bold py-2 px-4 rounded-lg" to='/admin/users' >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

  )
}

export default AdminEditUsers
