import React from 'react'
import { NavLink } from 'react-router-dom'
// import Login from './buttons/Login'
// import SignUp from './buttons/SignUp'
import CartBtn from './buttons/CartBtn'
import './Header.css'

export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="#">𝔀𝓲𝓷𝓰𝓼 𝓶𝓸𝓫𝓲𝓵𝓮
            {/* <img src='/assets/iphone/yash wings.png' width="300px" height="50px"/> */}
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="mynavbar">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/" id="home">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">ContactUs</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/product">Product</NavLink>
              </li>
              <li className="nav-item" id='login'>
                <div className="btn btn-success btn-sm"><NavLink className="nav-link" to="/signin"><div className='fa fa-user'></div>Login</NavLink></div>
              </li>
              {/* <li className="nav-item dropdown">
          <NavLink className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Products
          </NavLink>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><NavLink className="dropdown-item" to="/product">IPhone</NavLink></li>
            <li><NavLink className="dropdown-item" to="#">One plus</NavLink></li>
            <li><NavLink className="dropdown-item" to="/redmi">Redmi</NavLink></li>
            <li><NavLink className="dropdown-item" to="#">Samsung</NavLink></li>
          </ul>
        </li> */}
            </ul>
            {/* <Login/> */}
            {/* <SignUp/> */}
            <CartBtn />
          </div>
        </div>
      </nav>
    </div>
  )
}
