import React from 'react'
import {NavLink} from 'react-router-dom'

import './Signin.css'

export default function Login() {
  return (
    <>
      <form>
        <div className='container c2'>
          <div class="row">
            <div class="col-md-12 c1">Login</div><hr/>
          </div>

          <div class="row">
            <div class="col-md-6"><div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
              </div>
            </div>
            <div class="col-md-6"><div className='c4'>OR<br/>Login Using<br/> <br/>
            <div className='fa fa-facebook c3 c5'> Facebook</div><br/><br/>
            <div className='fa fa-google c3 c6'> Google</div></div>
          </div>
          </div>
          <button type="submit" className="btn btn-danger w-50 c8">Continue</button><br/><br/>
          <div className='c7'>Don't Have an Account Yet? <br/><NavLink to='/register'>Register</NavLink></div>
        </div>
        
        <div>
        </div>
      </form>
    </>
  )
}
