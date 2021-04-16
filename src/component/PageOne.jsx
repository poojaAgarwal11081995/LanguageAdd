/** @format */

import { connect } from "react-redux";
import React, { Component } from "react";
import { reqFormData } from "./../action/action";
import TextField from "@material-ui/core/TextField";
import * as Constant from "./../action/Constants";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import { Button, Typography } from "@material-ui/core";
class PageOne extends Component {
	constructor(props) {
		super(props);
		this.state = {
			[Constant.Name]: "",
			[Constant.Email]: "",
			[Constant.Contact]: "",
		};
	}

	handleSubmit = (event) => {
		event.preventDefault();
		const { name, contact, email } = this.state;
		let data = {
			[Constant.Name]: name,
			[Constant.Contact]: contact,
			[Constant.Email]: email,
		};

		this.props.reqFormData(data, this);
	};
	handleChange = (input) => (e) => {
		console.log("input", input);
		console.log("value", e.target.value);
		this.setState({
			[input]: e.target.value,
		});
	};
	render() {
		const { name, email, contact } = this.state;
		return (
			<Container maxWidth="sm" style={styles.div}>
				<form>
					<Typography style={styles.Typography}>Login</Typography>
					<Grid>
						<TextField
							id="standard-basic"
							label="Name"
							name="name"
							value={name}
							type="text"
							onChange={this.handleChange("name")}
						/>
					</Grid>
					<Grid>
						<TextField
							id="standard-basic"
							label="Email"
							name="email"
							value={email}
							type="email"
							onChange={this.handleChange("email")}
						/>
					</Grid>
					<Grid>
						<TextField
							id="standard-basic"
							label="Contact"
							name="contact"
							value={contact}
							type="number"
							onChange={this.handleChange("contact")}
						/>
					</Grid>

					<Button
						style={{ marginTop: 30 }}
						variant="contained"
						color="secondary"
						onClick={this.handleSubmit}
						type="submit">
						<Link
							style={{
								"text-decoration": "none",
								"  text-transform": " uppercase",
								"font-family": "Montserrat, sans-serif",
								color: "white",
							}}
							to={Constant.SCREEN_PAGE_TWO}>
							Submit
						</Link>
					</Button>
				</form>
			</Container>
		);
	}
}
const styles = {
	div: {
		border: "1px solid red",
		display: "flex",
		padding: 40,
		width: "300px",
		alignItem: "center",
		justifyContent: "center",
		marginTop: 70,
		bockgroundColor: "transparent",
	},
	Typography: {
		fontWidth: "bold",
		fontSize: "30px",
	},
};

const mapStateToProp = (response) => {
	console.log(response);
	return response;
};
export default connect(mapStateToProp, { reqFormData })(PageOne);
