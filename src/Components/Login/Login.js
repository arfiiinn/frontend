import React from 'react'
import './Login.css'
import cglogo from '../../images/cg-logo.png'

function Login() {
  return (
    <div className="card login-card mx-auto">
    <form className='login-form'>
        <div className='login-body'>
        <h3 className='login-head'>
        <img src={cglogo} className="cg-logo mb-4" alt="Cg-Logo"/>iTransform Learning</h3>
        <div className="mb-3">
            <label className="form-label login-label">Corp Id</label>
            <input type="email" className="form-control" placeholder='Enter corp email address'/>
        </div>
        <div className="mb-3">
            <label className="form-label login-label">Password</label>
            <input type="password" id="password" className="form-control" placeholder="Enter password" />
            <i class="bi bi-eye-slash" id="togglePassword"></i>
        </div>
        <center>
            <button type="submit" className="login-btn">Login</button>
        <br/>
        <a href="/" className="login-link link-info">New User?</a></center>
        </div>
    </form>
    </div>
  )
}

export default Login
