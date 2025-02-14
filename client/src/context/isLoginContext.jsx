


import { createContext, useContext, useState } from "react";
const LoginContext = createContext();

export const AppProvider = ({children})=>{
 const [isLoginIn,setIsLoginIn] = useState(true);
 const [showPopup,setShowPopup] = useState(false);
 const [totalQuantity,setTotalQuantity] = useState(0);
 const setLoggedOut = ()=>setIsLoginIn(false);
 const setLoggedIn = ()=>setIsLoginIn(true);
 const removePopup = ()=>setShowPopup(false);
 const putPopup = ()=>setShowPopup(true);

 const [cateogory,setCateogory] = useState("All")

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

