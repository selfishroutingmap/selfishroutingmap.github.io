import React, { Component } from 'react';

const Marker = props => (
  <div style={{
    color: 'white',
    background: 'white',
    padding: '15px 10px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    transform: 'translate(-50%, -50%)'
  }}>
    <a href = {props.link}>{props.text}</a>
  </div>
);

export default Marker;
