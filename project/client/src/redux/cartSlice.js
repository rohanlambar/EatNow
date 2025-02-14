import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';

export const  cartSlice =   createSlice({
  name : 'cart',
  initialState : {
    cartItem : localStorage.getItem('cartItem') ? 
                JSON.parse(localStorage.getItem('cartItem')):
                [],
     totalCost : 0,
  },
  reducers: {
       updateToCart : (state,action)=>{
             const {item} = action.payload;
             state.cartItem = state.cartItem.filter((obj)=>obj._id !== item._id);
             if(item) state.cartItem = [...state.cartItem,action.payload.item];
             localStorage.setItem('cartItem',JSON.stringify(state.cartItem));
             console.log("this is state.cartItem :",state.cartItem);
             var cost = 0;
             state.cartItem.forEach((item)=> cost += item.price*item.quantity);
             state.totalCost = cost ;
             toast.success("successfully item updated");
       },
       deleteToCart : (state,action)=>{
           const {item} = action.payload;
           if(item){
            state.cartItem = state.cartItem.filter((obj)=>obj._id !== item._id);
            localStorage.setItem('cartItem',JSON.stringify(state.cartItem));
            var cost = 0;
            state.cartItem.forEach((item)=> cost += item.price*item.quantity);
            state.totalCost = cost ;
            toast.success("successfully item deleted"); }
       },
       
  }
})

export const {addToCart, updateToCart, deleteToCart  } = cartSlice.actions;
export default cartSlice.reducer ;