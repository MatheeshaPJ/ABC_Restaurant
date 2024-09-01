import React from 'react'

const Newsletter = () => {
    return (
        <div className='w-full py-16 text-white px-4 bg-black'>
            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
                <div className='lg:col-span-2 my-2'>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want to more about our services?</h1>
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
    )
}

export default Newsletter