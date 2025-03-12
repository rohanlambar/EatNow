import React from 'react'
import { assets } from '../assets/assets'
const Mobileapp = () => {
  return (
    <div className='flex  p-4 gap-4 mt-4 justify-center'>
          <img src={assets.app_store } className='hover:scale-110 transition-transform duration-300 ease-in'/>
          <img src={assets.play_store} className='hover:scale-110 transition-transform duration-300 ease-in'/>
    </div>
  )
}

export default Mobileapp