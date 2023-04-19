import React,{useState} from 'react'
import {useParams} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import{addItem,delItem} from '../redux/actions/index'
import DATA from './Data'
import './ProductDetail.css'

export default function ProductDetail() {
  const dispatch=useDispatch()
    const mobid=useParams()
    const mobDetail=DATA.filter(x=>x.id==mobid.id)
    const mobile=mobDetail[0]
    const [cartBtn,setcartBtn]=useState("Add to cart")
    const handleCart=(mobile)=>{
        if(cartBtn==="Add to cart"){
          dispatch(addItem(mobile))
            setcartBtn('Rermove from cart')

        }
        else{
          dispatch(delItem(mobile))
            setcartBtn("Add to cart")
    }
    }


  return (
    <>
        <div className="container py-3 productDtailBody">
          <div className="row">
    <div className="col-md-6 img1">
      <img src={mobile.image} alt={mobile.Name} id="productdetailimage"/>
    </div>
    <div className="col-md-6">
    <h3><b>Price:₹</b>{mobile.price}</h3>
        <h3><b>ROM:</b>{mobile.ROM}</h3>
        <h3><b>RAM:</b>{mobile.RAM}</h3>
        <h3><b>Camera:</b>{mobile.Camera}</h3>
        <h3><b>Color:</b>{mobile.Color}</h3>
    </div>
    </div>
    <div className="row">
    <div className="col-md-6">
        <h1 className='display-5 fw-bold'>{mobile.Name}</h1>
    </div>
    <div className="col-md-6">
    <button className='btn btn-warning' onClick={()=>handleCart(mobile)}>{cartBtn}</button>

    </div>
    </div>
   </div>
    </>
  )
}
