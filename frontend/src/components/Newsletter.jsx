import React from 'react';

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white px-4 bg-black'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4'>
        {/* Header section */}
        <div className='lg:col-span-2 my-2'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            Want to Stay Updated with Our Latest Offers?
          </h1>
          <p className='text-gray-300'>
            Subscribe to our newsletter to never miss an update.
          </p>
        </div>

        {/* Input section */}
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input
              className='p-3 flex w-full rounded-md text-black'
              type="email"
              placeholder='Enter your email address'
            />
            <button className='bg-[#d19831] rounded-md text-black font-medium w-[200px] ml-4 my-4 sm:my-0 py-3 hover:scale-105 duration-300'>
              Subscribe
            </button>
          </div>
          <p className='text-gray-400 pt-2 text-sm'>
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
