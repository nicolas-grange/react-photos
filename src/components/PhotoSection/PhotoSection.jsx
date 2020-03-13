import React from 'react';

class PhotoSection extends React.Component {
  render() {
  	const photoAbout = this.props.photo;
  	
    return (
    	<div className="photo-section">
    		<figure>
    			<img src={photoAbout} alt="Daguet Photographie"/>
    		</figure>
    	</div>
    );
  }
}

export default PhotoSection;
