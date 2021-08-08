import { useEffect } from "react";

//!?* TODO:
/*
   break sort component into 
      top section with sliders/reset/randomize
      middle section bars
      bottom section control play/pause/forward/backward/speed

   add keyboard controls: space/pause, left right/up down

   make user able to input own data: comma separated list of numbers, 0-100
     
   make this into a PWA, add MUI
   */

import "./App.css";
import Header from "./components/header/header.component";
import Home from "./pages/home/home.component";
import Selection from "./pages/selection/selection.component";
import Insertion from "./pages/insertion/insertion.component";
import Merge from "./pages/merge/merge.component";
import Quick from "./pages/quick/quick.component";
import Shell from "./pages/shell/shell.component";

import { Route, Switch } from "react-router-dom";

import { useDispatch } from "react-redux";
import { setWidth } from "./features/pageAttributes/pageAttributeSlice";

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		window.addEventListener("resize", () => {
			dispatch(setWidth(window.innerWidth));
		});
	});

	return (
		<div className="App">
			<Header />
			<Switch>
				<Route path="/" component={Home} exact />
				<Route path="/selection" component={Selection} exact />
				<Route path="/insertion" component={Insertion} exact />
				<Route path="/shell" component={Shell} exact />
				<Route path="/merge" component={Merge} exact />
				<Route path="/quick" component={Quick} exact />
			</Switch>
		</div>
	);
}

export default App;
