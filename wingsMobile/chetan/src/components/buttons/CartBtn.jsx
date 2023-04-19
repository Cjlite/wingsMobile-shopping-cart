import React from 'react'
import { NavLink } from 'react-router-dom'
import {useSelector} from 'react-redux'

export default function CartBtn() {
  const state=useSelector((state)=>state.addItem)
  return (
    <>
    <div>
        <NavLink to="/cart" className="btn btn-danger">
            <span className='fa fa-shopping-cart'></span>Cart({state.length})
        </NavLink>
    </div>
    </>
  )
}
