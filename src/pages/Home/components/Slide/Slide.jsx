import React from 'react';
import ImageTextLink from '../../../../components/ImageTextLink/ImageTextLink';

class Slide extends React.Component {
  render() {

    const data = this.props.data;

    return (
    	<div className="container-slide swiper-slide">
        <ImageTextLink data={data}/>
      </div>
    );
  }
}

export default Slide;
