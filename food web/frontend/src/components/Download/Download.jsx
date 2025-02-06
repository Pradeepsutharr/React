import React from 'react'
import './download.css'
import { assets } from '../../assets/assets'

const Download = () => {
  return (
    <div className='app-download' id='download-app'>
        <p>For Better Experiance Download<br /> Tomato app</p>
       <div className='download-app-image'>
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
       </div>

      
    </div>
  )
}

export default Download
