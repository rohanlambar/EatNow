
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
            <Menulist id='menu'/>
            <Foodlist/>
            {showPopup && <Loginpopup/>}
            
            <Mobileapp id='mobileapp '/>
            
        </div>
        <Footer id='footer'/>
    </div>
    
  )
}

export default Homepage
