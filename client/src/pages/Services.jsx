import React from 'react'
import ServiceCard from '../components/ServiceCard'

const Services = () => {
  return (
    <div className="max-width-2xl container mx-auto xl:px-24 px-4 mt-40 justify-items-center">
        <h1 className='text-3xl font-bold text-primary text-center'>
        WHAT WE SERVE
        </h1>
        <p className='text-5xl font-bold text-black text-center mt-5 mb-10' style={{ fontFamily: 'Poppins' }}>Fast, Fresh, and Always <br/>
        Your Favorite Food Delivery Partner</p>

        <ServiceCard/>
    </div>
  )
}

export default Services