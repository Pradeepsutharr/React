import React, { useState } from 'react'
import './PopoplLogin.css'
import { assets } from '../../assets/assets'

const PopopLogin = ({setshowlogin}) => {

    const[currentState,setcuurentstate]= useState("Login")

  return (
    <div className='lpgin-popup'>
      <form className="login-page-container">
        <div className="login-popup-title">
                <h2>{currentState}</h2>
                <img onClick={()=>setshowlogin(false)} src={assets.cross_icon} alt="" />

        </div>
        <div className="popup-login-input">
            {currentState==="Login"?<></>:<input type="text" placeholder='Your Name' required/>}
            <input type="email" placeholder='Your email' required />
            <input type="password" placeholder='your password' required />
        </div>
        <button className='iput-button'>{currentState==="Sign up"?"Create account":"Login"}</button>
   <div className="login-popup-condi">
    <input type="checkbox"  required/>
    <p>By Continuing, i agree to the terms of use & privacy policy</p>
   </div>
   {currentState==="Login"
    ?<p>Create new account?  <span onClick={()=>setcuurentstate("Sign up")}>click here</span> </p>
    :<p>Already have account? <span onClick={()=>setcuurentstate("Login")}>Login here</span> </p>
   }


   
      </form>
    </div>
  )
}

export default PopopLogin
