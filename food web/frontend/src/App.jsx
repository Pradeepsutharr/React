import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/home'
import Cart from './pages/cart/cart'
import Placeorder from './pages/placeorder/placeorder'
import Footer from './components/Footer/Footer'
import PopopLogin from './components/PopopLogin/PopopLogin'




const App = () => {
  const [showlogin,setshowlogin] = useState(false)

  return (
   
      <>
      {showlogin?<PopopLogin setshowlogin={setshowlogin}/>:<></>}
      <div className='app'>
      <Navbar setshowlogin={setshowlogin}/>
      
    
      
      <Routes>
        < Route path='/' element={<Home/>} />
        < Route path='/cart' element={<Cart/>}/>
        < Route path='/order' element={<Placeorder/>}/>

        

      </Routes>
       
    </div>
    <Footer/>
</>
    
 
  )
}

export default App
