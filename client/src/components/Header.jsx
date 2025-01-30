import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <Header>
        <div className='w-full relative m-[50px] '>
                <div className='absolute  left-[20%] bottom-[10%]  flex flex-col gap-5  rounded-2xl ' >
                    <h2 className='text-white text-[50px] font-medium '>Order Your favourite food here </h2>
                    <p >
                        Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
                    </p>
                    <div>
                        <button className='bg-white text-[var(--gray)] rounded-[50px] outline-none y-4 px-5'>View Menu</button>
                    </div>
                </div>
        </div>
    </Header>
  )
}

export default Header