import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

const AdminEditMenu = () => {
  let navigate = useNavigate();
  let { id } = useParams(); // Get the menu item ID from URL params

  const [menu, setMenu] = useState({
    item: "",
    description: "",
    price: "",
    category: "",  // Ensure this matches the category ID
    availability: "",
  });

  const [categories, setCategories] = useState([]);
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(""); // State for image preview
  const [existingImage, setExistingImage] = useState(""); // State to store the current image from the backend

  const { item, description, price, category, availability } = menu;

  useEffect(() => {
    // Fetch all categories for the dropdown
    const fetchCategories = async () => {
      const result = await axios.get("http://localhost:8080/category/getallcategory");
      setCategories(result.data);
    };

    // Fetch the menu item details by its ID
    const fetchMenuItem = async () => {
      try {
        const result = await axios.get(`http://localhost:8080/menu/${id}`);
        setMenu({
          ...result.data,
          category: result.data.category.categoryId // Assuming the API returns category as an object with categoryId
        });

        // Set the existing image if it exists
        if (result.data.menuId) {
          setExistingImage(`http://localhost:8080/menu/image/${result.data.menuId}`);
        }
      } catch (error) {
        console.error("Failed to load menu item", error);
      }
    };

    fetchCategories();
    fetchMenuItem();
  }, [id]);

  const onInputChange = (e) => {
    setMenu({ ...menu, [e.target.name]: e.target.value });
  };

  const onImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      setImagePreview(URL.createObjectURL(file)); // Show preview of new image
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    // Create form data to send including the image
    const formData = new FormData();
    formData.append('item', item);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('category', category);  // Ensure the category is submitted, even if not changed
    formData.append('availability', availability);
    if (image) {
      formData.append('image', image);  // Only append the image if a new one is uploaded
    }

    // Send updated form data
    await axios.put(`http://localhost:8080/menu/update/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    navigate("/admin/menu");
  };

  return (
    <div className="bg-white h-full flex items-center justify-center">
      <div className="container">
        <div className="flex justify-center">
          <div className="w-full md:w-1/2 lg:w-1/3 bg-white p-8 rounded-lg shadow-lg my-6">
            <h2 className="text-center text-2xl font-bold mb-6">Edit Menu Item</h2>

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

              {/* Category Dropdown with Default Value */}
              <div className="mb-4">
                <label htmlFor="category" className="block text-gray-700 font-medium mb-2">
                  Category
                </label>
                <select
                  name="category"
                  className="border p-2 rounded"
                  value={category || ""}  // Display the selected category or an empty string by default
                  onChange={onInputChange}  // Handle category change
                >
                  <option value="" disabled>Select category</option>
                  {categories.map((cat) => (
                    <option key={cat.categoryId} value={cat.categoryId}>
                      {cat.categoryName}
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

              {/* Image Section */}
              <div className="mb-4">
                <label htmlFor="image" className="block text-gray-700 font-medium mb-2">
                  Image
                </label>
                {imagePreview ? (
                  // Preview of the new uploaded image
                  <div className="mb-2">
                    <img src={imagePreview} alt="New Preview" className="w-full h-32 object-cover" />
                  </div>
                ) : existingImage ? (
                  // Display existing image if no new image is uploaded
                  <div className="mb-2 flex justify-center">
                    <img
                      src={existingImage}
                      alt="Current"
                      style={{
                        maxWidth: '100%',
                        height: 'auto',
                        objectFit: 'contain',
                        // Optional: If you want to ensure it doesn't exceed a certain size
                        maxHeight: '400px' // Adjust this value as needed
                      }}
                    />
                  </div>


                ) : (
                  <p>No image available</p>
                )}
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
                  Save Changes
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

export default AdminEditMenu;
