import React from "react";

import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

import "@fontsource/roboto";
import HomeIcon from "@material-ui/icons/Home";

import "./drawer.styles.css";
import DrawerItem from "../drawer-item/drawer-item.component";

export const drawerWidth = 230;

const SideDrawer = ({ showDrawer, setShowDrawer }) => {
	const handleDrawerToggle = () => setShowDrawer(!showDrawer);

	const drawer = (
		<div className="side-drawer" style={{ width: drawerWidth }}>
			<List>
				<DrawerItem
					to="/"
					onClick={() => setShowDrawer(false)}
					icon={<HomeIcon />}
					text={"HOME"}
				/>
				<Divider />
				<DrawerItem
					to="/bubble"
					onClick={() => setShowDrawer(false)}
					text={"Bubble Sort"}
				/>
				<DrawerItem
					to="/selection"
					onClick={() => setShowDrawer(false)}
					text={"Selection Sort"}
				/>
				<DrawerItem
					to="/insertion"
					onClick={() => setShowDrawer(false)}
					text={"Insertion Sort"}
				/>
				<DrawerItem
					to="/shell"
					onClick={() => setShowDrawer(false)}
					text={"Shell Sort"}
				/>
				<DrawerItem
					to="/merge"
					onClick={() => setShowDrawer(false)}
					text={"Merge Sort"}
				/>
				<DrawerItem
					to="/quick"
					onClick={() => setShowDrawer(false)}
					text={"Quick Sort"}
				/>
			</List>
		</div>
	);

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
