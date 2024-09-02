import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className=' '>
      <div className='flex w-full h-auto my-3.5 justify-center items-center'>
      <div className='w-full lg:w-2/5 justify-center items-center bg-white px-10 py-10 rounded-3xl border-2 border-gray-200'>
        <h1 className='text-5xl font-semibold text-center'>Welcome</h1>
        <p className='font-medium text-lg text-gray-500 mt-4 text-center'>Please Enter Your details to Suign-up.</p>
        <div className='mt-8'>
          <div>
            <label className='text-lg font-medium'>Email</label>
            <input 
              className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
              name='email'
              placeholder='Enter your Email'
             />
          </div>
          <div>
            <label className='text-lg font-medium'>Email</label>
            <input 
              className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
              name='email'
              placeholder='Enter your Email'
             />
          </div>
          <div>
            <label className='text-lg font-medium'>Email</label>
            <input 
              className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
              name='email'
              placeholder='Enter your Email'
             />
          </div>
          <div>
            <label className='text-lg font-medium'>Email</label>
            <input 
              className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
              name='email'
              placeholder='Enter your Email'
             />
          </div>
          <div>
            <label className='text-lg font-medium'>Password</label>
            <input 
              className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
              placeholder='Enter your Password'
              type='password'
             />
          </div>
          <div className='mt-8 flex justify-between items-center'>
            <div>
              <input type="checkbox" name="" id="showPassword" />
              <label for="showPassword" className='ml-2 font-medium text-base'>Show Password</label>
            </div>
            
          </div>
          <div className='mt-8 flex flex-col gap-y-4 justify-center items-center'>
            <Link className='bg-blue-600 text-white text-center text-lg font-bold py-3 rounded-xl active:scale-[.98] transition-all hover:scale-[1.01] ease-in-out w-3/5' to='/signin'>Sign-up</Link>
            {/* <button className='flex items-center justify-center gap-2 active:scale-[.98] transition-all hover:scale-[1.01] ease-in-out'>
              Sign-in with Google</button> */}
          </div>
          <div className='mt-8 flex justify-center items-center'>
            <p className='font-medium text-base'>Already have an account?</p>
            <Link className='text-blue-400 text-base font-medium ml-2'to='/signin' >Sign in</Link>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Signup