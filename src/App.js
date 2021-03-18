/** @format */

import "./App.css";
import { PageOne, PageTwo } from "./component";
import { Route, Router, Switch } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/" component={PageOne} />
				<Route exact path="/pagetwo" component={PageTwo} />
			</Switch>
		</div>
	);
}

export default App;
