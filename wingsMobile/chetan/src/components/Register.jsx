import React from 'react'
import './Register.css'
import { NavLink } from 'react-router-dom'


export default function Register() {
    return (
        <>
            <form>
                <div className='container y1'>
                    <div className='y2'>Register<hr /></div>
                    <label className="form-label">First Name</label>
                    <input type="text" className="form-control"  aria-describedby="emailHelp" />
                    <label className="form-label">Last Name</label>
                    <input type="text" className="form-control"  aria-describedby="emailHelp" />
                    <label className="form-label">Email Address</label>
                    <input type="email" className="form-control"  aria-describedby="emailHelp" />
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control"  aria-describedby="emailHelp" />
                    <label className="form-label">Confirm Password</label>
                    <input type="password" className="form-control"  aria-describedby="emailHelp" />
                    <label className="form-label">Mobile Number</label>
                    <input type="number" className="form-control"  aria-describedby="emailHelp" />

                    <button type="submit" className="btn btn-danger w-100">Register</button>

                    <div className='y3'>Already Registered? <br/><NavLink to='/signin'>Login</NavLink></div>



                </div>
            </form>
        </>
    )
}
