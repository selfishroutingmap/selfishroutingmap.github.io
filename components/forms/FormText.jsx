import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

class FormText extends Component {
	render() {
		return(
			<Form.Group
			as={Col}
			sm={this.props.sm}
			md={this.props.md}
			lg={this.props.lg}
			controlId={this.props.controlId}>
				<Form.Label>
					{this.props.label}:
				</Form.Label>
				<Form.Control
				required
				type="text"
				placeholder={this.props.label}
				/>
			</Form.Group>
		);
	}
}

export default FormText;
