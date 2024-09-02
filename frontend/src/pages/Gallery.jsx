import React from 'react'
import Kichen1 from '../assets/kichen1.jpg'
import Kichen2 from '../assets/kichen2.jpg'
import Kichen3 from '../assets/kichen3.jpg'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Gallery = () => {
  return (
    <div className='bg-black'>
      <Navbar/>
      <div className='w-full bg-[#dab43c] h-[15rem] pt-[40px] rounded-b-3xl'>
      <h1 className='text-black font-bold py-[60px]  text-6xl pb-2 text-center'>Gallery</h1>
      <p className='text-white font-semibold text-2xl mt-4 text-center'>Check-out our snaps</p>

      </div>

      <div>
        <div className=' w-full py-[3rem] px-4 ' >
              <div><p className='text-[#000000] font-bold py-3  text-3xl pb-2 bg-white text-center rounded-3xl' >OUR DISHES</p></div>
              <div className='max-w-[1240] mx-auto grid md:grid-cols-3 gap-8 pt-12 ' >
                  <div className='w-full h-200 shadow-xl flex flex-col p-4 my-6 rounded-lg hover:scale-105 duration-300 border border-black'  >
                      <img className='w-full mx-300 mt-[-2rem] bg-white rounded-md' src={Kichen1} alt="User" />
        
                  </div>
                  <div className='w-full h-200 shadow-xl flex flex-col p-4 my-6  rounded-lg hover:scale-105 duration-300 border border-black '  >
                      <img className='w-full h-50 mx-300 mt-[-2rem] bg-white rounded-md' src={Kichen2} alt="User" />
        
                  </div>
                  <div className='w-full h-200 shadow-xl flex flex-col p-4  my-6 rounded-lg hover:scale-105 duration-300 border border-black'  >
                      <img className='w-full mx-300 mt-[-2rem] bg-white rounded-md' src={Kichen3} alt="User" />
        
                  </div>
              </div>
          </div>
      </div>
      <div>
        <h1></h1>
        <div className=' w-full py-[3rem] px-4 ' >
              <div ><p className='text-[#000000] font-bold py-3  text-3xl pb-2 bg-white text-center rounded-3xl' >FACILITIES</p></div>
              <div className='max-w-[1240] mx-auto grid md:grid-cols-3 gap-8 pt-12 ' >
                  <div className='w-full h-200 shadow-xl flex flex-col p-4 my-6 rounded-lg hover:scale-105 duration-300 border border-black'  >
                      <img className='w-full mx-auto mt-[-3rem] bg-white rounded-md' src={Kichen1} alt="User" />
        
                  </div>
                  <div className='w-full h-200 shadow-xl flex flex-col p-4 my-6  rounded-lg hover:scale-105 duration-300 border border-black '  >
                      <img className='w-full mx-auto mt-[-3rem] bg-white rounded-md' src={Kichen2} alt="User" />
        
                  </div>
                  <div className='w-full h-200 shadow-xl flex flex-col p-4  my-6 rounded-lg hover:scale-105 duration-300 border border-black'  >
                      <img className='w-full mx-auto mt-[-3rem] bg-white rounded-md' src={Kichen3} alt="User" />
        
                  </div>
              </div>
          </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Gallery