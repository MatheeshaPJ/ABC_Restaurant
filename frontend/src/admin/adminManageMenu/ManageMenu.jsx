import React, { useEffect, useState } from 'react'
// Axios for getting user information to this page
import axios from 'axios';
import { Link } from 'react-router-dom';
import AdminNavbar from '../AdminNavbar';

const ManageMenu = () => {

   // State to store the list of menu items
   const [menus, setMenus] = useState([]);

   useEffect(() => {
     loadMenus();
   }, []);
 
   const loadMenus = async () => {
     try {
       const result = await axios.get('http://localhost:8080/menu/getallmenu');
       setMenus(result.data);
     } catch (error) {
       console.error('Error fetching menus:', error);
     }
   };
 
   const deleteMenu = async (id) => {
     if (window.confirm('Are you sure you want to delete this menu item?')) {
       try {
         await axios.delete(`http://localhost:8080/menu/${id}`);
         loadMenus();
       } catch (error) {
         console.error('Error deleting menu:', error);
       }
     }
   };
 

   return (
    
    <div className="container mx-auto p-4 bg-white h-screen">
      <AdminNavbar/>
      <div className='mt-20' >
        <h1 className='text-center text-2xl font-bold text-[#f09c20]'>MENU MANAGEMENT</h1>
      </div>
      <div className='flex justify-between'>
        <Link className='outline outline-[#f09c20]  text-[#f09c20]  hover:bg-[#f09c20] hover:text-white hover:outline-none py-2 px-4 rounded mr-2  ' to="/admin/addmenu"  >Add New Food Item</Link>
        <Link className='outline outline-[#f09c20]  text-[#f09c20]  hover:bg-[#f09c20] hover:text-white hover:outline-none py-2 px-4 rounded mr-2  ' to="/admin/category"  >Manage Food Categories</Link>
      </div>
      <div className="overflow-x-auto shadow-xl mt-5">
        <table className="min-w-full bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
          <thead className="bg-gray-200">
          <tr>
              <th className="px-4 py-2 text-center text-sm text-gray-700 font-bold">ID</th>
              <th className="px-4 py-2 text-center text-sm text-gray-700 font-bold">Item Name</th>
              <th className="px-4 py-2 text-center text-sm text-gray-700 font-bold">Category</th>
              <th className="px-4 py-2 text-center text-sm text-gray-700 font-bold">Description</th>
              <th className="px-4 py-2 text-center text-sm text-gray-700 font-bold">Price</th>
              <th className="px-4 py-2 text-center text-sm text-gray-700 font-bold">Image</th>
              <th className="px-4 py-2 text-center text-sm text-gray-700 font-bold">Availability</th>
              <th className="px-4 py-2 text-center text-sm text-gray-700 font-bold">Actions</th>
            </tr>

          </thead>
          <tbody>
            {menus.map((menu) => (
              <tr key={menu.menuId} className="hover:bg-gray-100 transition duration-300 ease-in-out">
                <td className="px-4 py-2 text-gray-700 text-center font-bold">{menu.menuId}</td>
                <td className="px-4 py-2 text-gray-700 text-center">{menu.item}</td>
                <td className="px-4 py-2 text-gray-700 text-center">{menu.category.categoryName}</td>
                <td className="px-4 py-2 text-gray-700 text-center">{menu.description}</td>
                <td className="px-4 py-2 text-gray-700 text-center">LKR {menu.price.toFixed(2)}</td>
                <td className="px-4 py-2 text-center">
                  {menu.image ? (
                    <img
                      src={`http://localhost:8080/menu/image/${menu.menuId}`}
                      alt={menu.item}
                      className="w-16 h-16 object-cover mx-auto"
                    />
                  ) : (
                    'No Image'
                  )}
                </td>
                <td className="px-4 py-2 text-gray-700 text-center">
                  {menu.availability ? "Yes" : "No"}
                </td>
                <td className="px-4 py-2 text-center bg-gray-50">
                  <Link
                    className="outline outline-green-600 text-green-700 hover:bg-green-700 hover:text-white hover:outline-none py-1 px-3 rounded mr-2 text-xs"
                    to={`/admin/editmenu/${menu.menuId}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="outline outline-red-600 text-red-700 hover:bg-red-700 hover:text-white hover:outline-none py-1 px-3 rounded text-xs"
                    onClick={() => deleteMenu(menu.menuId)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

</div> )
};

export default ManageMenu;
