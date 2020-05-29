import React from 'react';

class PhotoSection extends React.Component {

  render() {
    const photo = this.props.photo;

    return (
      <div className="photo-section">
        <figure>
          <img src={photo} alt="Nicolas Photography"/>
        </figure>
      </div>
    );
  }
}

export default PhotoSection;
