import React from 'react'
import burger from '../assets/burger.png'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      
      <div className='w-full bg-white py-20 px-4'>
            <hr />
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                
                <div className='flex flex-col justify-center'>
                    <p className='text-[rgb(148,196,66)] font-bold'> HUNGRY BURGER💦</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Just Order When You Feel Hungry!</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam illo excepturi modi odio maxime repellat illum neque commodi totam ullam rem debitis esse accusantium, quaerat omnis eaque ea officiis vitae!</p>
                    <button className='bg-black text-[#d19831] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 hover:scale-105 duration-300'>Order Now</button>
                </div>
                <img className='w-[500px] mx-auto my-4 hover:scale-105 duration-300' src={burger} alt="burger.png" />
                <hr />
            </div>

        </div>

      <div className='w-full py-16 text-white px-4 bg-black'>
            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
                <div className='lg:col-span-2 my-2'>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want to know more about our services?</h1>
                    <p>Go ahead & Send us a message.</p>
                </div>
                <div className='my-4'>
                    <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                        <input className='p-3 flrex w-full rounded-md text-black' type="email" placeholder='Enter Email' />
                        <button className='bg-[#00df9a] rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3 text-black'>Send</button>
                    </div>
                    <p>We care about your satisfaction. Reach <span className='text-[#00df9a] cursor-pointer'>Our Services</span></p>
                </div>
            </div>
        </div>


    <Footer />
    </div>
  )
}

export default Contact