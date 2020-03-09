import React from 'react';

import Button from '../Button/Button';

class Slide extends React.Component {
  render() {

    const data = this.props.data;

    return (
    	<div className="container-slide swiper-slide">
        <figure>
          <img alt={data.img.alt} src={data.img.src}/>
        </figure>
        <div className="text-container">
          <h3>{data.textLink.title}</h3>
          <p>{data.textLink.text}</p>
          <Button data={data.textLink.link}/>
        </div>
      </div>
    );
  }
}

export default Slide;
