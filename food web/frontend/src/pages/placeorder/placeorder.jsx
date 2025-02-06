import React, { useContext } from 'react'
import "./placeorder.css"
import { StoreContext } from '../../context/StoreContext'

const Placeorder = () => {
   const {geTotalcartitem} = useContext(StoreContext)
  return (
   <form  className="palceorder">
    <div className="place-order-left">
      <p className="title">Delivery Informtion</p>
      <div className="multy-info">
        <input type="text" placeholder='First Name' />
        <input type="text"  placeholder='Last Name'/>
      </div>
      <input type="email" placeholder='email'/>
      <input type="text" placeholder='street' />
      <div className="multy-info">
        <input type="text" placeholder='City' />
        <input type="text"  placeholder='State'/>
      </div>
      <div className="multy-info">
        <input type="text" placeholder='Zip code' />
        <input type="text"  placeholder='Country'/>
      </div>
      <input type="text" placeholder='phone' />

    </div>
    <div className="place-order-right">
    <div className="cart-total">
            <h2>Cart total</h2>
             <div>
               <div className="cart-total-details">
                    <p>Sub total</p>
                      <p>${geTotalcartitem()}</p>
                 </div>
                 <hr />
                   <div className="cart-total-details">
                      <p>Delivery free</p>
                         < p>${geTotalcartitem()===0?0:2}</p>
                       </div>
                       <hr />
                      <div className="cart-total-details">
                        <b>Total</b>
                           <b>${geTotalcartitem()===0?0:geTotalcartitem()+2}</b>
                       </div>
                       
                    </div>
                      <button>PROCEED TO PAYMENT</button>
                     
                </div>
                

    </div>

   </form>
  )
}

export default Placeorder



