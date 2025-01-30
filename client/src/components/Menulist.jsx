import React, { useState } from 'react'
import { menu_list } from '../assets/assets'
import { useAppContext } from '../context/isLoginContext';

const Menulist = () => {
    const [selected,setSelected] = useState("All");
    const {putCateogory} = useAppContext()
    putCateogory(selected);
  return (
    <div className='my-2 flex flex-col gap-2  px-[80px] pt-[20px] '>
       <h2 className='text-[var(--dark)] text-3xl font-medium'>Explore our Menu</h2>
       <p className='text-[var(--gray)] md:max-w-[60%]  w-full'>
        Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
        <div className="flex  gap-10 align-middle  text-center justify-between overflow-x-scroll scrollbar-hide">
        {menu_list.map((item,index)=>{
          return ( <div key={index}
            
             className = 'flex flex-col gap-3'
             onClick={ ()=>{setSelected((prev)=>prev===item.menu_name?"All":item.menu_name);
             
              console.log(selected);
             }}
           
             >
                <img src={item.menu_image} className = {selected === item.menu_name ? 
                'scale-90 rind ring-2 ring-[var(--primary-color)] ring-offset-4 transition-transform duration-100 ease-in  mt-[20px] w-[7.5vw] min-w-[75px] rounded-[50%]'
              :  'mt-[20px] w-[7.5vw] min-w-[75px] rounded-[50%]'}/>
                <p className='text-[var(--gray)]'>{item.menu_name}</p>
            </div>);
        })}
        </div>
       <hr className='text-[var(--gray)]'/>
    </div>
  )
}

export default Menulist