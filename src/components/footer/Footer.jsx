import React from 'react'
import "./footer.css"
import task_icon from '../../assets/icons/taskcheck.svg'
import dashboard_icon from '../../assets/icons/dashboard.svg'
import plus_icon from '../../assets/icons/plus.svg'
import notechecklist_icon from '../../assets/icons/notechecklist.svg'
import profile_icon from '../../assets/icons/profile.svg'

export default function Footer() {
 return (
  <footer className='home-footer-container'>
   <div className="footer-group">
    <div className="icon-group-container">
     <div className="icon-container">
      <img className='footer-icon' src={ task_icon } alt="" />
      <label className='footer-icon-label'>
       My Task
      </label>
     </div>

     <div className="icon-container"><img className='footer-icon' src={ dashboard_icon } alt="" />
      <label className='footer-icon-label'>
       Menu
      </label>
     </div>
    </div>

    <div className="icon-center-icon"><img className='footer-icon' src={ plus_icon } alt="" />
    </div>
    <div className="icon-group-container">
     <div className="icon-container"><img className='footer-icon' src={ notechecklist_icon } alt="" />
      <label className='footer-icon-label'>
       Quick
      </label></div>
     <div className="icon-container"><img className='footer-icon' src={ profile_icon } alt="" />
      <label className='footer-icon-label'>
       Profile
      </label></div>
    </div>
   </div>
  </footer>
 )
}
