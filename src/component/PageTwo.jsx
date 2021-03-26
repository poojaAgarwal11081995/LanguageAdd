/** @format */

import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
const useStyles = makeStyles({
	table: {
		minWidth: 650,
	},
});
function PageTwo(props) {
	console.log(">>>>>>", props);
	const classes = useStyles();

	return (
		<div>
			<TableContainer component={Paper}>
				<Table className={classes.table} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell align="center">Name</TableCell>
							<TableCell align="center">Email</TableCell>
							<TableCell align="center">Contact</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						<TableRow>
							<TableCell align="center">{props.name}</TableCell>
							<TableCell align="center">{props.email}</TableCell>
							<TableCell align="center">{props.contact}</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</TableContainer>
			{/* hello page two {props.name} {props.contect} {props.email} */}
		</div>
	);
}
const mapStateToProp = (response) => {
	return response;
};
export default connect(mapStateToProp, null)(PageTwo);
// import { connect } from "react-redux";
