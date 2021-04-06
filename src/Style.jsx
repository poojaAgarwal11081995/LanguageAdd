/** @format */

import { Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";

function Style() {
	const [data, setData] = useState([]);
	const [item, setItem] = useState([]);

	const loadDoc = () => {
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
				// console.log(this.response);
				let response = this.response;
				setItem(JSON.parse(response));
				// ()
			}
		};
		xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
		xhttp.setRequestHeader("Content-type", "application/json");
		xhttp.send();
	};
	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/posts`, {
			method: "GET",
			headers: {
				"content-type": "application/json",
			},
		})
			.then((res) => res.json())
			.then((result) => setData(result))
			.catch((err) => console.log(err));
	}, []);
	return (
		<>
			<div>
				{data.map((item) => {
					return <p>{item.title}</p>;
				})}
			</div>
			<Button onClick={loadDoc}>dsd</Button>
			{item.map((item) => {
				return <h2>{item.title}</h2>;
			})}
		</>
	);
}

export default Style;
