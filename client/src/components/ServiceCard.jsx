import React from 'react';

const ServiceCard = () => {
  return (
    <div className='border-4 px-2 border-white py-2 rounded-xl' style={{ fontFamily: 'Poppins' }}>
      <section className='card  items-center'>
        <img
          src='/images/easyorder.png'
          className='mx-auto' // Set margin to auto to center the image horizontally
          style={{ width: '250px', height: 'auto' }}
          alt=''
        />
        <div>
          <h4 className='text-black text-center font-bold text-3xl mt-2 mb-1'>Easy to order</h4>
          <p className='text-center text-black text-xl '>You only need a few steps in <br />ordering food</p>
        </div>
      </section>
    </div>
  );
};

export default ServiceCard;
