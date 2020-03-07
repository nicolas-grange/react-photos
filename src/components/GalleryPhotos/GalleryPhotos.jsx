import React from 'react';

import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from 'react-images';


class GalleryPhotos extends React.Component {
  constructor(props) {
    super(props);
    this.openLightbox = this.openLightbox.bind(this);
    this.closeLightbox = this.closeLightbox.bind(this);
    this.state = {
      selectedIndex: 0,
      lightboxIsOpen: false
    }
  }

  openLightbox(e, index) {
    this.setState({
      selectedIndex: index.index,
      lightboxIsOpen: true
    });
  } 

  closeLightbox(e) {
    this.setState({
      selectedIndex: 0,
      lightboxIsOpen: false
    });
  } 

  render() {
    const photos = this.props.photos;
    const heightImg = this.props.heightImg;
    const selectedIndex = this.state.selectedIndex;
    const lightboxIsOpen = this.state.lightboxIsOpen;

    return (
      <div className="gallery-photos">
        <Gallery photos={photos} onClick={this.openLightbox} targetRowHeight={heightImg} />
        <ModalGateway>
          {lightboxIsOpen ? (
            <Modal onClose={this.closeLightbox}>
              <Carousel
                currentIndex={selectedIndex}
                views={photos.map(x => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </div>
    );
  }
}

export default GalleryPhotos;
