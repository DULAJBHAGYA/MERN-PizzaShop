import React from 'react';
import { Link } from 'react-router-dom';

const HomeFeedback = () => {
  return (
    <section className='pt-0' id='about'>
      <div className="max-width-2xl container mx-auto xl:px-24 px-4 mt-40">
        <div className='md:flex items-center justify-between sm:flex-col md:flex-row'>

          

          {/* ======== home img ======= */}
          <div className='md:w-2/5 mt-10 sm:mt-0'>
            <figure className='flex items-center justify-center'>
            <img src='/images/cook.png' alt='Description of the image' className='mr-10' width={500}/>
            </figure>
          </div>
          {/*======== home img end ======= */}

          {/* ======= home right content ======= */}
          <div className='w-full md:w-3/5' style={{ fontFamily: 'Poppins' }}>
          <h1 className='text-3xl font-bold text-primary text-start'>
            WHAT THEY SAY        
            </h1>
            <p className='text-5xl font-bold text-black text-start mt-5'>What Our Customers Say 
            <br/>About Us</p>


          </div>

          
        </div>
      </div>
    </section>
    )
}

export default HomeFeedback