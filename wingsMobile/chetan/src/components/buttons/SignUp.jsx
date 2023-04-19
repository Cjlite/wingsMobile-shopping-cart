import React from 'react'

export default function SignUp() {
  return (
    <div>
<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Signup"><span className='fa fa-user-plus'></span>
 Signup
</button>

<div className="modal fade" id="Signup" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Signup</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputUsername" className="form-label">Username</label>
    <input type="text" className="form-control" id="exampleInputUsername" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
  <label for="exampleInputPhoneNumber" className="form-label">Phone Number</label>
    <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword2" className="form-label">Confirm Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" className="btn btn-primary w-100">Submit</button>
</form>
<button type="button" className="btn btn-primary w-100 my-4"><span className='fa fa-linkedin'></span> Signup with linkedin</button>
                            <button type="button" className="btn btn-primary w-100 my-4"><span className='fa fa-google'></span> Signup with Gmail</button>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Login">Login</button>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
