import React, { Component } from 'react';
import styled from 'styled-components';

import MarkerBox from './MarkerBox.jsx';
import MarkerIcon from './MarkerIcon.jsx';

const WhiteBackground = styled.div`
  background-color: white;
`;

class Marker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHoveredOver: false
    };
  }

  render() {
    return (
      <WhiteBackground
        onMouseEnter={() => this.setState({ isHoveredOver: true })}
        onMouseLeave={() => this.setState({ isHoveredOver: false })}
      >
          <MarkerIcon link = {this.props.link} />
          { this.state.isHoveredOver &&
            <MarkerBox
              title = {this.props.title}
              link = {this.props.link}
              date = {this.props.date}
            />
          }
      </WhiteBackground>
    );
  }
}

export default Marker;
