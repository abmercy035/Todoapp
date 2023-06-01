import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { NavLink, Link } from 'react-router-dom'
export default function Onboarding(props) {
 const close = () => {
  let nav = document.querySelector('.navigation');
  nav.style.display = 'none'
 }
 const open = () => {
  let nav = document.querySelector('.navigation');
  nav.style.display = 'flex'
 }
 return (
  <React.Fragment>
   <header>
    <div>
     <img src={ "iconMenu" } className='iconMenu' onClick={ open } />
     <div>Supercars</div>
    </div>
    <div className='navigation'>
     <img src={ "closeBtn" } className='closeBtn' onClick={ close } />
     <NavLink to={ '/' } className={ ({ isActive }) => (isActive ? 'link active' : 'link') }>
      Home</NavLink>
     <NavLink to={ '/lamborghini' } className={ ({ isActive }) => (isActive ? 'link active' : 'link') }>
      Lamborghini</NavLink>
     <NavLink to={ '/ferarri' } className={ ({ isActive }) => (isActive ? 'link active' : 'link') }>
      Ferarri</NavLink>
     <NavLink to={ '/mclaren' } className={ ({ isActive }) => (isActive ? 'link active' : 'link') }  >
      Mclaren</NavLink>
    </div>
    <div>
     <div className='itemsCount'>"props.cartSize"</div>
     <Link to={ '/checkout' }>
      <img src={ "iconCart" } className='iconCart' />
     </Link>
     <img src={ "imageAvatar" } className='imageAvatar' />
    </div>
   </header>
   <hr />
   <div className='container'>
    <Outlet />
   </div>
   <footer>THE ODIN PROJECT----GBOTEMI</footer>
  </React.Fragment>
 )
}
