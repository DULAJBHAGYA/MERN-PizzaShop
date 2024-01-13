import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaTiktok } from "react-icons/fa";
import { AiFillInstagram, AiOutlineSend} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className='bg-[#F6F0F0] pt-10 pb-10 px-20 mt-40' style={{ fontFamily: 'Poppins' }}>
        {/*===========footer top=========*/}
        <div className='container'>
          <div className='sm:flex items-center justify-between md:gap-8'>
            <div className='w-full sm:w-1/3'>

            <img src='/images/Logo.png' alt='Description of the image' width={150}/>

              <p className='font-medium  text-l text-black mt-10' style={{ fontFamily: 'Poppins' }}>Our job is to filling your tummy with<br/>
                delicious food and with fast and <br/>
                free delivery.</p>
              
              <div className='flex mt-10 gap-10 ' >
                  <a href='#' className='text-primary font-medium text-2xl'  target="_blank" rel="noopener noreferrer"
                  ><FaFacebookF/></a>

                <a href='#' className='text-primary font-[500] text-3xl' target="_blank" rel="noopener noreferrer"
                  ><AiFillInstagram/></a>

                <a href='#' className='text-primary font-[500] text-3xl' target="_blank" rel="noopener noreferrer"
                  ><FaTwitter/></a>

                <a href='#' className='text-primary font-[500] text-2xl' target="_blank" rel="noopener noreferrer"
                  ><FaTiktok/></a>
                </div>
               
              
            </div>
            
            <div className='w-full sm:w-1/5' >

              <h1 className='font-bold text-xl'>About</h1>

              <div className='mt-10'>
                <ul>
                    <li>
                    <a href='#' className='text-black font-medium text-l' rel="noopener noreferrer">About Us</a>
                    </li>
                    <li className='mt-5'>
                    <a href='#' className='text-black font-medium text-l' target="_blank" rel="noopener noreferrer">Features</a>
                    </li>
                    <li className='mt-5'>
                    <a href='#' className='text-black font-medium text-l' target="_blank" rel="noopener noreferrer">News</a>
                    </li>
                    <li className='mt-5'>
                    <a href='#' className='text-black font-medium text-l' target="_blank" rel="noopener noreferrer">Menu</a>
                    </li>
                </ul>
                </div>
            </div>

            <div className='w-full sm:w-1/5'>
            <h1 className='font-bold text-xl'>Restaurant</h1>
              
              <div className='mt-10'>
                <ul>
                    <li>
                    <a href='#' className='text-black font-medium text-l' rel="noopener noreferrer">Why Pizzaz?</a>
                    </li>
                    <li className='mt-5'>
                    <a href='#' className='text-black font-medium text-l' target="_blank" rel="noopener noreferrer">Partner With Us</a>
                    </li>
                    <li className='mt-5'>
                    <a href='#' className='text-black font-medium text-l' target="_blank" rel="noopener noreferrer">FAQ</a>
                    </li>
                    <li className='mt-5'>
                    <a href='#' className='text-black font-medium text-l' target="_blank" rel="noopener noreferrer">Blog</a>
                    </li>
                </ul>
                </div> 
            </div>

            <div className='w-full sm:w-1/5'>
            <h1 className='font-bold text-xl'>Support</h1>
              <div className='mt-10'>
                <ul>
                    <li>
                    <a href='#' className='text-black font-medium text-l' rel="noopener noreferrer">Account</a>
                    </li>
                    <li className='mt-5'>
                    <a href='#' className='text-black font-medium text-l' target="_blank" rel="noopener noreferrer">Support Center</a>
                    </li>
                    <li className='mt-5'>
                    <a href='#' className='text-black font-medium text-l' target="_blank" rel="noopener noreferrer">Feedback</a>
                    </li>
                    <li className='mt-5'>
                    <a href='#' className='text-black font-medium text-l' target="_blank" rel="noopener noreferrer">Contact Us</a>
                    </li>
                </ul>
                </div> 
            </div>

            <div className='w-full sm:w-1/5'>
            <h1 className='font-bold text-xl'>Get in Touch</h1>
              <div className='mt-10'>
                <ul>
                    <li className='mt-5'>
                    <a href='#' className='text-black font-medium text-l' target="_blank" rel="noopener noreferrer">Question or Feedback</a>
                    </li>
                    <li className='mt-5'>
                    <p className='text-black font-medium text-l' target="_blank" rel="noopener noreferrer">We’d love to hear from you</p>
                    </li>
                    <li className='mt-5 flex items-center'>
                    <div className='text-black text-l font-medium space-x-5 hidden lg:block px-0'>
                        <Link to='/login' className='py-1 px-9 border-2 border-[#D9D9D9] rounded-3xl flex flex-row items-center'>
                        <span className='mr-2'>Email Address</span>
                        <span className='text-primary'><AiOutlineSend /></span>
                        </Link>
                    </div>
                    </li>

                </ul>
                </div> 
            </div>
            

          </div>
          {/* <div>
                <ul className='flex items-center justify-center gap-10 mt-10'>
                    <li>
                    <a className='text-gray-400 font-[600]' href='#about'>About</a>
                    </li>

                    <li>
                    <a className='text-gray-400 font-[600]' href='#education'>Education</a>
                    </li>

                    <li>
                    <a className='text-gray-400 font-[600]' href='#skills'>Skills</a>
                    </li>

                    <li>
                    <a className='text-gray-400 font-[600]' href='#services'>Services</a>
                    </li>

                    <li>
                    <a className='text-gray-400 font-[600]' href='#portfolio'>Portfolio</a>
                    </li>

                    <li>
                    <a className='text-gray-400 font-[600]' href='#contact'>Contact</a>
                    </li>

                </ul>
            </div> */}
        </div>
          {/*===========footer top end=========*/}

         
    </footer>
  )
};

export default Footer;