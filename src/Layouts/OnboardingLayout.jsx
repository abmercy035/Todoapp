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
 const [ count, setCount ] = useState(0);

 useEffect(() => {
  setInterval(() => {
   console.log('j')
  }, 50000)
 }, [])

 class DemoCarousel extends Component {
  render() {
   return (
    <React.Fragment>
     <Carousel className="onboarding-page-carousel" emulateTouch={ false } showArrows={ false } showThumbs={ false } autoPlay={ true } interval={ 3000 } showIndicators={ false } infiniteLoop={ true } stopOnHover={ false }
     >
      <div className='carousel-component'>
       <img src={ sliderImgone } />
      </div>
      <div className='carousel-component'>
       <img src={ sliderImgtwo } />
      </div>
      <div className='carousel-component'>
       <img src={ sliderImgthree } />
      </div>
     </Carousel>
     <Carousel className="carousel-text-content" showArrows={ false } emulateTouch={ false } showThumbs={ false } autoPlay={ true } interval={ 3000 } infiniteLoop={ true } stopOnHover={ false } showStatus={ false } showIndicators={ false }
     >
      <div className='carousel-component'>
       <span className="text-title">Welcome to aKing</span>
       <p className="text-body">
        Whats going to happen tomorrow?
       </p>
      </div>
      <div className='carousel-component'>
       <span className="text-title">Work happens</span>
       <p className="text-body">
        Get notified when work happens.
       </p>
      </div>
      <div className='carousel-component'>
       <span className="text-title">Task and assign </span>
       <p className="text-body">
        Task and assign them to colleagues
       </p>
      </div>
     </Carousel>
     <footer>
      <Button value="Get started"  click={ () => navigate('/signup') }/>
      <Button value="Log In"  click={ () => navigate('/login') } />
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
