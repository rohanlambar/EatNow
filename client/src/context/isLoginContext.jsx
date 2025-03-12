


import { createContext, useContext, useEffect, useState } from "react";
const LoginContext = createContext();

export const AppProvider = ({children})=>{
 const [isLoginIn,setIsLoginIn] = useState(false);
 const [showPopup,setShowPopup] = useState(true);
 const [token , setToken ] = useState('');
 const [totalQuantity,setTotalQuantity] = useState(0);
 const setLoggedOut = ()=>setIsLoginIn(false);
 const setLoggedIn = ()=>setIsLoginIn(true);
 const removePopup = ()=>setShowPopup(false);
 const putPopup = ()=>setShowPopup(true);

 const [cateogory,setCateogory] = useState("All")

 useEffect(() => {
   const checkToken = ()=>{
      if(localStorage.getItem("jwt_token")){
         setToken(localStorage.getItem("jwt_token"));
         setIsLoginIn(true)
         setShowPopup(false);
      }
 }
    checkToken();
 }, [])
 
 
 const putCateogory = (value)=>{
    setCateogory(value);
 }

 const contextValue  = {
    isLoginIn,
    setLoggedOut,
    setLoggedIn,
    showPopup,
    removePopup,
    putPopup,
    cateogory,
    putCateogory,
    totalQuantity,
    setTotalQuantity,
 };
 return(
    <LoginContext.Provider value={contextValue}>
        {children}
    </LoginContext.Provider>
 );
}

export const useAppContext = ()=>{
    const context = useContext(LoginContext);
    if(!context) throw new Error("no context available");
    return context
}

