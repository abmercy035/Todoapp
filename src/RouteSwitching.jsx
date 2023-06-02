import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeLayout from './Layouts/HomeLayout';
import OnboardingLayout from './Layouts/OnboardingLayout';
import ForgotPassword from './pages/loginandsignup/Forgotpassword';
import Login from './pages/loginandsignup/Login';
import ResetPassword from './pages/loginandsignup/ResetPassword';
import Signup from './pages/loginandsignup/Signup';
import MyTask from './pages/myTask/MyTask';

export default function RouteSwitching() {
 return (
  <React.Fragment>
   <Router>
    <Routes>
     <Route path="/" element={ <OnboardingLayout /> } />
     <Route path="/login" element={ <Login /> } />
     <Route path="/signup" element={ <Signup /> } />
     <Route path="/verify_email" element={ <ForgotPassword /> } />
     <Route path="/reset_password" element={ <ResetPassword /> } />
     <Route path="/home" element={ <HomeLayout /> } >
      <Route path="mytask" element={ <MyTask /> } />
      <Route path="create" element={ <MyTask /> }>
       <Route path="task" element={ <MyTask /> } />
       <Route path="note" element={ <MyTask /> } />
       <Route path="checklist" element={ <MyTask /> } />
      </Route>
      <Route path="projects" element={ <MyTask /> } />
      <Route path="notes" element={ <MyTask /> } />
      <Route path="profile" element={ <MyTask /> } />
     </Route>
    </Routes>
   </Router>
  </React.Fragment>
 )
}
