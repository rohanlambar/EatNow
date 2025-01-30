import React, { useState } from 'react'
import { useAppContext } from '../context/isLoginContext';


const Foodcard = ({image,name,description,price}) => {
  const [count,setCount] =  useState(0);
  const {isLoginIn,putPopup} = useAppContext()
  const addCount = ()=>{
    if(isLoginIn) setCount((prev)=>prev+1);
    else  putPopup();
  }
  const subCount = ()=>{
    if(isLoginIn) setCount((prev)=>prev-1);
    else putPopup();
  }
  return (
    <div className='flex justify-center  mt-5   max-w-[400px]'>
    <div className='w-full shadow-xl rounded-b-[20px] min-w-[300px]   hover:shadow-orange-200'>
        <div className='relative overflow-hidden rounded-t-[20px]  '>
        <img src={image} className='w-full h-full  hover:scale-110 transition-transform duration-300 '/>
        {count==0?
        <img src='src/assets/add_icon_white.png' className='absolute bottom-[15px] right-[15px] cursor-pointer'
        onClick={addCount}/>
      : <div className='flex gap-2 justify-center items-center rounded-[25px]  absolute bottom-[15px] right-[15px] bg-white p-1 '>
          <img src='src/assets/remove_icon_red.png' className='cursor-pointer'
          onClick={subCount}/>
          <p>{count}</p>
          <img src='src/assets/add_icon_green.png' className='cursor-pointer'
          onClick={addCount}/>
        </div>}
        
        </div >
        <div className='flex flex-col justify-start mt-4 mx-4 '>
             <div className='flex flex-row justify-between items-center'>
                 <p className='text-xl font-medium md:font-light md:text-sm'>{name}</p>
                 <img src='src/assets/rating_starts.png'/>
             </div>
             <p className='mt-7 text-[var(--gray)]'>{description}</p>
             <p className='text-[var(--primary-color)] text-xl my-4 '>${price}</p>

        </div>
    </div>
    </div>
  )
}

export default Foodcard