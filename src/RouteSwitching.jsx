import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OnboardingLayout from './Layouts/OnboardingLayout';

export default function RouteSwitching() {
 return (
  <React.Fragment>
   <Router>
    <Routes>
     <Route path="/" element={ <OnboardingLayout /> }>
     </Route>
    </Routes>
   </Router>
  </React.Fragment>
 )
}
