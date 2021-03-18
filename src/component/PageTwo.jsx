/** @format */

import React from "react";
import { connect } from "react-redux";
function PageTwo(props) {
	console.log(">>>>>>", props);
	return (
		<div>
			hello page two {props.fname} {props.contect}
		</div>
	);
}
const mapStateToProp = (response) => {
	return response;
};
export default connect(mapStateToProp, null)(PageTwo);
