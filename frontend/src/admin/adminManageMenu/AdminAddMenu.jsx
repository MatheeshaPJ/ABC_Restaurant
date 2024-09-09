import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const AdminAddMenu = () => {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    item: "",
    description: "",
    price: "",
    category_id: "",
    availability: "",
  });

  const [categories, setCategories] = useState([]);
  const [image, setImage] = useState(null);

  const { item, description, price, category_id, availability } = user;

  useEffect(() => {
    // Fetch all categories for the dropdown
    const fetchCategories = async () => {
      const result = await axios.get("http://localhost:8080/category/getallcategory");
      setCategories(result.data);
    };
    fetchCategories();
  }, []);

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    
    // Create form data to send including the image
    const formData = new FormData();
    formData.append('item', item);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('category', category_id);
    formData.append('availability', availability);
    if (image) {
      formData.append('image', image);
    }

    // Send form data with image
    await axios.post("http://localhost:8080/menu/create", formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    navigate("/admin/menu");
  };

  return (
    <div className="bg-white">
      <div className="container">
        <div className="flex justify-center">
          <div className="w-full md:w-1/2 lg:w-1/3 bg-white p-8 rounded-lg shadow-2xl my-6">
            <h2 className="text-center text-2xl font-bold mb-6">Add Menu Item</h2>

            <form onSubmit={onSubmit}>
              <div className="mb-4">
                <label htmlFor="item" className="block text-gray-700 font-medium mb-2">
                  Item Name
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter item name"
                  name="item"
                  value={item}
                  onChange={onInputChange}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="category_id" className="block text-gray-700 font-medium mb-2">
                  Category
                </label>
                <select
                  name="category_id"
                  className="border p-2 rounded"
                  value={category_id}
                  onChange={onInputChange}
                >
                  <option value="" disabled>Select category</option>
                  {categories.map((category) => (
                    <option key={category.categoryId} value={category.categoryId}>
                      {category.categoryName}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-4">
                <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
                  Description
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter description"
                  name="description"
                  value={description}
                  onChange={onInputChange}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="price" className="block text-gray-700 font-medium mb-2">
                  Price
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter price"
                  name="price"
                  value={price}
                  onChange={onInputChange}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="image" className="block text-gray-700 font-medium mb-2">
                  Image
                </label>
                <input
                  type="file"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  name="image"
                  onChange={onImageChange}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="availability" className="block text-gray-700 font-medium mb-2">
                  Availability
                </label>
                <select
                  name="availability"
                  className="border p-2 rounded"
                  value={availability}
                  onChange={onInputChange}
                >
                  <option value="" disabled>Select availability</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>

              <div className="flex justify-between">
                <button
                  type="submit"
                  className="outline outline-[#f09c20] text-[#f09c20] hover:bg-[#f09c20] hover:text-white hover:outline-none font-bold py-2 px-4 rounded-lg"
                >
                  Submit
                </button>
                <Link
                  type="button"
                  className="outline outline-red-600 text-red-700 hover:bg-red-700 hover:text-white hover:outline-none font-bold py-2 px-4 rounded-lg"
                  to='/admin/menu'
                >
                  Cancel
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAddMenu;
