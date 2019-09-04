import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import Marker from './Marker.jsx';

class SelfishRoutingArticleMap extends Component {

  render() {

    return (
       <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCULcgZ0hCCd-SwlrAUfqy2bOTur3-UVhQ" }}
        defaultCenter={{lat: 37.87, lng: -122.27}}
        defaultZoom={11}
      >
      {markerElements.map((value, index) => {
        return <Marker
          key={value.id}
          lat={value.lat}
          lng={value.lng}
          text={'Loc'}
        />
      })}
      </GoogleMapReact>
    );
  }
}

export default SelfishRoutingArticleMap;
