import React from 'react';

import Swiper from 'react-id-swiper';
import Slide from './Slide';

import {ArrowRightIcon} from '../Icons';

import 'swiper/css/swiper.css';

class Slider extends React.Component {
  render() {

    const slides = this.props.data.map((slide, index) => <Slide key={index} data={slide}/>);

    const params = {
      spaceBetween: 30,
      effect: "fade",
      loop: true,
      pagination: {
        el: '.slider-pagination',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.slider-button-next',
        prevEl: '.slider-button-prev'
      },
      renderPrevButton: () => <div className="slider-button slider-button-prev"><ArrowRightIcon/></div>,
      renderNextButton: () => <div className="slider-button slider-button-next"><ArrowRightIcon/></div>,
    };

    return (
    	<div className="slider-container">
        <Swiper {...params}>
          {slides}
        </Swiper>
        <div className="slider-pagination"></div>
      </div>
    );
  }
}

export default Slider;
