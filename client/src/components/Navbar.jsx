    import React,{useState} from 'react';
    import { Link, NavLink } from 'react-router-dom';
    import { FaCartShopping, FaHeart } from "react-icons/fa6";


    const Navbar = () => {
        const [isMenuOpen, setIsMenuOpen] = useState(false);
        const handleMenuToggler = () =>{
            setIsMenuOpen(!isMenuOpen)
        }
    
        const navItems = [
            {path:'/', title:'Home'},
            {path:'/about', title:'About Us'},
            {path:'/menu', title:'Menu'},
            {path:'/promos', title:'Promotions'},
            {path:'/contact', title:'Contact Us'},
        ]

        
    
      return (
        <header className='max-width-2xl container mx-auto xl:px-24 px-4'>
            <nav className='flex justify-between items-center py-6'>
            <a href='/' className='flex  items-center gap-2 text-xl text-black'>
            <img src='/images/Logo.png' alt='Description of the image' width={150}/></a>
    
            <ul className='hidden md:flex gap-12'>
                {
                    navItems.map(({path, title}) =>(
                        <li key={path} className='text-base text=l font-semibold text-black' style={{ fontFamily: 'Poppins' }}>
                        <NavLink
                        to={path}
                        className={({ isActive}) => isActive? "active": ""
                        }
                      >
                      {title}
                      </NavLink>
                        </li>
                    ))
                }
            </ul>
    
            <div className='flex'>
            <div className='flex gap-10 mt-2'>
            <Link to='/cart' ><FaHeart /></Link>
            <Link to='/favorites' ><FaCartShopping/></Link>
            </div>

            <div className='text-base text-black  font-medium space-x-5 hidden lg:block px-10 '>
                <Link to='/login' className='py-2 px-5 border-2 border-black rounded-2xl'>Register / Login</Link>
            </div>
            </div>
    
            </nav>      
        </header>
      )
    }

    export default Navbar