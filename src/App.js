//!?* TODO:
/*
   add bubble sort

   LOTS OF REFACTORING:
   - display data + three buttons at bottom of sort-tabs component
   - remove the 
      handlePlayPause={handlePlayPause}
      isPlaying={isPlaying}
      handleReset={handleReset}
      createNewMoments={createNewMoments}
     requirements from SortTopSettings to put them there

   CHANGES TO USER DATA:
   - by default, the data remains the same until user presses validate.
   - when they press validate, either their data will generate new moments or nothing will happen
   - so instead of updating our data every time we enter new data, it updates every time user presses validate


   allow for get params to set the settings: 
   const {size, min, max, delay} = useParams();
   or:
   const query = new URLSearchParams(useLocation().search)
   query.get("size"), query.get("max"), etc.
   
   look in C:\2021summer\react-router\src\pages
   ?size=90&min=10&max=100&delay=30

   make user able to input own data: comma separated list of numbers, 0-100
   user can save the randomized data at some point or save whatever slice to be inputed later

   make this into a PWA
*/
import { useState } from "react";

import "./App.css";
import Header from "./components/header/header.component";
import SideDrawer from "./components/drawer/drawer.component";

import Home from "./pages/home/home.component";
import Bubble from "./pages/bubble/bubble.component";
import Selection from "./pages/selection/selection.component";
import Insertion from "./pages/insertion/insertion.component";
import Merge from "./pages/merge/merge.component";
import Quick from "./pages/quick/quick.component";
import Shell from "./pages/shell/shell.component";

import { drawerWidth } from "./components/drawer/drawer.component";

import Hidden from "@material-ui/core/Hidden";

import { Route, Switch } from "react-router-dom";

function App() {
	const [showDrawer, setShowDrawer] = useState(false);
	// showing menu button exclusively depends on size of screen

	const switchJSX = (
		<Switch>
			<Route path="/" component={Home} exact />
			<Route path="/bubble" component={Bubble} exact />
			<Route path="/selection" component={Selection} exact />
			<Route path="/insertion" component={Insertion} exact />
			<Route path="/shell" component={Shell} exact />
			<Route path="/merge" component={Merge} exact />
			<Route path="/quick" component={Quick} exact />
		</Switch>
	);

	return (
		<div className="App">
			<div className="side-drawer-container">
				<SideDrawer showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
			</div>
			<Header setShowDrawer={setShowDrawer} showDrawer={showDrawer} />
			<Hidden smDown>
				<div
					className="application"
					style={{
						width: `calc(100vw - ${drawerWidth}px)`,
						marginLeft: drawerWidth,
					}}
				>
					{switchJSX}
				</div>
			</Hidden>
			<Hidden mdUp>
				<div>{switchJSX}</div>
			</Hidden>
		</div>
	);
}

export default App;
