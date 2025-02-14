import React from 'react'
import { assets  } from '../assets/assets'
import { useAppContext } from '../context/isLoginContext'
const Loginpopup = () => {
const {removePopup} = useAppContext()
  return (
    <div className=' fixed inset-0 z-[10] flex justify-center  w-full h-full bg-[rgba(54,48,48,0.89)]'>
            <form className=' place-self-center rounded-lg px-6 py-2  shadow-2xl bg-white   max-w-[max(30vw,400px)]'>
                    <div className=' flex flex-col items-center gap-4 '>
                                <div className='relative flex flex-col justify-center items-center gap-1  p-4' >
                                            <img src={assets.logo} className='w-[150px] my-2 '/>
                                            <img src={assets.cross_icon}
                                              onClick={ removePopup }
                                            className='absolute top-0 right-0 rounded-[50%] hover:bg-slate-200 p-2 text-center'
                                            />
                                            <h1 className='text-xl font-medium'>Welcome back</h1>
                                            <p className='text-[var(--gray)]  text-xl'>Please enter your data to sign in. </p>
                                </div>  
                                <div className='w-full  flex flex-row justify-between gap-2'>
                                           <button 
                                           className='flex flex-1 justify-center border border-slate-300 px-4 py-1 rounded-lg mx-2'>
                                                    <img src={assets.google_logo}
                                                    className='w-[30px] h-[30px]'/>
                                           </button>
                                           <button
                                           className='flex flex-1 justify-center border border-slate-300 px-4 py-1 rounded-lg mx-2'>
                                           <img src={assets.facebook_logo}
                                           className='w-[25px] h-[25px]'/>

                                           </button>
                                </div>
                                <div className='flex flex-col justify-start gap-2 w-full'>
                                            <label>E-Mail Address</label>
                                            <input placeholder='Enter your email' 
                                            className='border  border-slate-400  w-full rounded-lg p-2 '
                                            />
                                            <label >Password</label>
                                            <input type='password' 
                                            placeholder='password' 
                                            className='border border-slate-400 w-full rounded-lg p-2 '
                                            />
                                </div>            
                                    <div className='flex flex-row justify-between w-full'>
                                        <div className='flex item-center'>
                                            <input type='checkbox'
                                             className='mx-2 accent-[var(--primary-color)]'/>
                                            <label>remember me</label>
                                        </div>  
                                        <p className='text-[var(--gray)] hover:underline hover:text-slate-500 cursor-pointer'>forgot password?</p>  

                                    </div>
                                    <button type='submit' className='p-2 bg-[var(--primary-color)] outline-none rounded-lg text-white w-full  hover:bg-[#fa5c23] mb-2' > 
                                        Login </button>
                                    <p className='text-[var(--gray)] mb-4'>Create a new account? <span className='text-[var(--primary-color)] text-sm font-bold cursor-pointer hover:underline'>Sign Up</span></p>
                    </div>
            </form>
    </div>
  )
}

export default Loginpopup

