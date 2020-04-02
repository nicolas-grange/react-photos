import React from 'react';
import Fade from 'react-reveal/Fade';
import Swiper from 'react-id-swiper';
import Slide from './Slide';
import {ArrowRightIcon, SwipeIcon} from '../Icons';
import 'swiper/css/swiper.css';

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

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
      on: {
        'slideChange': () => {
          this.setState(
            (prevState, props) => ({ count: prevState.count + 1 })
          );
        }
      }
    };

    return (
    	<div className="slider-container">
        <Fade bottom>
          <Swiper {...params}>
            {slides}
          </Swiper>
          <div className="slider-pagination"></div>
          {this.state.count < 2 ? (<div className="slider-swipe"><SwipeIcon/></div>) : ''}
        </Fade>
      </div>
    );
  }
}

export default Slider;
