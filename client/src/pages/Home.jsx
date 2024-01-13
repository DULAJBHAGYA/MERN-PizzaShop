import React from "react";
import { Link } from "react-router-dom";
import { FaCheck, FaPhoneAlt} from "react-icons/fa";
import { RiEBike2Fill } from "react-icons/ri";
import Services from "./Services";
import Footer from "../components/Footer";
import HomeMenu from "./HomeMenu";


const Home = () => {
  return (
    <section className='pt-0' id='about'>
      <div className="max-width-2xl container mx-auto xl:px-24 px-4 mt-10">
        <div className='md:flex items-center justify-between sm:flex-col md:flex-row'>

          {/* ======= home left content ======= */}
          <div className='w-full md:w-3/5' style={{ fontFamily: 'Poppins' }}>
          <h1 className='text-7xl font-bold text-primary mb-3'>HUNGRY ? <span className='text-black px-4 font-semibold'>Just wait</span><br/>
          <span className='text-black font-semibold'>food at</span><span className='text-primary px-6 font-semibold'>your door</span></h1>

          <p style={{ fontFamily: 'Poppins' }} className="mt-10 text-3xl font-semibold">We delivering piping hot pizzas to your door 
          <br/>with lightning-fast efficiency.</p>

          <div className='text-l mt-10 font-medium space-x-5 flex flex-row lg:block'>
            <Link to='/login' className='py-2 px-5 border-2 bg-primary border-primary text-white rounded-xl'>
              Order Now
            </Link>

            <Link to='/login' className='py-2 px-5 border-2 border-primary text-primary rounded-xl'>
              See all foods
            </Link>
          </div>

          <div className='flex items-center flex-wrap  mt-10'>

                <span className="flex items-center justify-center">
                <span className='w-[35px] h-[35px] bg-primary p-1 rounded-[50px] justify-center text-white text-2xl cursor-pointer text-center items-center mx-2'>
                <RiEBike2Fill/>
                </span><p className="font-semibold text-xl">No delivery charge</p>
                </span>

                <span className="flex items-center mx-10 justify-center">
                <span className='w-[35px] h-[35px] bg-primary p-1 rounded-[50px] justify-center text-white text-2xl cursor-pointer text-center items-center mx-2'>
                <FaCheck/>
                </span><p className="font-semibold text-xl">No delivery charge</p>
                </span>

                </div>


                <div>
                  <h2 className="text-primary font-semibold text-2xl mt-10">Hot lines</h2>

                  <div className="flex flex-row mt-4 text-3xl font-semibold">
                  <span className="mt-1 mr-4"><FaPhoneAlt /></span><h2>0112 345 6666 / 0112 345 6888</h2>
                  </div>
                </div>


          </div>

          {/* ======== home img ======= */}
          <div className='md:w-2/5 mt-10 sm:mt-0'>
            <figure className='flex items-center justify-center'>
            <img src='/images/home.png' alt='Description of the image' width={2000}/>
            </figure>
          </div>
          {/*======== home img end ======= */}

          
        </div>
      </div>
      <Services/>
      <HomeMenu/>
      <Footer/>
    </section>
  )
}

export default Home