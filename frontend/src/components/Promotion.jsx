import React from 'react';
import burger from '../assets/burger.png';

const Promotion = () => {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <hr />
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <div className='flex flex-col justify-center'>
                    <p className='text-[#d19831] font-bold'>HUNGRY Weekend 💦</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Satisfy Your Hunger with a Click!</h1>
                    <p>Don't wait, indulge in our delicious meals this weekend! We are just a click away from delivering your favorite dishes right to your doorstep.</p>
                    <button className='bg-black text-[#d19831] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 hover:scale-105 duration-300'>Order Now</button>
                </div>
                <img className='w-[500px] mx-auto my-4 hover:scale-105 duration-300' src={burger} alt="burger.png" />
            </div>
            <hr />
        </div>
    );
};

export default Promotion;
