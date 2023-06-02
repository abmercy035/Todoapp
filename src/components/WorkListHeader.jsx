import React from 'react'
import menu_icon from "../assets/icons/menu.svg"
import './worklistheader.css'
export default function WorkListHeader() {


 return (
  <div className='header-container'>
   <div className="header-title">
    Work List
   </div>
   <div className="header-option-icon">
    <img src={ menu_icon } alt="" />
   </div>
   <div className="header-nav">
    <div className="nav-item">Today</div>
    <div className="nav-item">Month</div>
   </div>
  </div>
 )
}
