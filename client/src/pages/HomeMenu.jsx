import React from 'react';
import { Link } from 'react-router-dom';

const HomeMenu = () => {
  return (
    <div className="max-width-2xl container mx-auto xl:px-24 px-4 mt-40">
    <h1 className='text-3xl font-bold text-primary text-start'>
    OUR MENU        
    </h1>

    <div className='flex flex-row'>
    <div className='w-full md:w-4/5' style={{ fontFamily: 'Poppins' }}>
    <p className='text-5xl font-bold text-black text-start mt-4'>Menu That Always<br/> Makes You Fall In Love</p>
    </div>

    <div className='w-full md:w-1/5 items-end grid justify-items-end' style={{ fontFamily: 'Poppins' }}>
    <Link to='/menu' className='py-2 px-5 border-2 bg-white border-primary text-primary font-semibold rounded-3xl'>
              View full menu
            </Link>
    </div>
    </div>

    <div className='flex flex-row'>
        <div className='w-full md:w-1/5 mt-10'>

        <div to='/menu' className='py-2 px-2 border-2 mt-4 flex items-center  flex-row bg-white border-white text-black text-4xl font-bold rounded-full'>
        <span>
            <img
          src='/images/pizza.png'
          className='mx-auto mr-4 ' // Set margin to auto to center the image horizontally
          style={{ width: '50px', height: 'auto' }}
          alt=''
        />
        </span>
        Pizza
        </div>

        <div to='/menu' className='py-2 px-2 border-2 mt-4 flex items-center  flex-row bg-white border-white text-black text-4xl font-bold rounded-full'>
        <span>
            <img
          src='/images/burger.png'
          className='mx-auto mr-4 ' // Set margin to auto to center the image horizontally
          style={{ width: '50px', height: 'auto' }}
          alt=''
        />
        </span>
        Burger
        </div>

        <div to='/menu' className='py-2 px-2 border-2 mt-4 flex items-center  flex-row bg-white border-white text-black text-4xl font-bold rounded-full'>
        <span>
            <img
          src='/images/pasta.png'
          className='mx-auto mr-4 ' // Set margin to auto to center the image horizontally
          style={{ width: '50px', height: 'auto' }}
          alt=''
        />
        </span>
        Pasta
        </div>

        <div to='/menu' className='py-2 px-2 border-2 mt-4 flex items-center  flex-row bg-white border-white text-black text-4xl font-bold rounded-full'>
        <span>
            <img
          src='/images/lasagna.png'
          className='mx-auto mr-4 ' // Set margin to auto to center the image horizontally
          style={{ width: '50px', height: 'auto' }}
          alt=''
        />
        </span>
        Lasagna
        </div>

        <div to='/menu' className='py-2 px-2 border-2 mt-4 flex items-center  flex-row bg-white border-white text-black text-4xl font-bold rounded-full'>
        <span>
            <img
          src='/images/beverage.png'
          className='mx-auto mr-4 ' // Set margin to auto to center the image horizontally
          style={{ width: '50px', height: 'auto' }}
          alt=''
        />
        </span>
        Beverages
        </div>


        </div>
    </div>

    </div>
  )
}

export default HomeMenu