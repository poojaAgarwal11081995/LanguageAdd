/** @format */

import { connect } from "react-redux";
import React, { Component } from "react";
import { formData } from "./../action/action";
import { Link } from "react-router-dom";
class PageOne extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fname: "",
			contect: "",
		};
	}
	handleSubmit = (e) => {
		e.preventDefault();
		let data = {
			fname: this.state.fname,
			contect: this.state.contect,
		};

		this.props.formData(data, this);
	};
	handleChange = (input) => (e) => {
		console.log("input", input);
		console.log("value", e.target.value);
		this.setState({
			[input]: e.target.value,
		});
	};
	render() {
		return (
			<div>
				<br />
				<form>
					<input
						onChange={this.handleChange("fname")}
						name="fname"
						value={this.state.fname}
						type="text"
					/>
					<input
						onChange={this.handleChange("contect")}
						name="contect"
						value={this.state.contect}
						type="text"
					/>

					<button onClick={this.handleSubmit} type="submit">
						<Link to="/pagetwo">Submit</Link>
					</button>
				</form>
			</div>
		);
	}
}

const mapStateToProp = (response) => {
	console.log(response);
	return response;
};
export default connect(mapStateToProp, { formData })(PageOne);
