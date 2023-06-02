import React from 'react'
import { useNavigate } from 'react-router-dom'
import backIcon from '../../assets/icons/back-icon.svg'
import Button from '../../components/button/Button'
import Input from '../../components/input/Input'
import "./loginandsignup.css"
export default function Signup() {
 const navigate = useNavigate();
 return (

  <div className='login-signup-container'>
   <div className="heading">
    <div className='top-nav-btn' onClick={ () => navigate("/") }>
     <img src={ backIcon } alt="" />
    </div>
    <div className="page-title">
     <div className="title-text">
      Sign up for an account
     </div>
     <div className="sub-title-text">
      fill the form to continue
     </div>
    </div>
   </div>
   <div className="form-conatainer">
    <form className="login-form forms">
     <div className="form-group">
      <label htmlFor="username">Full name</label>
      <Input id="username" pl="Enter your Full name" />
     </div>   <div className="form-group">
      <label htmlFor="username">Username</label>
      <Input id="username" pl="Enter your email" />
     </div>
     <div className="form-group">
      <label htmlFor="username">Password</label>
      <Input id="username" pl="Enter your password" />
     </div>
    </form>
    <div className="form-nav-links">
     <div className="forgot-password-link" onClick={ () => navigate('/login') }>Already have an account? Sign in</div>
    </div>
    <Button value={ "Sign up" } cls="login-form-btn" click={ () => navigate('/login') } />
   </div>
  </div>
 )
}
