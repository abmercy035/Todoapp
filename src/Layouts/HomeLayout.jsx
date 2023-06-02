import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'

export default function HomeLayout() {
 return (
  <React.Fragment>
   <Outlet />
   <Footer />
  </React.Fragment>
 )
}
