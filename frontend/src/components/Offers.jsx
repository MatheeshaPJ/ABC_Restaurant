import React from 'react';
import Offer1 from '../assets/Offer1.png';
import Offer2 from '../assets/Offer2.png';
import Offer3 from '../assets/Offer3.png';

const Offers = () => {
    return (
        <div className='w-full py-16 px-4 bg-white'>
            <div className='text-center'>
                <p className='text-[#000000] font-bold py-3 text-3xl pb-2'>Special Offers</p>
            </div>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 pt-12'>
                {[Offer1, Offer2, Offer3].map((offer, index) => (
                    <div key={index} className='w-full h-200 shadow-xl flex flex-col p-4 my-6 rounded-lg hover:scale-105 duration-300 border border-black'>
                        <img className='w-full mx-auto mt-[-3rem] bg-white rounded-md' src={offer} alt={`Offer${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Offers;
