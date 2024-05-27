import React from 'react'
import { GiRat } from "react-icons/gi";
import { GiAnt } from "react-icons/gi";
const Services = () => {
  return (
  <div className='flex flex-col md:flex-row h-fit bg-white justify-evenly w-full items-center p-4 gap-10 md:gap-0 font-body'>
    <div className='flex flex-col  md:h-64 md:w-1/4 w-80 border-2 border-black justify-center items-center '>
     <div className=' bg-black text-white font-bold h-28 w-full text-center -mt-3 p-1 border-b-8 border-red-700'>Rodents</div>
     <div className='z-50 -mt-10  flex items-center bg-red-700 border-2 border-white justify-center rounded-full h-20 w-20'>
     <GiRat className='text-6xl'/>
     </div>
     <div className='text-center mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quas fugiat nobis</div>
     <button className='bg-btncolor w-2/3 p-1 md:mb-0 mb-3 text-white font-semibold hover:bg-black hover:text-red-700'>learn more</button>
    </div>
    <div className='flex flex-col md:h-64 h-fit md:w-1/4 w-80 border-2 border-black justify-center items-center '>
     <div className=' bg-black text-white font-bold h-28 w-full text-center -mt-3 p-1 border-b-8 border-red-700'>Odorous House Ants</div>
     <div className='z-50 -mt-10  flex items-center bg-red-700 border-2 border-white justify-center rounded-full h-20 w-20'>
     <GiAnt className='text-6xl text-white'/>
     </div>
     <div className='text-center mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quas fugiat nobis</div>
     <button className='bg-btncolor w-2/3 p-1 text-white font-semibold hover:bg-black hover:text-red-700 md:mb-0 mb-3'>learn more</button>
    </div>
    <div className='flex flex-col md:h-64 md:w-1/4 w-80 border-2 border-black justify-center items-center '>
     <div className=' bg-black text-white font-bold h-28 w-full text-center -mt-3 p-1 border-b-8 border-red-700'>Carpenter Ants</div>
     <div className='z-50 -mt-10  flex items-center bg-red-700 border-2 border-white justify-center rounded-full h-20 w-20'>
     <GiAnt className='text-6xl text-red-950'/>
     </div>
     <div className='text-center mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quas fugiat nobis</div>
     <button className='bg-btncolor w-2/3 p-1  text-white font-semibold hover:bg-black hover:text-red-700 md:mb-0 mb-3'>learn more</button>
    </div>
  
  </div>
  )
}

export default Services