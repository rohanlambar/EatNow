import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {assets} from '../assets/assets'
import Carttotal from '../components/Carttotal'
import { useDispatch, useSelector } from 'react-redux'
import { deleteToCart } from '../redux/cartSlice'


const Card = () => {
    const {cartItem , totalCost} = useSelector((state)=>state.cart) ;
    
    const dispatch = useDispatch()
    const deleteItem = (item)=>{
        dispatch(deleteToCart({item : item}));
     
        
    }
  return (
    <div>
                <div className='max-w-[80%] mx-auto' >
                    <Navbar/>

                                {/* this code for cart page */}
                                <div className='flex flex-col gap-20 '>
                                    <div className=' mx-auto mt-10  min-h-[200px] min-w-[100%]'>
                                    <div>
                                        <div className=' grid grid-cols-[1fr_2fr_1fr_1fr_1fr_1fr] text-[var(--gray)] text-[max(1vw,10px)] '>
                                            <p className='p-2'>Items</p>
                                            <p className='p-2'>Title</p>
                                            <p className='p-2'>Price</p>
                                            <p className='p-2'>Quantity</p>
                                            <p className='p-2'>Total</p>
                                            <p className='p-2'>Remove</p>
                                            
                                        </div>
                                     </div>    
                                            <hr className='text-[var(--gray)] mt-3'/>
                                            {cartItem.map((item,index) => {
                                                return(
                                                    <div key={index}>
                                                    <div className=' grid grid-cols-[1fr_2fr_1fr_1fr_1fr_1fr] text-xl text-[var(--dark)] my-2 '>
                                                        <img src={item.image}
                                                        className='w-[80%] rounded-sm  '/>
                                                        <p className='place-content-center'>{item.name}</p>
                                                        <p  className='place-content-center'>${item.price}</p>
                                                        <p  className='place-content-center'>{item.quantity}</p>
                                                        <p className='place-content-center'>${item.quantity*item.price}</p>
                                                        <img src={assets.remove_icon_cross} 
                                                        className='w-[20%]  cursor-pointer m-auto '
                                                        onClick={()=>deleteItem(item)}/>
                                                    </div>
                                                    <hr className='text-[var(--gray)] mt-3'/>
                                            </div>   
                                                );
                                            })}
                                                            
                                    </div>
                                    
                                    <div className='flex flex-col-reverse gap-[50px] md:flex-row md:gap-20'>
                                        <Carttotal totalCost = {totalCost}/>
                                        <div className='flex-1 flex flex-col h-[45px]   '>
                                                <p 
                                                className='text-[var(--dark)]'>
                                                    If you have promocode, Enter it here </p>
                                                <div className='flex flex-row mt-3'>
                                                    <input
                                                    placeholder='Promo Code'
                                                    className=' h-full flex-1 rounded-l-sm bg-[#EAEAEA] p-3 outline-none border-none'/>
                                                    <button
                                                    className='w-[max(10vw,150px)] h-full bg-[var(--dark)] text-white rounded-sm p-3'

                                                    >
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