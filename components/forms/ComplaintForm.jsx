import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import FormText from './FormText.jsx';

class ComplaintForm extends Component {

	constructor(props) {
		super(props);
		this.state = {
			firstname: '',
			lastname: '',
			email: '',
			article: '',
			problem: '',
			comments: '',
		}
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
        e.preventDefault();
        var data = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            article: this.state.article,
            problem: this.state.problem,
            comments: this.state.comments,
        };

        fetch("https://....", {
			method: "POST",
			body:  JSON.stringify(data)
		}).then(function(response){
			return response.json();
		}).then(function(data){
			console.log(data)
		});
    }

	logChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

	render(){
		return(
			<Form>
				<Form.Row>
					<FormText
						sm = "12" md="6" lg = "6"
						controlId="firstname"
						label = "First Name"
					/>
					<FormText
						sm = "12" md="6" lg = "6"
						controlId="lastname"
						label = "Last Name"
					/>
				</Form.Row>
				<Form.Row>
					<FormText
						sm = "12" md="12" lg = "12"
						controlId="email"
						label = "Email"
					/>
				</Form.Row>
				<Form.Row>
					<FormText
						sm = "12" md="12" lg = "12"
						controlId="article"
						label = "Article"
					/>
				</Form.Row>
				<Form.Row>
					<Form.Group as={Col} md="12" controlId="problem">
						<Form.Label>Specific Problem:</Form.Label>
						<Form.Control
						required
						as="select"
						>
							<option>Speeding</option>
							<option>School Zone</option>
							<option>Noise</option>
							<option>Pollution</option>
							<option>Excess Traffic</option>
						</Form.Control>
					</Form.Group>
				</Form.Row>
				<Form.Row>
					<Form.Group as={Col} md="12" controlId="comments">
						<Form.Label>Additional Comments (optional):</Form.Label>
						<Form.Control
						as="textarea"
						placeholder="comments"
						/>
					</Form.Group>
				</Form.Row>
				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		);
	}
}


export default ComplaintForm;
