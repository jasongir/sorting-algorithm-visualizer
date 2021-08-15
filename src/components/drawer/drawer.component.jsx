import React from "react";

import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";

import { Link } from "react-router-dom";

import "./drawer.styles.css";

export const drawerWidth = 230;

const SideDrawer = ({ showDrawer, setShowDrawer }) => {
	const drawer = (
		<div className="side-drawer" style={{ width: drawerWidth }}>
			<h1 className="logo">
				<Link to="/">HOME</Link>
			</h1>
			<ul className="header-ul">
				<li>
					<Link to="/selection">Selection Sort</Link>
				</li>
				<li>
					<Link to="/insertion">Insertion Sort</Link>
				</li>
				<li>
					<Link to="/shell">Shell Sort</Link>
				</li>
				<li>
					<Link to="/merge">Merge Sort</Link>
				</li>
				<li>
					<Link to="/quick">Quick Sort</Link>
				</li>
			</ul>
		</div>
	);

	const handleDrawerToggle = () => setShowDrawer(!showDrawer);

	return (
		<nav>
			<Hidden mdUp>
				<Drawer
					variant="temporary"
					anchor="left"
					open={showDrawer}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
				>
					{drawer}
				</Drawer>
			</Hidden>
			<Hidden smDown>
				<Drawer variant="permanent" open>
					{drawer}
				</Drawer>
			</Hidden>
		</nav>
	);
};

export default SideDrawer;
