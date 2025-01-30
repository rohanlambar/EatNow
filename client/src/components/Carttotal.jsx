import React from 'react'

const Carttotal = () => {
  return (
    <div className='flex-1 flex flex-col gap-3 '>
                                <p className='text-2xl font-bold '>Card Total</p>
                                 <div className='flex flex-row justify-between mt-5 text-[var(--gray)]'>
                                    <p>Subtotal</p>
                                    <p>$123</p>
                                 </div>
                                 <hr className='text-[var(--gray)]'/>
                                 <div className='flex flex-row justify-between text-[var(--gray)]'>
                                    <p>Delivery Fee</p>
                                    <p>$12</p>
                                 </div>
                                 <hr className='text-[var(--gray)]'/>
                                 <div className='flex flex-row justify-between text-[#3c3535]'>
                                    <p className='font-bold text-xl'>Subtotal</p>
                                    <p className='font-bold text-xl'>$123</p>
                                 </div>
                                 <button
                                 className='bg-[var(--primary-color)]  text-sm font-medium text-white p-2 w-[30%] rounded-sm cursor-pointer  hover:bg-orange-600'>
                                    Proceed to checkout
                                 </button>
                             </div>
  )
}

export default Carttotal