import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Navbar from "./components/Navbar"
import Card from "./pages/Card"
import Placeorder from "./pages/Placeorder"
import Homepage from "./pages/Homepage"
import Header from "./components/Header"


function App() {
  
const router = createBrowserRouter([
  {
    path:'/',
    element:
       <>
           <Homepage/>
       </>
   
  },
  {
    path:'/cart',
    element:
    <>
      <Card/>
    </>
  },
  {
    path:'/test',
    element:
    <>
        <Placeorder/>
    </>
  },
  {
    path:'/header',
    element:
    <>
        <Header/>
    </>
  },
])
  return (
    <>
    
    <RouterProvider router={router}>
     <Navbar/>
     </RouterProvider>
    </>
  )
}

export default App
