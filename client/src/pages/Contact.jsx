import React from 'react';
import Footer from '../components/Footer';
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";


const Contact = () => {
  return (
    <section>
    <div className="max-width-2xl container mx-auto xl:px-24 px-4 mt-10">

    <div>
    <h1 className='text-3xl font-bold text-primary text-start'>
    LET'S KEEP IN TOUCH
    </h1>

    <p className='text-5xl font-bold text-black text-start '>Our Contacts</p>

    <div className='flex flex-row'>
    <div className='w-full md:w-2/5 mt-10'>

    <span className='flex flex-row ml-auto'>
    <span className='w-[100px] h-[100px] bg-primary p-1 rounded-[50px] flex items-center justify-center text-white text-5xl cursor-pointer mx-2'>
    <FaLocationDot />
    </span>
    <p className='text-l font-semibold ml-10'>No: 22/D,
    <br/>De Silva Street,
    <br/>Kandy</p>
    </span>

    
    <span className='flex ml-auto'>
    <span className='w-[100px] h-[100px] bg-primary p-1 rounded-[50px] mt-10 flex items-center justify-center text-white text-5xl cursor-pointer mx-2'>
    <FaPhone/>
    </span>
    <p className='text-l font-semibold ml-10'>081 233 34444
    <br/>081 233 35555</p>
    </span>

    <div className='flex  ml-auto flex-row items-center'>
  <span className='w-[100px] h-[100px] bg-primary p-1 rounded-[50px] mt-10 flex items-center justify-center text-white text-6xl cursor-pointer mx-2'>
    <IoMail/>
  </span>
  <p className='text-l font-semibold ml-2'>
    info@pizzaz.lk
  </p>
</div>


    </div>  

    <div className='w-full md:w-3/5  bg-[#F6F0F0] rounded-xl'>
    

    </div>

    </div>

    </div>

    <div className='mt-20'>
    <h1 className='text-3xl font-bold text-primary text-start'>
    FIND US ON GOOGLE MAPS    
    </h1>

    <p className='text-5xl font-bold text-black text-start '>We Are Here</p>

    <div className='border-3 border-black w-full mt-10 h-80'>
    </div>
    </div>

    </div>

    <Footer/>

    </section>

  )
}

export default Contact