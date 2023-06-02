import React from 'react'
import { useNavigate } from 'react-router-dom'
import backIcon from '../../assets/icons/back-icon.svg'
import Button from '../../components/button/Button'
import Input from '../../components/input/Input'
import "./loginandsignup.css"
export default function ForgotPassword() {

 const navigate = useNavigate()
 return (

  <div className='login-signup-container'>
   <div className="heading">
    <div className='top-nav-btn'>
     <img src={ backIcon } alt="" onClick={ () => navigate("/") } />
    </div>
    <div className="page-title">
     <div className="title-text">
      Forgot Password
     </div>
     <div className="sub-title-text">
      Please enter your email below
     </div>
    </div>
   </div>
   <div className="form-conatainer">
    <form className="login-form forms">
     <div className="form-group">
      <label htmlFor="username">Username</label>
      <Input id="username" pl="Enter your email" />
     </div>
    </form>
    <Button value={ "Send Request" } cls="login-form-btn" click={ () => navigate('/login') } />
   </div>
  </div>
 )
}
