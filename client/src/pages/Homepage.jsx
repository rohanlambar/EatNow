
import React from 'react'
import Navbar from '../components/Navbar'
import Menulist from '../components/Menulist'
import Foodlist from '../components/Foodlist'
import Mobileapp from '../components/Mobileapp'
import Footer from '../components/Footer'
import Loginpopup from '../components/Loginpopup'
import { useAppContext } from '../context/isLoginContext'

const Homepage = () => {

    const {isLoginIn,showPopup} = useAppContext();
  return (
    <div>
        <div className='w-[80%] m-auto'>
            <Navbar/>
            <Menulist/>
            <Foodlist/>
            {showPopup && <Loginpopup/>}
            
            <Mobileapp/>
            
        </div>
        <Footer/>
    </div>
    
  )
}

export default Homepage
