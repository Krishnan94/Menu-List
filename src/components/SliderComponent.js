import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import './SliderComponent.css'

const items = [
  {
    src: '/assests/images/japanese.jpg',
    altText: 'Slide 1',
    caption: 'All Fusion Cuisine',
    header: 'Pay Less Eat More',
    key: '1'
  },
  {
    src: '/assests/images/buffet1.jpg',
    altText: 'Offer',
    caption: 'Special Buffet dinner',
    header: 'Make Your Stomach Full',
    key: '2'
  },
  {
    src: '/assests/images/history4.jpg',
    altText: 'Slide 3',
    caption: 'Oldest Hotel in Montrel ',
    header: 'History of 180 Years',
    key: '3'
  }
];

export   const PromotionSlider = () =>{
 return( 
  <UncontrolledCarousel className=".carousel-item" items={items} />
 )
}
