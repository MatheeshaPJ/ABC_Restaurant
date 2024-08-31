import React from 'react'
import {FaDribbbleSquare, FaFacebookSquare, FaGithubSquare, FaInstagramSquare, FaTwitterSquare} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>
        <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        <div className='flex md:w-[75%] my-6 justify-between'>
            <FaFacebookSquare/>
            <FaInstagramSquare/>
            <FaTwitterSquare/>
            <FaGithubSquare/>
            <FaDribbbleSquare/>
        </div>
        </div>
        <div className='lg:col-span-2 flex justify-between'>
            <div>
                <h6 className='font-medium text-gray-400'>Solutions</h6>
                <ul>
                    <li className='py-2 text-sm'>Company</li>
                    <li className='py-2 text-sm'>Resources</li>
                    <li className='py-2 text-sm'>About</li>
                    <li className='py-2 text-sm'>Contact</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400'>Support</h6>
                <ul>
                    <li className='py-2 text-sm'>Pricing</li>
                    <li className='py-2 text-sm'>Documentation</li>
                    <li className='py-2 text-sm'>Guides</li>
                    <li className='py-2 text-sm'>API Status</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400'>Company</h6>
                <ul>
                    <li className='py-2 text-sm'>About</li>
                    <li className='py-2 text-sm'>Blog</li>
                    <li className='py-2 text-sm'>Jobes</li>
                    <li className='py-2 text-sm'>Press</li>
                    <li className='py-2 text-sm'>Careers</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400'>Legal</h6>
                <ul>
                    <li className='py-2 text-sm'>Claims</li>
                    <li className='py-2 text-sm'>Terms</li>
                    <li className='py-2 text-sm'>Policy</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer