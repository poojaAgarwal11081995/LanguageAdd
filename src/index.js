/** @format */

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "react-slideshow-image/dist/styles.css";
import reactDom from "react-dom";
import { Slide } from "react-slideshow-image";
// ReactDOM.render(
// 	<React.StrictMode>
// 		<Provider store={store}>
// 			<BrowserRouter basename="/">
// 				<App />
// 			</BrowserRouter>
// 		</Provider>
// 	</React.StrictMode>,
// 	document.getElementById("root"),
// );

export const Image = () => {
	const slideImages = [
		"https://react-slideshow.herokuapp.com/assets/images/slide_2.jpg",
		"https://react-slideshow.herokuapp.com/assets/images/slide_7.jpg",
		"https://react-slideshow.herokuapp.com/assets/images/slide_5.jpg",
		"https://images.unsplash.com/photo-1472152083436-a6eede6efad9?ixlib=rb-0.3.5&s=93a9b1fd63f0d00e2edac3cea5650819&auto=format&fit=crop&w=749&q=80",
		"https://images.unsplash.com/photo-1474436799594-1974f1add7ad?ixlib=rb-0.3.5&s=f5fc0f9a97ed3dc7d8f069470b51a864&auto=format&fit=crop&w=724&q=80",
		"https://images.unsplash.com/photo-1475687111391-295db56c4d68?ixlib=rb-0.3.5&s=31e11f83c2196cf8c3df3afcbea3974f&auto=format&fit=crop&w=837&q=80",
		"https://images.unsplash.com/photo-1490237014491-822aee911b99?ixlib=rb-0.3.5&s=3b012e88f4bd20f38706d25928b51fe6&auto=format&fit=crop&w=750&q=80",
		"https://images.unsplash.com/photo-1482920387559-08269818bcfc?ixlib=rb-0.3.5&s=7d4daea39d40f2f10c879b75f5b7fddd&auto=format&fit=crop&w=750&q=80",
		"https://images.unsplash.com/photo-1486570318579-054c95b01160?ixlib=rb-0.3.5&s=8cb4fb1b4ac3ab4e5335a6f5961d5d86&auto=format&fit=crop&w=890&q=80",
	];
	const properties = {
		duration: 1000,
		transitionDuration: 500,
		infinite: true,
	};

	return (
		<div>
			<Slide {...properties}>
				{slideImages.map((each, index) => (
					<div key={index} className="each-slide">
						<div style={{ backgroundImage: `url(${each})` }}>
							{/* <span>Slide {index + 1}</span> */}
						</div>
					</div>
				))}
			</Slide>
			<div class="marqueeImage">
				<marquee>
					{slideImages.map((each, ind) => {
						return <img src={each} id={ind + 1} alt="hello" />;
					})}
				</marquee>
				;
				{/* <marquee>
					<img
						src="https://images.unsplash.com/photo-1472152083436-a6eede6efad9?ixlib=rb-0.3.5&s=93a9b1fd63f0d00e2edac3cea5650819&auto=format&fit=crop&w=749&q=80"
						id="1"
					/>
					<img
						src="https://images.unsplash.com/photo-1474436799594-1974f1add7ad?ixlib=rb-0.3.5&s=f5fc0f9a97ed3dc7d8f069470b51a864&auto=format&fit=crop&w=724&q=80"
						id="2"
					/>
					<img
						src="https://images.unsplash.com/photo-1475687111391-295db56c4d68?ixlib=rb-0.3.5&s=31e11f83c2196cf8c3df3afcbea3974f&auto=format&fit=crop&w=837&q=80"
						id="3"
					/>
					<img
						src="https://images.unsplash.com/photo-1490237014491-822aee911b99?ixlib=rb-0.3.5&s=3b012e88f4bd20f38706d25928b51fe6&auto=format&fit=crop&w=750&q=80"
						id="4"
					/>
					<img
						src="https://images.unsplash.com/photo-1482920387559-08269818bcfc?ixlib=rb-0.3.5&s=7d4daea39d40f2f10c879b75f5b7fddd&auto=format&fit=crop&w=750&q=80"
						id="5"
					/>
					<img
						src="https://images.unsplash.com/photo-1486570318579-054c95b01160?ixlib=rb-0.3.5&s=8cb4fb1b4ac3ab4e5335a6f5961d5d86&auto=format&fit=crop&w=890&q=80"
						// onclick={() => func(6)}
						id="6"
					/>
				</marquee> */}
			</div>
		</div>
	);
};
ReactDOM.render(<Image />, document.getElementById("root"));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
