import React from 'react'

export default function Login() {
    return (
        <>

            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Login">
                <span className='fa fa-sign-in'></span>
                Signin
            </button>


            <div className="modal fade" id="Login" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Signin Here</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                </div>
                                <button type="submit" className="btn btn-primary w-100">Submit</button>
                            </form>
                            <button type="button" className="btn btn-primary w-100 my-4"><span className='fa fa-linkedin'></span> Signup with linkedin</button>
                            <button type="button" className="btn btn-primary w-100 my-4"><span className='fa fa-google'></span> Signup with Gmail</button>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Signup</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
