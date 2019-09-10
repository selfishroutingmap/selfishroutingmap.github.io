import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import Marker from './Marker.jsx';

class ComplaintFormMap extends Component {

  render() {
    let markerElements = [
      {id: 1, lat: 37.8715, lng: -122.2730},
      {id: 2, lat: 37.8515, lng: -122.2950},
    ];

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

export default ComplaintFormMap;
