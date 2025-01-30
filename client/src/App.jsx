import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Navbar from "./components/Navbar"
import Card from "./pages/Card"
import Placeorder from "./pages/Placeorder"
import Homepage from "./pages/Homepage"



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
    path:'/menu',
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
