/** @format */

import "./App.css";
import { PageOne, PageTwo, SwipeableTextMobileStepper } from "./component";
import { Route, Router, Switch } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/" component={PageOne} />
				<Route exact path="/pagetwo" component={PageTwo} />
				<Route exact path="/slider" component={SwipeableTextMobileStepper} />
			</Switch>
		</div>
	);
}

export default App;
