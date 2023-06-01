import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Onboarding from "./Onboarding";
const OnboardingRoute = () => {

 return (
  <Route path="/" element={ <Onboarding /> }>
  </Route>
 );
};
export default OnboardingRoute; 