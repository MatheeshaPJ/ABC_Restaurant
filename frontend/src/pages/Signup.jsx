import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {


  let navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    address: "",
    role: "",
  });

  const { email, firstName, lastName, password, address, role } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/user/register", user);
    navigate("/signin");
  };


  return (
    <div className='bg-white h-full '>
      <div className='flex w-full h-auto  justify-center items-center '>
        <div className='w-full lg:w-2/5 justify-center items-center bg-white px-10 py-10 mt-5 mb-5 rounded-3xl border-2 border-gray-200 shadow  '>
          <h1 className='text-5xl font-semibold text-center '>Register Here</h1>
          <p className='font-medium text-lg text-gray-500 mt-4 text-center '>Welcome back! Please Enter Your details.</p>
          <div className='mt-8'>
            <form onSubmit={(e) => onSubmit(e)} >
              <div>
                <label htmlFor="email" className='text-lg font-medium'>Email</label>
                <input
                  type='email'
                  className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                  placeholder='Enter your Email'
                  name='email'
                  value={email}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div>
                <label htmlFor="firstName" className='text-lg font-medium'>Firstname</label>
                <input
                  className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                  placeholder='Enter your firstname'
                  type='text'
                  name='firstName'
                  value={firstName}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div>
                <label className='text-lg font-medium'>Lastname</label>
                <input
                  className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                  placeholder='Enter your lastname'
                  type='text'
                  name='lastName'
                  value={lastName}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div>
                <label className='text-lg font-medium'>Password</label>
                <input
                  className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                  placeholder='Enter your Password'
                  type='text'
                  name='password'
                  value={password}
                  onChange={(e) => onInputChange(e)}
                />
              </div>


              <div>
                <label className='text-lg font-medium'>Adddress</label>
                <input
                  className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                  placeholder='Enter your address'
                  type='text'
                  value={address}
                  name='address'
                  onChange={(e) => onInputChange(e)}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="role" className="block text-gray-700 font-medium mb-2">
                  Role
                </label>
                <select
                  name="role"
                  className="border p-2 rounded"
                  value={role}
                  onChange={(e) => onInputChange(e)}
                >
                  <option value="" disabled>Select an option</option>
                  <option value="ROLE_CUSTOMER">Customer</option>
                </select>
              </div>

              <div className='mt-8 flex flex-col gap-y-4  '  >
                <button type="submit" className='bg-[#f09c20] text-white text-lg font-bold py-3 rounded-xl active:scale-[.98] transition-all hover:scale-[1.01] ease-in-out text-center ' >Sign-up</button>
                {/* <button className='flex items-center justify-center gap-2 active:scale-[.98] transition-all hover:scale-[1.01] ease-in-out'>
            Sign-in with Google</button> */}
              </div>
              <div className='mt-8 flex justify-center items-center'>
                <p className='font-medium text-base'>Already have an Account?</p>
                <Link className='text-blue-400 text-base font-medium ml-2' to='/signin' >Sign in</Link>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
