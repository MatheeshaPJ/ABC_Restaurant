import React from 'react';
import burger from '../assets/burger.png';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div>
      <Navbar />
      
      <div className='w-full bg-gradient-to-r from-white via-[#f8f9fa] to-[#d19831] py-20 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 items-center'>
          <div className='flex flex-col justify-center'>
            <p className='text-[#d19831] font-bold uppercase'>Hungry Burger</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Just Order When You Feel Hungry!</h1>
            <p className='text-gray-700'>
              We’re here to satisfy your cravings with delicious meals. Place your order and enjoy our mouthwatering dishes, or reach out to us if you have any questions!
            </p>
            <button className='bg-black text-[#d19831] w-[200px] rounded-md font-medium my-6 py-3 hover:scale-105 transition-transform duration-300'>
              Order Now
            </button>
          </div>
          <img className='w-[400px] mx-auto my-4 hover:scale-105 transition-transform duration-300' src={burger} alt="Delicious burger" />
        </div>
      </div>

      <div className='w-full py-16 px-4 bg-black text-white'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-2 gap-8'>
          <div className='flex flex-col justify-center'>
            <h2 className='text-3xl font-bold mb-4'>Want to know more about our services?</h2>
            <p className='text-lg'>Go ahead & send us a message. We’re here to help with any inquiries or special requests you may have.</p>
          </div>
          <div>
            <form className='flex flex-col space-y-4'>
              <input 
                className='p-3 rounded-md text-black' 
                type="text" 
                placeholder='Enter Your Name' 
                required
              />
              <input 
                className='p-3 rounded-md text-black' 
                type="email" 
                placeholder='Enter Your Email' 
                required
              />
              <textarea 
                className='p-3 rounded-md text-black' 
                placeholder='Your Message' 
                rows="4" 
                required
              />
              <button 
                type='submit' 
                className='bg-[#d19831] text-black rounded-md font-medium py-3 hover:scale-105 transition-transform duration-300'
              >
                Send Message
              </button>
            </form>
            <p className='text-gray-400 mt-4'>
              We care about your satisfaction. Explore our <span className='text-[#d19831] cursor-pointer underline'>Services</span> for more details.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
