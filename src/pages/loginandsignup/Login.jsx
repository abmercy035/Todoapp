import React from 'react'
import { useNavigate } from 'react-router-dom'
import backIcon from '../../assets/icons/back-icon.svg'
import Button from '../../components/button/Button'
import Input from '../../components/input/Input'
import "./loginandsignup.css"
export default function Login() {

 const navigate = useNavigate()
 return (

  <div className='login-signup-container'>
   <div className="heading">
    <div className='top-nav-btn'>
     <img src={ backIcon } alt="" onClick={ () => navigate("/") } />
    </div>
    <div className="page-title">
     <div className="title-text">
      Welcome back
     </div>
     <div className="sub-title-text">
      Sign in to continue
     </div>
    </div>
   </div>
   <div className="form-conatainer">
    <form className="login-form forms">
     <div className="form-group">
      <label htmlFor="username">Username</label>
      <Input id="username" pl="Enter your email" />
     </div>
     <div className="form-group">
      <label htmlFor="username">Password</label>
      <Input id="username" pl="Enter your password" />
     </div>
    </form>
    <div className="form-nav-links">
     <div className="forgot-password-link" onClick={ () => navigate('/signup') }>Don't have an account? Sign up</div>
     <div className="forgot-password-link" onClick={ () => navigate('/reset_password') }>Forgot password</div>
    </div>
    <Button value={ "Log In" } cls="login-form-btn" click={ () => navigate('/login') } />
   </div>
  </div>
 )
}
