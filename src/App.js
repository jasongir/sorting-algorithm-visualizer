//!?* TODO:
/*
   add bubble sort

   allow for get params to set the settings: 
   const {size, min, max, delay} = useParams();
   or:
   const query = new URLSearchParams(useLocation().search)
   query.get("size"), query.get("max"), etc.
   
   look in C:\2021summer\react-router\src\pages
   ?size=90&min=10&max=100&delay=30

   break sort component into 
      top section with sliders/reset/randomize
      middle section bars
      bottom section control play/pause/forward/backward/speed

   add keyboard controls: space/pause, left right/up down

   make user able to input own data: comma separated list of numbers, 0-100
   user can save the randomized data at some point or save whatever slice to be inputed later
     
   make this into a PWA, add MUI
   */
import { useEffect, useState } from "react";

import "./App.css";
import Header from "./components/header/header.component";
import SideDrawer from "./components/drawer/drawer.component";

import Home from "./pages/home/home.component";
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
	const [showMenu, setShowMenu] = useState(true);

	return (
		<div className="App">
			<div className="side-drawer-container">
				<SideDrawer
					showMenu={showMenu}
					showDrawer={showDrawer}
					setShowDrawer={setShowDrawer}
				/>
			</div>
			<Header
				showMenuIcon={showMenu}
				setShowDrawer={setShowDrawer}
				showDrawer={showDrawer}
			/>
			<Hidden smDown>
				<div
					className="application"
					style={{
						width: `calc(100vw - ${drawerWidth}px)`,
						marginLeft: drawerWidth,
					}}
				>
					<Switch>
						<Route path="/" component={Home} exact />
						<Route path="/selection" component={Selection} exact />
						<Route path="/insertion" component={Insertion} exact />
						<Route path="/shell" component={Shell} exact />
						<Route path="/merge" component={Merge} exact />
						<Route path="/quick" component={Quick} exact />
					</Switch>
				</div>
			</Hidden>
			<Hidden mdUp>
				<div>
					<Switch>
						<Route path="/" component={Home} exact />
						<Route path="/selection" component={Selection} exact />
						<Route path="/insertion" component={Insertion} exact />
						<Route path="/shell" component={Shell} exact />
						<Route path="/merge" component={Merge} exact />
						<Route path="/quick" component={Quick} exact />
					</Switch>
				</div>
			</Hidden>
		</div>
	);
}

export default App;

// useEffect(() => {
// 	const largeScreen = 700;
// 	const screenIsLarge = () => window.innerWidth > largeScreen;
// 	const screenIsSmall = () => window.innerWidth <= largeScreen;
// 	const changeShowDrawer = () => setShowDrawer(screenIsLarge);
// 	const changeShowMenu = () => setShowMenu(screenIsSmall);

// 	window.addEventListener("resize", changeShowDrawer);
// 	window.addEventListener("resize", changeShowMenu);

// 	return () => {
// 		window.removeEventListener("resize", changeShowDrawer);
// 		window.removeEventListener("resize", changeShowMenu);
// 	};
// });
