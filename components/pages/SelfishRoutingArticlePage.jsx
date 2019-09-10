import React, { Component } from 'react';

import GoogleMapReact from 'google-map-react';

import Marker from '../map/Marker.jsx';

const generateStochasticity = () => (Math.random() - 0.5) / 100;

class SelfishRoutingArticlePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      values: []
    };
  }

  componentDidMount() {
    fetch('http://dzdaniel84.pythonanywhere.com/articles')
    .then(res => res.json())
    .then((data) => {
      const json_list = data.json_list.map((item, index) => ({
        id: item.id,
        title: item.title,
        date: item.pub_year,
        url: item.url,
        lat: item.lat + generateStochasticity(),
        lng: item.lng + generateStochasticity(),
      }));
      return {
        json_list,
      };
    })
    .then((data) => {
      this.setState({ values: data.json_list })
    })
    .catch(console.log)
  }

  render() {

    return (
      <div style={{width: '100%', height: '800px'}}>
       <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCULcgZ0hCCd-SwlrAUfqy2bOTur3-UVhQ" }}
        defaultCenter={{lat: 37.87, lng: -122.27}}
        defaultZoom={11}
      >
      {this.state.values.map((value, index) => {
        return <Marker
          key={value.id}
          lat={value.lat}
          lng={value.lng}
          title={value.title}
          link={value.url}
          date={value.date}
        />
      })}
      </GoogleMapReact>
    </div>
    )
  }
}

export default SelfishRoutingArticlePage;
