import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OnboardingLayout from './Layouts/OnboardingLayout';

export default function RouteSwitching() {
 return (
  <React.Fragment>
   <Router>
    <Routes>
     <Route path="/" element={ <OnboardingLayout /> } />
     <Route path="/login" element={ <OnboardingLayout /> } />
     <Route path="/signup" element={ <OnboardingLayout /> } />
    </Routes>
   </Router>
  </React.Fragment>
 )
}
