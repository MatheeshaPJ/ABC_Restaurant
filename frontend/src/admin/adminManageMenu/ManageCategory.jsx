import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AdminNavbar from '../AdminNavbar';

const ManageCategory = () => {
  const [categories, setCategories] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState('');
  const [currentCategory, setCurrentCategory] = useState({ categoryId: null, categoryName: '' });

  // Load categories when component is mounted
  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    try {
      const result = await axios.get('http://localhost:8080/category/getallcategory');
      setCategories(result.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const addCategory = async () => {
    if (!newCategoryName.trim()) return alert('Category name cannot be empty.');
    try {
      await axios.post('http://localhost:8080/category/create', { categoryName: newCategoryName });
      loadCategories();
      setShowAddModal(false);
      setNewCategoryName('');
    } catch (error) {
      console.error('Error adding category:', error);
    }
  };

  const editCategory = async () => {
    if (!currentCategory.categoryName.trim()) return alert('Category name cannot be empty.');
    try {
      await axios.put(`http://localhost:8080/category/update/${currentCategory.categoryId}`, {
        categoryName: currentCategory.categoryName,
      });
      loadCategories();
      setShowEditModal(false);
    } catch (error) {
      console.error('Error updating category:', error);
    }
  };

  const deleteCategory = async (id) => {
    if (window.confirm('Are you sure you want to delete this category?')) {
      try {
        await axios.delete(`http://localhost:8080/category/delete/${id}`);
        loadCategories();
      } catch (error) {
        console.error('Error deleting category:', error);
      }
    }
  };

  return (
    <div className="container mx-auto p-4 bg-white h-screen">
      <AdminNavbar />

      <div className="mt-20">
        <h1 className="text-center text-2xl font-bold text-[#f09c20]">CATEGORY MANAGEMENT</h1>
      </div>

      <div className="flex justify-between mt-5">
      <Link className='outline outline-[#f09c20]  text-[#f09c20]  hover:bg-[#f09c20] hover:text-white hover:outline-none py-2 px-4 rounded mr-2  ' to="/admin/menu"  >Menu Management</Link>
        <button
          onClick={() => setShowAddModal(true)}
          className="outline outline-[#f09c20] text-[#f09c20] hover:bg-[#f09c20] hover:text-white hover:outline-none py-2 px-4 rounded mr-2"
        >
          Add New Category
        </button>
      </div>

      <div className="overflow-x-auto shadow-xl mt-5">
        <table className="min-w-full bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 text-center text-sm text-gray-700 font-bold">ID</th>
              <th className="px-4 py-2 text-center text-sm text-gray-700 font-bold">Category Name</th>
              <th className="px-4 py-2 text-center text-sm text-gray-700 font-bold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category.categoryId} className="hover:bg-gray-100 transition duration-300 ease-in-out">
                <td className="px-4 py-2 text-gray-700 text-center font-bold">{category.categoryId}</td>
                <td className="px-4 py-2 text-gray-700 text-center">{category.categoryName}</td>
                <td className="px-4 py-2 text-center bg-gray-50">
                  <button
                    onClick={() => {
                      setCurrentCategory(category);
                      setShowEditModal(true);
                    }}
                    className="outline outline-green-600 text-green-700 hover:bg-green-700 hover:text-white hover:outline-none py-1 px-3 rounded mr-2 text-xs"
                  >
                    Edit
                  </button>
                  <button
                    className="outline outline-red-600 text-red-700 hover:bg-red-700 hover:text-white hover:outline-none py-1 px-3 rounded text-xs"
                    onClick={() => deleteCategory(category.categoryId)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Category Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-xl font-bold mb-4 text-[#f09c20]">Add New Category</h2>
            <input
              type="text"
              className="border w-full p-2 mb-4"
              placeholder="Enter category name"
              value={newCategoryName}
              onChange={(e) => setNewCategoryName(e.target.value)}
            />
            <div className="flex justify-end">
              <button
                className="outline outline-green-600 text-green-700 hover:bg-green-700 hover:text-white hover:outline-none py-2 px-4 rounded mr-2"
                onClick={addCategory}
              >
                Save
              </button>
              <button
                className="outline outline-gray-600 text-gray-700 hover:bg-gray-700 hover:text-white hover:outline-none py-2 px-4 rounded"
                onClick={() => setShowAddModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Category Modal */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-xl font-bold mb-4 text-[#f09c20]">Edit Category</h2>
            <input
              type="text"
              className="border w-full p-2 mb-4"
              value={currentCategory.categoryName}
              onChange={(e) => setCurrentCategory({ ...currentCategory, categoryName: e.target.value })}
            />
            <div className="flex justify-end">
              <button
                className="outline outline-green-600 text-green-700 hover:bg-green-700 hover:text-white hover:outline-none py-2 px-4 rounded mr-2"
                onClick={editCategory}
              >
                Update
              </button>
              <button
                className="outline outline-gray-600 text-gray-700 hover:bg-gray-700 hover:text-white hover:outline-none py-2 px-4 rounded"
                onClick={() => setShowEditModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageCategory;
