import React from 'react';

import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import Slide from './Slide';

class Slider extends React.Component {
  render() {

    const slides = this.props.data.map((slide, index) => <Slide key={index} data={slide}/>);

    const params = {
      spaceBetween: 50,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    };

    return (
    	<div className="slider-container">
        <Swiper {...params}>
          {slides}
        </Swiper>
      </div>
    );
  }
}

export default Slider;
