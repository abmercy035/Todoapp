import React from 'react'
import { useNavigate } from 'react-router-dom'
import backIcon from '../../assets/icons/back-icon.svg'
import Button from '../../components/button/Button'
import Input from '../../components/input/Input'
import "./loginandsignup.css"
export default function ResetPassword() {
 const navigate = useNavigate();
 return (

  <div className='login-signup-container'>
   <div className="heading">
    <div className='top-nav-btn' onClick={ () => navigate("/login") }>
     <img src={ backIcon } alt="" />
    </div>
    <div className="page-title">
     <div className="title-text">
      Reset Password
     </div>
     <div className="sub-title-text">
      Enter the reset code sent to your email
     </div>
    </div>
   </div>
   <div className="form-conatainer">
    <form className="login-form forms">
     <div className="form-group">
      <label htmlFor="username">Reset code</label>
      <Input id="username" pl="Enter reset code" />
     </div>   <div className="form-group">
      <label htmlFor="username">New password</label>
      <Input id="username" pl="Enter new password" />
     </div>
     <div className="form-group">
      <label htmlFor="username">Confirm password</label>
      <Input id="username" pl="Re-enter new password" />
     </div>
    </form>
    {/* <div className="form-nav-links">
     <div className="forgot-password-link" onClick={ () => navigate('/login') }>Already have an account? Sign in</div>
    </div> */}
    <Button value={ "Change Password" } cls="login-form-btn" click={ () => navigate('/login') } />
   </div>
  </div>
 )
}
