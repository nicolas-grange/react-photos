import React from 'react';
import Fade from 'react-reveal/Fade';


class PhotoSection extends React.Component {
  render() {
  	const photoAbout = this.props.photo;
  	
    return (
    	<div className="photo-section">
        <Fade left>
      		<figure>
      			<img src={photoAbout} alt="Daguet Photographie"/>
      		</figure>
        </Fade>
    	</div>
    );
  }
}

export default PhotoSection;
