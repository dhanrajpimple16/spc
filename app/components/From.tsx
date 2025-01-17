import React from 'react'
import comunity from '../assets/community.webp'
import contract from '../assets/Contracts.webp'
const From = () => {
  return (
    <div className='flex flex-col items-center md:items-start md:flex-row w-full'>
      <div className='flex flex-col md:w-[2000px] w-full  md:p-0 p-5 md:pl-24 mt-8'>
    <p className='font-bold md:text-5xl text-4xl text-center md:text-left'>Professional Pest Control in Puget Sound</p>
    <p className='text-lg mt-5'>If you are looking for an exceptional, local pest control company in the Puget Sound area, you found it! <span className='font-bold'> With over 30 years of experience and community involvement, we offer recurring servicing for year-round protection, as well as one-time treatments, </span>working with you to exterminate and eliminate all common pests and providing you with peace of mind. </p>
    <p className='text-lg mt-5'>Our local exterminators, who live in, work in, and contributed to the Bremerton community and beyond, <span className='font-bold'> go through an extensive training and certification process conducted by the state of Washington </span> to ensure all of our services are exemplary and bring as little harm to the environment as possible, ensuring your family's safety. We prioritize eco-friendly pest control, using 100% EPA-approved products. </p>
    <div className='flex flex-row items-center justify-evenly mt-5' >
      <div className='flex justify-center items-center bg-gray-400 rounded-full h-24 md:w-48 w-64 mr-4'>
      <img src={contract} className='h-14 w-28  p-2'/>
      </div>
      <div>
        <p className='font-bold text-lg'>No Contracts</p>
        <p className='text-lg'>We are confident that you’ll be satisfied with the quality of our pest control services, which is why we don’t require monthly contracts with our services.</p>
        </div>
    </div>
    <div className='flex flex-row items-center justify-evenly mt-5'>
      <div  className='flex justify-center items-center bg-gray-400 rounded-full  h-24 md:w-44 w-60 mr-4'>
      <img src={comunity} className='h-14 w-28 p-2'/>
      </div>
      <div>
        <p className='font-bold text-lg'>Community Involvement</p>
        <p className='text-lg'>We donate our time and money to the Central Kitsap Food Bank. When you choose Sound Pest, you’re helping feed those in need!</p>
        </div>
    </div>
      </div>
   <div className='flex flex-col  items-center bg-black w-full m-4 md:ml-16 md:mr-16 mt-10'>
  <p className='font-bold text-2xl md:text-4xl text-white mt-4'>Get A Free Estimate</p>
   <div className='flex flex-row mt-3 justify-evenly w-full'>
    <div className='flex flex-col  w-2/5'>
      <label className='text-white text-lg'>First Name<span className='text-red-700 text-lg'>*</span></label>
      <input className='h-8 w-full '/>
    </div>
    <div className='flex flex-col w-2/5'>
      <label className='text-white text-lg'>Last Name<span className='text-red-700 text-lg'>*</span></label>
      <input className='h-8 w-full'/>
    </div>
   </div>
   <div className='flex flex-row justify-evenly mt-3 w-full'>
    <div className='flex flex-col w-2/5'>
      <label className='text-white text-lg'>Phone<span className='text-red-700 text-lg'>*</span></label>
      <input className='h-8 w-full'/>
    </div>
    <div className='flex flex-col w-2/5'>
      <label className='text-white text-lg'>Email<span className='text-red-700 text-lg'>*</span></label>
      <input className='h-8 w-full'/>
    </div>

   </div>
   <div className='flex w-full items-center justify-evenly mt-3 '>
    <div className='flex flex-col w-[88%] '>
      <label className='text-white text-lg'>Address<span className='text-red-700 text-lg'>*</span></label>
      <input className='h-8 w-full'/>
    </div>
   </div>
   <div className='flex flex-row justify-evenly mt-3 w-full'>
    <div className='flex flex-col w-2/5'>
      <label className='text-white text-lg'>City/Town<span className='text-red-700 text-lg'>*</span></label>
      <input className='h-8 w-full'/>
    </div>
    <div className='flex flex-col w-2/5'>
      <label className='text-white text-lg'>State/Province<span className='text-red-700 text-lg'>*</span></label>
      <select className='h-8 w-full'>
  <option value="default" disabled selected>-select-</option>
</select>
    </div>

   </div>
   <div className='flex flex-row mt-3 justify-evenly w-full'>
    <div className='flex flex-col w-2/5'>
      <label className='text-white text-lg'>ZIP/Postal Code<span className='text-red-700 text-lg'>*</span></label>
      <input className='h-8 w-full'/>
    </div>
    <div className='flex flex-col w-2/5'>
      <label className='text-white text-lg'>Country<span className='text-red-700 text-lg'>*</span></label>
      <select className='h-8 w-full'>
  <option value="default" disabled selected>-None-</option>
</select>
    </div>

   </div>
   <div className='flex w-full items-center justify-evenly mt-3 '>
    <div className='flex flex-col w-[88%] '>
      <label className='text-white text-lg'>Are you new coustomer<span className='text-red-700 text-lg'>*</span></label>
      <select className='h-8 w-full'>
  <option value="default" disabled selected>-None-</option>

</select>
    </div>
   </div>
  

  
   

   <div className='flex w-full items-center justify-evenly mt-3 '>
    <div className='flex flex-col w-[88%] '>
      <label className='text-white text-lg'>How we help you<span className='text-red-700 text-lg'>*</span></label>
      <textarea
      className='w-[100%] h-32 p-2 border border-gray-300 rounded'
    
    />


    </div>
   </div>

<p className='text-[10px] md:text-sm text-white md:-ml-20 mt-4'>By submitting this form, you are agreeing to the privacy policy.</p>

<button className='bg-btncolor p-2 text-white mt-12 mb-4'>Get Started Today</button>
   </div>
    </div>
  )
}

export default From