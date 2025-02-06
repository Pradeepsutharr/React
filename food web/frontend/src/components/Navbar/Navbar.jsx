import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'


const Navbar = ({ setshowlogin})=> {

    const[menu,setmanu] = useState("home")
    const{food_list,cartItems} = useContext(StoreContext)
    

  return (
    <div className='Navbar'>
        <Link to={'/'}><img src={assets.logo} alt="" className='logo'/></Link>
        <ul className='navbar-menu'>
           <Link to={'/'}><li onClick={()=>setmanu("home")} className={menu==="home"?"active":""}>home</li></Link>
            <li onClick={()=>setmanu("menu")}  className={menu==="menu"?"active":""}>menu</li>
            <li onClick={()=>setmanu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile-app</li>
            <li onClick={()=>setmanu("contact-us")} className={menu==="contact-us"?"active":""}>contact-us</li>
             </ul>
             <div className='navbar-right'>
                <img src={assets.search_icon} alt="" />
                <div className='navbar-search-icon'>
                   <Link to={'/cart'}><img src={assets.basket_icon} alt="" /></Link>
                   {food_list.map((item,index)=>{
                    if(cartItems[item._id]>0){
                      return(
                      <div className='dot'></div>
                      )
                    }

                   })

                    }
                 
                    
                </div>
                <button onClick={()=>setshowlogin(true)}>sign in</button>

             </div>

      
    </div>
  )
}

export default Navbar
