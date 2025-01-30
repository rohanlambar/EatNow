import React from 'react'
import {food_list} from '../assets/assets'
import Foodcard from './Foodcard'
import { useAppContext } from '../context/isLoginContext'

const Foodlist = () => {
  const {cateogory} = useAppContext()
  const filterFood_list = food_list.filter((item)=>{
                                                  if(cateogory !== 'All')
                                                  return item.category === cateogory;
                                                  else return true;
                                                
                                                });
  return (
    <div className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 p-5 '>
    {
      filterFood_list.map((food,index)=>{
        return(
          <>
          <Foodcard
          key={index} 
          image={food.image} 
          name={food.name}
          description={food.description}
          price={food.price}
          />
          
          </>
        )

      })
    }
           
    </div>
  )
}

export default Foodlist