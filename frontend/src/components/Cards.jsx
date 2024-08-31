import React from 'react'
import Burger from '../assets/burger.png'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 '>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Burger} alt="" />
                <h2 className='text-2xl font-bold text-center py-8'>Burger 1</h2>
                <p className='text-center text-4xl font-bold'>Rs.600</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>asdsdasdad</p>
                    <p className='py-2 border-b mx-8 '>asdsded eqf dasdad</p>
                    <p className='py-2 border-b mx-8 '>asds qe dasdad</p>
                </div>
                <button className='bg-[#00df9a] rounded-md font-medium w-[200px] mx-auto my-6 px-6 py-3 text-black'>Order</button>
            </div>
            <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300 '>
                <img className='w-20 mx-auto mt-[-3rem] bg-tranparent' src={Burger} alt="" />
                <h2 className='text-2xl font-bold text-center py-8'>Burger 2</h2>
                <p className='text-center text-4xl font-bold'>Rs.600</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>asdsdasdad</p>
                    <p className='py-2 border-b mx-8 '>asdsded eqf dasdad</p>
                    <p className='py-2 border-b mx-8 '>asds qe dasdad</p>
                </div>
                <button className='text-[#00df9a] rounded-md font-medium w-[200px] mx-auto my-6 px-6 py-3 bg-black'>Order</button>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 '>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Burger} alt="" />
                <h2 className='text-2xl font-bold text-center py-8'>Burger 3</h2>
                <p className='text-center text-4xl font-bold'>Rs.600</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>asdsdasdad</p>
                    <p className='py-2 border-b mx-8 '>asdsded eqf dasdad</p>
                    <p className='py-2 border-b mx-8 '>asds qe dasdad</p>
                </div>
                <button className='bg-[#00df9a] rounded-md font-medium w-[200px] mx-auto my-6 px-6 py-3 text-black'>Order</button>
            </div>
        </div>
    </div>
  )
}

export default Cards