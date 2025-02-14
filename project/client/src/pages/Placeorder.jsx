import React from 'react'
import Navbar from '../components/Navbar'
import Carttotal from '../components/Carttotal'
import Footer from '../components/Footer'
const Inputbox = ({value})=>{
      return(
        <input 
                        placeholder={value}
                        className='flex-1 border border-slate-300 rounded-sm p-2 outline-[var(--primary-color)]'/>
      )
}
const Placeorder = () => {
  return (
   <div>
            <div className='max-w-[80%] mx-auto' >
               <Navbar/>

               <div className='flex flex-row gap-5'>
                     <div className=' p-2 flex-1  ' >
                           <div className='text-2xl mb-8 font-bold'>
                                 <p>Delivery Information</p>
                           </div>
                           <form className='flex flex-col gap-7'>
                              
                              <div className='flex flex-row gap-3 '>
                                 
                              <Inputbox value={'First Name'}/>
                              <Inputbox value={'Last Name'}/>

                              </div>
                              <div className='flex flex-row gap-3'>
                                 <Inputbox value={'Email Id'}/>
                              </div>
                              <div className='flex flex-row gap-3'>
                                 <Inputbox value={'Street'}/>
                              </div>
                              <div className='flex flex-row gap-3'>
                                 <Inputbox value={'City'}/>
                                 <Inputbox value={'State'}/>
                              </div>
                              <div className='flex flex-row gap-3'>
                                 <Inputbox value={'Pin Code'}/>
                                 <Inputbox value={'Country'}/>
                              </div>
                              <div className='flex'>
                                 <Inputbox value={'Phone Number'}/>
                                 
                              </div>
                              
                           </form>
                        
                     </div>
                     <div className='flex-1 ' >
                        <Carttotal/>
                     </div>
                     
               </div>
               

            </div>
            <Footer/>
   </div>      
  )
}

export default Placeorder