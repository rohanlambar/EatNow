import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <header>
        <div className='my-2  w-full h-[500px] bg-contain bg-center bg-no-repeat  '  style={{ backgroundImage: `url(${assets.header_img})` }}>
            <div className='relative flex flex-col gap-5 top-[20%] left-[10%]'>
            <h1 className='max-w-[50%] text-[50px] text-slate-100 font-semibold'>Order Your favourite food </h1>
            <h2 className='max-w-[50%] text-white'> Choose from a diverse menu featuring a detectable array of dishes
          crafted with the finest ingredients and culinary expertise. Our
          mission is to satisfy your cravings and elevate your dining
          experience, one delicious meal at a time. </h2>
            <button className='max-w-[15%] p-2 rounded-full  bg-white text-slate-300 outline-none text-2xl'>View Menu</button>
            </div>
            
        </div>
    </header>
  )
}

export default Header