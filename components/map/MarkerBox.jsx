import React, { Component } from 'react';
import styled from 'styled-components';

const MarkerBoxContainer = styled.div`
  width: 200px;
  color: 'white',
  backgroundColor: 'white' !important,
  padding: '15px 10px',
  display: 'inline-flex',
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '100%',
  transform: 'translate(-50%, -50%)'
`;

const MarkerBox = props => (
  <MarkerBoxContainer>
    <a href = {props.link} target = "_blank">
      {props.title} ({props.date})
    </a>
  </MarkerBoxContainer>
);

export default MarkerBox;
