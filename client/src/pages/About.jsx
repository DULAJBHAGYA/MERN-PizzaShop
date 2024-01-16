import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import { FaChevronRight } from "react-icons/fa";

const About = () => {
  return (
<section className='pt-0' id='about' style={{ fontFamily: 'Poppins' }}>
    <Navbar/>
      <div className="max-width-2xl container mx-auto xl:px-24 px-4 mt-10">
      <h1 className='text-3xl font-bold mt-20 text-primary text-start'>
    ABOUT US    
    </h1>
    <div className=' flex flex-row mt-10'>
    <p className='text-5xl font-bold text-black text-start'><Link to='/home'>PizzaZ<FaChevronRight/></Link></p>
      </div>
      </div>
      </section>
        )
}

export default About