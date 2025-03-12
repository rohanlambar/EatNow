import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom';
import { useAppContext } from '../context/isLoginContext';

const Navbar = () => {
  
  const {putPopup , totalQuantity } = useAppContext();
  return (
     
     <div className='flex flex-row justify-between items-center p-4 '>
        <img src={assets.logo} alt='Logo of Cafe' className='w-[150px] cursor-pointer' />
        {/* This is the middle section */}
        <div className='hidden md:block'>
             <ul className='flex flex-row gap-4 text-lg text-[var(--dark)] cursor-pointer'>
                <li>
                <NavLink to='/'
                
                className = {({isActive}) => isActive ? "text-[var(--primary-color)] pb-1 border-b-2 transition-all duration-200":" "}              
                >
                Home 
                </NavLink>
                </li>
                <li>
                <NavLink to='/carte'
                className = {({isActive}) => isActive ? "text-[var(--primary-color)] pb-1 border-b-2 transition-all duration-200":" "}              
                >
                Menu 
                </NavLink>
                </li>
                <li>
                <NavLink to='/carte'
                className = {({isActive}) => isActive ? "text-[var(--primary-color)] pb-1 border-b-2 transition-all duration-200":" "}              
                >
                Mobile App
                </NavLink>
                </li>
                <li>
                <NavLink to='/carte'
                className = {({isActive}) => isActive ? "text-[var(--primary-color)] pb-1 border-b-2 transition-all duration-200":" "}              
                >
                Contact us 
                </NavLink>
                </li>
             </ul>
        </div>
        {/* This is the right section */}
        <div className='flex flex-row gap-[40px] items-center cursor-pointer'>
          <img src={assets.search_icon} alt='search-icon' className='w-[27px] h-[27px] ' />
          <div className='relative'>
          <div className={totalQuantity >= 0 ? "absolute top-[-14px] right-[-1px] w-[20px] h-[20px] rounded-[50%] bg-[var(--primary-color)] flex justify-center items-center ":"hidden"}>
               <p className='text-[12px] text-[var(--dark)]'>{totalQuantity}</p>
          </div>
          <NavLink to='/cart'>
              <img src={assets.basket_icon} alt='basket-icon' className='w-[29px] h-[30px]' />
          </NavLink>
          
          </div>
          
          <button
           className=' border border-[var(--primary-color)] text-[var(--primary)] bg-transparent text-[16px] py-[10px] px-[30px] rounded-[50px] cursor-pointer hover:bg-[#f76e6a] hover:text-white transition-all duration-300'
           onClick={putPopup} 
           >Sign Up</button>
        </div>
    </div>

  )
}

export default Navbar
