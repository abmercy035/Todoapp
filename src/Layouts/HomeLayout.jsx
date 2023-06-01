import React from 'react'
import { Outlet } from 'react-router-dom'

export default function HomeLayout() {
 return (
  <React.Fragment>
   <div>
    <Outlet />
   </div>
  </React.Fragment>
 )
}
