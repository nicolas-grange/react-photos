import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

import mapStyles from './mapStyles.json';

class GoogleMap extends React.Component {
  constructor(props) {
    super(props);
    this.updateMapCenter = this.updateMapCenter.bind(this);
    this.mapRef = null;
  }

  componentDidMount() {
    this.mapRef = this.refs.map;
    window.addEventListener('resize', this.updateMapCenter);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateMapCenter);
  }

  // Loading the map
  mapLoaded(mapProps, map) {
    map.setOptions({
      styles: mapStyles
    });   

    this.updateMapCenter();
  }

  // update the map center position
  updateMapCenter() {
    let center = {
      lat: this.props.data.center.smallScreen.lat,
      lng: this.props.data.center.smallScreen.lng
    }
    // update if it's larger screen
    if(window.matchMedia("only screen and (min-width : 1024px)").matches) { // tablet-landscape
      center = {
        lat: this.props.data.center.fullScreen.lat,
        lng: this.props.data.center.fullScreen.lng
      }
    }

    this.mapRef.map.setCenter(center);
  }

  render() {
    const marker = this.props.data.marker;

    if (!this.props.loaded) {
      return <div className="loading"><p>Loading...</p></div>
    }

    return (
      <Map 
        className="map"
        ref='map'
        google={this.props.google}
        defaultZoom={14}
        mapTypeControl= {false}
        streetViewControl= {false}
        fullscreenControl= {false}
        onReady={(mapProps, map) => this.mapLoaded(mapProps, map)}
      >
        <Marker position={{lat: marker.lat, lng: marker.lng}} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBoXpDxyt_ZlsiWV7-93G-7CT7PZDdCpLQ'
})(GoogleMap);
