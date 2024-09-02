import React from 'react';
import { Link } from 'react-router-dom';

const Signin = () => {
  return (
    <div className='h-screen bg-gradient-to-b from-black via-[#d19831] to-white flex items-center justify-center'>
      <div className='w-full lg:w-2/5 bg-white px-10 py-10 rounded-3xl shadow-lg border-2 border-gray-200'>
        <h1 className='text-5xl font-semibold text-center text-black'>Welcome Back</h1>
        <p className='font-medium text-lg text-gray-500 mt-4 text-center'>Please enter your sign-in details.</p>
        <div className='mt-8'>
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
            <button className='font-medium text-base text-[#d19831]'>Forgot password</button>
          </div>
          <div className='mt-8 flex flex-col gap-y-4'>
            <button className='bg-[#d19831] text-black text-lg font-bold py-3 rounded-xl active:scale-[.98] transition-all hover:scale-[1.01] ease-in-out'>Sign in</button>
          </div>
          <div className='mt-12 flex justify-center items-center'>
            <p className='font-medium text-base text-center text-black'>Don't have an account?</p>
            <Link className='text-[#d19831] text-base font-medium ml-2' to='/signup'>Sign up</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
