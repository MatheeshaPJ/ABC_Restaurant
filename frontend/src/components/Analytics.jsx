import React from 'react'
import burger from '../assets/burger.png'

const Analytics = () => {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <hr />
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                
                <div className='flex flex-col justify-center'>
                    <p className='text-[rgb(148,196,66)] font-bold'> HUNGRY BURGER💦</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Just Order When You Feel Hungry!</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam illo excepturi modi odio maxime repellat illum neque commodi totam ullam rem debitis esse accusantium, quaerat omnis eaque ea officiis vitae!</p>
                    <button className='bg-black text-[#d9b534] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 hover:scale-105 duration-300'>Order Now</button>
                </div>
                <img className='w-[500px] mx-auto my-4 hover:scale-105 duration-300' src={burger} alt="burger.png" />

            </div>
            <hr />
        </div>
    )
}

export default Analytics