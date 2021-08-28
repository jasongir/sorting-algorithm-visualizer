import React from "react";
import { Link } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";

import MenuIcon from "@material-ui/icons/Menu";
import "@fontsource/roboto";
import Typography from "@material-ui/core/Typography";

import "./header.styles.css";
import { Hidden } from "@material-ui/core";

import { drawerWidth } from "../drawer/drawer.component";

const Header = ({ setShowDrawer, showDrawer, showMenu }) => {
	const handleDrawerToggle = () => setShowDrawer(!showDrawer);

	return (
		<>
			<AppBar>
				<Toolbar>
					<Hidden mdUp>
						<IconButton onClick={handleDrawerToggle}>
							<MenuIcon />
						</IconButton>
					</Hidden>
					<Link to="/">
						<Hidden mdUp>
							<Typography variant="h6" component="h2">
								Sorting Algorithm Visualizer
							</Typography>
						</Hidden>
						<Hidden smDown>
							<Typography
								variant="h6"
								component="h2"
								style={{
									marginLeft: drawerWidth,
									width: `calc(100vw - ${drawerWidth}px)`,
								}}
							>
								Sorting Algorithm Visualizer
							</Typography>
						</Hidden>
					</Link>
				</Toolbar>
			</AppBar>
		</>
	);
};

export default Header;
