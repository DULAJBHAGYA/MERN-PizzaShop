import React,{useState} from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MdLogout } from "react-icons/md";


const AdminNav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleMenuToggler = () =>{
        setIsMenuOpen(!isMenuOpen)
    }

    const navItems = [
        {path:'/admin', title:'Dashboard'},
        {path:'/admin/addcategory', title:'Add Category'},
        {path:'/admin/addfood', title:'Add Food'},
        {path:'/admin/users', title:'Users'},
        {path:'/admin/orders', title:'Orders'},
        {path:'/admin/deliveries', title:'Deliveries'},
        {path:'/admin/feedback', title:'Feedbacks'},
        {path:'/contact', title:'Settings'},
    ]

    

  return (
    <header className='max-width-2xl position:sticky container mx-auto xl:px-24 px-4'>
        <nav className='flex justify-between items-center py-6'>
        <a href='/' className='flex  items-center gap-2 text-xl text-black'>
        <img src='/images/Logo.png' alt='Description of the image' width={100}/></a>

        <ul className='hidden md:flex gap-12'>
            {
                navItems.map(({path, title}) =>(
                    <li key={path} className='text-base text=l font-semibold text-black' style={{ fontFamily: 'Inter' }}>
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
        <div className='flex gap-5 text-xl mt-2'>
        <Link to='/cart' ><MdLogout /></Link>
        </div>

        </div>

        </nav>      
    </header>
  )
}

export default AdminNav