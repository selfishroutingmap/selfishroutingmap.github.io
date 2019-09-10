import React, { Component } from 'react';
import styled from 'styled-components';

const MarkerImage = '../../img/car.png';

const MarkerIconContainer = styled.img`
  width: 50px;
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '100%',
  transform: 'translate(-50%, -50%)'
`;

const MarkerIcon = props => (
  <a href = {props.link} target = "_blank">
  <MarkerIconContainer src = {MarkerImage}/>
  </a>
);

export default MarkerIcon;
