import React from 'react'
import { NavLink } from 'react-router-dom'
import DATA from './Data'
import './Product.css'

export default function Product() {
  const mobile=(item)=>{
    return(
      
      <div className="card d-flex justify-conent-between" id="space" style={{width: "18rem"}}>
      <img src={item.image} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{item.Name}</h5>
        <p className="card-text"><b>Price:₹</b>{item.price}</p>
        <NavLink to={`/product/${item.id}`} className="btn btn-primary">View Details</NavLink>
      </div>
    </div> 
    )
  }
  return (
    <div  className='productbody'>
  <div className="container py-5">
  <div className="row">
    {DATA.map(mobile)}
    </div>
  </div>
    </div>
  )
}
