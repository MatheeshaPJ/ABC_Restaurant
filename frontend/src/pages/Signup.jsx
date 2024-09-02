import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className='min-h-screen bg-gradient-to-b from-black via-[#d19831] to-white flex items-center justify-center py-6'>
      <div className='w-full lg:w-2/5 bg-white px-10 py-10 rounded-3xl shadow-lg border-2 border-gray-200'>
        <h1 className='text-5xl font-semibold text-center text-black'>Welcome</h1>
        <p className='font-medium text-lg text-gray-500 mt-4 text-center'>Please enter your details to sign up.</p>
        <div className='mt-8'>
          <div className='mb-4'>
            <label className='text-lg font-medium text-black'>First Name</label>
            <input 
              className='w-full border-2 border-gray-300 rounded-xl p-4 mt-1 bg-transparent text-black'
              name='firstName'
              placeholder='Enter your First Name'
             />
          </div>
          <div className='mb-4'>
            <label className='text-lg font-medium text-black'>Last Name</label>
            <input 
              className='w-full border-2 border-gray-300 rounded-xl p-4 mt-1 bg-transparent text-black'
              name='lastName'
              placeholder='Enter your Last Name'
             />
          </div>
          <div className='mb-4'>
            <label className='text-lg font-medium text-black'>Email</label>
            <input 
              className='w-full border-2 border-gray-300 rounded-xl p-4 mt-1 bg-transparent text-black'
              name='email'
              placeholder='Enter your Email'
             />
          </div>
          <div className='mb-4'>
            <label className='text-lg font-medium text-black'>Password</label>
            <input 
              className='w-full border-2 border-gray-300 rounded-xl p-4 mt-1 bg-transparent text-black'
              placeholder='Enter your Password'
              type='password'
             />
          </div>
          <div className='mt-8 flex justify-between items-center'>
            <div>
              <input type="checkbox" id="showPassword" />
              <label htmlFor="showPassword" className='ml-2 font-medium text-base text-black'>Show Password</label>
            </div>
          </div>
          <div className='mt-8 flex flex-col gap-y-4 justify-center items-center'>
            <Link className='bg-[#d19831] text-black text-center text-lg font-bold py-3 rounded-xl active:scale-[.98] transition-all hover:scale-[1.01] ease-in-out w-3/5' to='/signin'>Sign up</Link>
          </div>
          <div className='mt-8 flex justify-center items-center'>
            <p className='font-medium text-base text-black'>Already have an account?</p>
            <Link className='text-[#d19831] text-base font-medium ml-2' to='/signin'>Sign in</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
