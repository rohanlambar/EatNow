import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <footer>
    <div className='bg-[#262626] text-[var(--primary-color)] mt-[100px] pt-[80px] px-[100px] pb-[20px]'>
        <div className='flex flex-col gap-5 '>
            <div className=" flex flex-col gap-20 md:grid md:grid-cols-[2fr_1fr_1fr] md:gap-20 w-full">
                <div className=' flex  flex-col gap-5'>
                        <img src={assets.logo} alt='brand logo' className='w-[150px]'/>
                        <p className='text-white '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis dolor consequatur accusantium vero maxime sapiente minima quibusdam! Fuga dolores nulla vitae quos sit laborum incidunt blanditiis odit exercitationem. Ullam, eligendi.
                        </p>
                    
                        <div className='flex flex-row gap-2 '>
                        <img src={assets.facebook_icon} className='hover:bg-[#434343] rounded-[50%]'/>
                        <img src={assets.linkedin_icon} className='hover:bg-[#434343] rounded-[50%]'/>
                        <img src={assets.twitter_icon} className='hover:bg-[#434343] rounded-[50%]'/>
                        </div>
                </div>
                <div>
                        <p className='text-2xl font-bold'>COMPANY</p>
                        <ul className='text-white mt-2 cursor-pointer space-y-2'>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Delivery</li>
                            <li>Privacy Policy</li>
                        </ul>
                </div>
                <div>
                         <p className='text-2xl font-bold'>GET IN TOUCH</p>
                         <ul className='text-white mt-2 cursor pointer space-y-2'>
                            <li>91+1234566</li>
                            <li>tomato@gmail.com</li>
                        </ul>
                </div>

            </div>
            <hr className='text-[var(--gray)]'/>
            <div className='flex justify-center align-middle'>
                <p>Copy right 2024  TOMATO.com</p>
            </div>

        </div>
    </div>
    </footer>
  )
}

export default Footer