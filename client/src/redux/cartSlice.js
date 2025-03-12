import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';

const initialState = {
  cartItem : [],
  totalCost : 0,
  status : "idle",
  error : null,
  toastId :  null,
}

export const fetchFromCartDb = createAsyncThunk("cart/fetchFromCartDb",
      async (_,{ rejectWithValue })=>{
        try{
           const response = await fetch("http://localhost:8000/api/cart",{
                  method : "GET",
                  headers : {
                         "Content-Type" : "application/json",
                         "Authorization" : `Bearer ${localStorage.getItem("jwt_token")}`,
                  },
                  credentials : 'include',
                }
           )
           if(!response.ok) new Error(" errror while fetching cart for particular user ");
           const data = await response.json();
           console.log("data from cart : ",data);
           return data ;
        }
        catch(err){
          console.error(err);
          return rejectWithValue(err.message);
        }
      }
)



export const  cartSlice =   createSlice({
  name : 'cart',
  initialState : initialState,
  reducers: {},
  extraReducers :(builder)=> {
       builder 
               .addCase(fetchFromCartDb.pending,(state)=>{
                      state.status  = "loading";
               })
               .addCase(fetchFromCartDb.fulfilled,(state,action)=>{
                      state.status = "done";
                      state.cartItem = action.payload;
                      if(state.toastId) toast.dismiss(state.toastId);
                      state.toastId = toast.success("cart items fetched ");
               })
               .addCase(fetchFromCartDb.rejected,(state,action)=>{
                      state.status = "failed";
                      state.error = action.error.message;
                      if(state.toastId) toast.dismiss(state.toastId);
                      state.toastId = toast.error("cart items fetched ");
               })
  }
})


export default cartSlice.reducer ;