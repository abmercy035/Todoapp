import React, { Component, useEffect, useState } from 'react';
import sliderImgone from "../assets/svg/eventboard.svg"
import sliderImgtwo from "../assets/svg/boywithcape.svg"
import sliderImgthree from "../assets/svg/manandwomanstanding.svg"
import '../pages/onboarding/onboarding.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Button from '../components/button/Button';
import { useNavigate } from 'react-router-dom';

export default function OnboardingLayout() {

 const navigate = useNavigate()
 const [ slideCount, setSlideCount ] = useState(0)
 const [ slideData, setSlideData ] = useState([
  {
   img: sliderImgone,
   title: `Welcome to aKing!`,
   text: " Whats going to happen tomorrow?"

  } ]);


 class DemoCarousel extends Component {
  render() {
   return (
    <React.Fragment>
     <div className="onboarding-page-carousel">

      <div className='carousel-component'>

       <img src={ sliderImgone } />
       <div className='carousel-text-content'>
        <span className="text-title">Welcome to aKing!</span>
        <p className="text-body">
         Whats going to happen tomorrow?
        </p>
       </div>
      </div>
      {/* <div className='carousel-component'>
      <img src={ sliderImgtwo } />
      <div className='carousel-component'>
      <span className="text-title">Work happens</span>
        <p className="text-body">
        Get notified when work happens.
        </p>
        </div>
        </div>
        <div className='carousel-component'>
        <img src={ sliderImgthree } />
        <div className='carousel-component'>
        <span className="text-title">Task and assign </span>
        <p className="text-body">
         Task and assign them to colleagues
        </p>
       </div>
      </div> */}
     </div>
     <footer>
      <Button value="Get started" click={ () => navigate('/signup') } />
      <Button value="Log In" click={ () => navigate('/login') } />
     </footer>
    </React.Fragment >
   );
  }
 };
 return (
  <div className="onboarding-page-container">
   <DemoCarousel />
  </div>
 )
}
