import React, { useState, useEffect } from 'react';


const ManageContent = () => {
  const [content, setContent] = useState({
    menu: '',
    offers: '',
    gallery: ''
  });

  useEffect(() => {
    // Mock fetching data from API or backend service
    const fetchContent = async () => {
      const response = await fetch('/api/content'); // Replace with actual API endpoint
      const data = await response.json();
      setContent(data);
    };

    fetchContent();
  }, []);

  const handleContentChange = (e) => {
    setContent({ ...content, [e.target.name]: e.target.value });
  };

  const handleSaveChanges = async () => {
    // Mock saving data to API or backend service
    const response = await fetch('/api/content', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(content)
    });

    if (response.ok) {
      alert('Content updated successfully!');
    } else {
      alert('Failed to update content.');
    }
  };

  return (
    <div className='bg-black text-white min-h-screen flex flex-col'>


      <div className='flex-grow'>
        <div className='max-w-[1240px] mx-auto py-12'>
          <h1 className='text-4xl font-bold text-center mb-8 text-[#d4af37]'>Content Management</h1>

          <div className='bg-[#262626] p-6 rounded-lg'>
            <h2 className='text-2xl font-bold mb-4 text-[#d4af37]'>Manage Menu Content</h2>
            <textarea
              className='w-full h-40 p-4 rounded-md bg-[#1c1c1c] text-white border border-[#d4af37]'
              name='menu'
              value={content.menu}
              onChange={handleContentChange}
              placeholder='Update menu content here...'
            />

            <h2 className='text-2xl font-bold mt-8 mb-4 text-[#d4af37]'>Manage Offers</h2>
            <textarea
              className='w-full h-40 p-4 rounded-md bg-[#1c1c1c] text-white border border-[#d4af37]'
              name='offers'
              value={content.offers}
              onChange={handleContentChange}
              placeholder='Update offers content here...'
            />

            <h2 className='text-2xl font-bold mt-8 mb-4 text-[#d4af37]'>Manage Gallery</h2>
            <textarea
              className='w-full h-40 p-4 rounded-md bg-[#1c1c1c] text-white border border-[#d4af37]'
              name='gallery'
              value={content.gallery}
              onChange={handleContentChange}
              placeholder='Update gallery content here...'
            />

            <div className='flex justify-center mt-8'>
              <button
                className='bg-[#d4af37] text-black px-6 py-3 rounded-md hover:scale-105 duration-300'
                onClick={handleSaveChanges}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ManageContent;
