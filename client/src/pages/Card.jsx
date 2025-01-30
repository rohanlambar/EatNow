import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {assets} from '../assets/assets'
import Carttotal from '../components/Carttotal'
const Card = () => {
  return (
    <div>
                <div className='max-w-[80%] mx-auto' >
                    <Navbar/>

                                {/* this code for cart page */}
                                <div className='flex flex-col gap-20 mt-20'>
                                    <div className=' mx-auto mt-10  min-h-[200px] '>
                                        <div className=' grid grid-cols-[1fr_2fr_1fr_1fr_1fr_1fr] text-[var(--gray)] text-[max(1vw,10px)]'>
                                            <p>Items</p>
                                            <p>Title</p>
                                            <p>Price</p>
                                            <p>Quantity</p>
                                            <p>Total</p>
                                            <p>Remove</p>
                                            
                                        </div>
                                            <hr className='text-[var(--gray)] mt-3'/>
                                        
                                        <div className=' grid grid-cols-[1fr_2fr_1fr_1fr_1fr_1fr] text-xl text-[var(--dark)] my-2 '>
                                            <img src={assets.food_1}
                                            className='w-[80%] rounded-sm  '/>
                                            <p className='place-content-center'>some</p>
                                            <p  className='place-content-center'>$13</p>
                                            <p  className='place-content-center'>2</p>
                                            <p className='place-content-center'>$26</p>
                                            <img src={assets.remove_icon_cross} 
                                            className='w-[20%]  cursor-pointer m-auto '/>
                                        </div>
                                        <hr className='text-[var(--gray)] mt-3'/>
                                            
                                    </div>
                                    
                                    <div className='flex flex-col-reverse gap-[50px] md:flex-row md:gap-20'>
                                        <Carttotal/>
                                        <div className='flex-1 flex flex-col h-[45px]   '>
                                                <p 
                                                className='text-[var(--dark)]'>
                                                    If you have promocode, Enter it here </p>
                                                <div className='flex flex-row mt-3'>
                                                    <input
                                                    placeholder='Promo Code'
                                                    className=' h-full flex-1 rounded-l-sm bg-[#EAEAEA] p-3 outline-none border-none'/>
                                                    <button
                                                    className='w-[max(10vw,150px)] h-full bg-[var(--dark)] text-white rounded-sm p-3'>
                                                        Submit
                                                    </button>
                                                </div >
                                        </div>
                                    </div>
                                
                                </div>
                    
                </div>
                <Footer/>
    </div>
  )
}

export default Card