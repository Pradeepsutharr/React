import React, { useContext } from 'react'
import "./cart.css"
import { StoreContext } from '../../context/StoreContext'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'

const Cart = () => {

   const {cartItems,food_list,removeFromCart,geTotalcartitem} = useContext(StoreContext)
   const navigate = useNavigate();
  return (
    <div className='cart'>
      <div className="cart-item">
        <div className="cart-item-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item,index)=>{
          if(cartItems[item._id]>0)
        {
          return(
            // eslint-disable-next-line react/jsx-key
            <div>
            <div className="cart-item-title cart-items-item">
              <img src={item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.price}</p>
              <p>{cartItems[item._id]}</p>
              <p>{item.price*cartItems[item._id]}</p>
              <p onClick={()=>removeFromCart(item._id)}  className="cross">×</p>
              </div>
              <hr />
          </div>

          )

        }

         })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
            <h2>Cart total</h2>
             <div>
               <div className="cart-total-details">
                    <p>Sub total</p>
                      <p>${geTotalcartitem()}</p>
                 </div>
                 <hr />
                   <div className="cart-total-details">
                      <p>Delivery Charges</p>
                         < p>${geTotalcartitem()===0?0:2}</p>
                       </div>
                       <hr />
                      <div className="cart-total-details">
                        <b>Total</b>
                           <b>${geTotalcartitem()===0?0:geTotalcartitem()+2}</b>
                       </div>
                       
                    </div>
                      <button onClick={()=>navigate('/order')}>PROCEED TO CKECKPOINT</button>
                </div>
                <div className="promocode">
                  <div>
                    <p>If you have prom-code, Enter it here</p>
                    <div className="promocode-detail">
                      <input type="text" placeholder='Promocode here' />
                      <button>Submit</button>

                    </div>
                  </div>
                </div>
               

            </div>
      </div>
  )
}

export default Cart


