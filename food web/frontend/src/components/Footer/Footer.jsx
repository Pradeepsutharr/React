import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-content">
          <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Your go-to destination for fresh, delicious meals delivered fast. We pride ourselves on quality, offering a diverse menu that caters to every taste. Whether you're in the mood for comfort food or something new, we've got you covered. Experience seamless service, from easy online ordering to prompt delivery, ensuring every meal is a delight.</p>
               <div className="footer-item-icon">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
                </div>
          </div>
          <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>

          </div>

          <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-212-565-9879</li>
                <li>contact@tomato.com</li>
            </ul>

          </div>

            
        </div>
        <hr />
        <p className='footer-copyright'>copyright 2024 @ Tomato.com - All right</p>
      
    </div>
  )
}

export default Footer
