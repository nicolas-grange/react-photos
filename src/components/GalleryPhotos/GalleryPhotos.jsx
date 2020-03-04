import React, { useState, useCallback } from 'react';

import Gallery from "react-photo-gallery";



class GalleryPhotos extends React.Component {


  render() {


    const photos = this.props.photos;


    return (
      <div>
    	 <Gallery photos={photos}  />
       
      </div>
    );
  }
}

export default GalleryPhotos;
