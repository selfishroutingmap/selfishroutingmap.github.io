import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ComplaintForm from '../forms/ComplaintForm.jsx';
import ComplaintFormMap from '../map/ComplaintFormMap.jsx';

import '../../css/bootstrap.css';

const ComplaintFormPageTitle = props => (
    <Row><h2>Selfish Routing Complaint Form</h2></Row>
);

const ComplaintFormColumn = props => (
  <Col md = {6}>
    <ComplaintForm />
  </Col>
);

const ComplaintFormMapColumn = props => (
  <Col md = {6}>
    <div style={{width: '100%', height: '400px'}}>
    <ComplaintFormMap />
    </div>
  </Col>
);

const ComplaintFormRow = props => (
  <Row>
    <ComplaintFormColumn />
    <ComplaintFormMapColumn />
  </Row>
);

class ComplaintPage extends Component {
  render() {
    return (
      <Container>
        <br />
        <ComplaintFormPageTitle />
        <br />
        <ComplaintFormRow />
      </Container>
    );
  }
}

export default ComplaintPage;
