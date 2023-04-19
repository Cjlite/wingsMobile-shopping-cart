import React from 'react'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { delItem } from '../redux/actions/index';
import './Cart.css'

const Cart = () => {
  const state = useSelector((state) => state.addItem)
  const dispatch = useDispatch()
  const handleClose = (item) => {
    dispatch(delItem(item))
  }
  const cartItems = (cartItem) => {
    return (
      <div class="card" style={{width : '18rem',marginLeft:"100px"}}>
        <img src={cartItem.image} class="card-img-top" id="cartimg"  alt="..." />
        <div class="card-body">
        <h5 className="card-title">{cartItem.Name}</h5>
        <p className="card-text"><b>Price:₹</b>{cartItem.price}</p>
        <button className='btn btn-danger' onClick={() => handleClose(cartItem)}>remove</button>

          </div>        
      </div>
      
    );
  };
  const button = () => {
    return (
      <NavLink className="btn btn-success" to="/checkout">proceed to checkout</NavLink>
    )
  }
  return (
    <>
    <div className="container cartBodyMain">
      <div className="row">
      {state.map(cartItems)}
      {state.length !== 0 && button()}
      </div>
      </div>

    </>
  )
}

export default Cart;
