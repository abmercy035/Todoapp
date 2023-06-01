import React, { Component, useState } from 'react';
import sliderImgone from "../assets/svg/eventboard.svg"
import sliderImgtwo from "../assets/svg/boywithcape.svg"
import sliderImgthree from "../assets/svg/manandwomanstanding.svg"
import '../pages/onboarding/onboarding.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function OnboardingLayout() {
 const [ carouselTextIndex, setCarouselTextIndex ] = useState(0);
 const carouselText = () => {
  if (carouselTextIndex <= 0) {
   console.log('he')
  }
 }


 class DemoCarousel extends Component {
  render() {
   return (
    <React.Fragment>
     <Carousel className="onboarding-page-carousel" showThumbs={ false } autoPlay={ true } interval={ 2000 } infiniteLoop={ true } onChange={ () => carouselText() } >

      <div className='carousel-component'>
       <img src={ sliderImgone } />

      </div>
      <div className='carousel-component'>
       <img src={ sliderImgone } />
      </div>
      <div className='carousel-component'>
       <img src={ sliderImgtwo } />
      </div>
     </Carousel>
     <div className="carousel-text-content">
      <span className="text-title">Welcome to aKing</span>
      <p className="text-body">
       Whats going to happen tomorrow?
      </p>
     </div>
     <footer>
      <button>Get Started</button>
      <button>Log In</button>
     </footer>
    </React.Fragment>
   );
  }
 };
 return (
  <div className="onboarding-page-container">
   <DemoCarousel />
  </div>
 )
}
