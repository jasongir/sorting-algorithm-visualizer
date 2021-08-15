import React from "react";

import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import "@fontsource/roboto";
import HomeIcon from "@material-ui/icons/Home";
import IconButton from "@material-ui/core/IconButton";

import { Link } from "react-router-dom";

import "./drawer.styles.css";

export const drawerWidth = 230;

const SideDrawer = ({ showDrawer, setShowDrawer }) => {
	const drawer = (
		<div className="side-drawer" style={{ width: drawerWidth }}>
			<List>
				<Link to="/">
					<ListItem button>
						<Typography variant="h5">
							<IconButton>
								<HomeIcon />
							</IconButton>
							HOME
						</Typography>
					</ListItem>
				</Link>
				<Divider />
				<Link to="/selection">
					<ListItem button>
						<Typography variant="h6">Selection Sort</Typography>
					</ListItem>
				</Link>
				<Link to="/insertion">
					<ListItem button>
						<Typography variant="h6">Insertion Sort</Typography>
					</ListItem>
				</Link>
				<Link to="/shell">
					<ListItem button>
						<Typography variant="h6">Shell Sort</Typography>
					</ListItem>
				</Link>
				<Link to="/merge">
					<ListItem button>
						<Typography variant="h6">Merge Sort</Typography>
					</ListItem>
				</Link>
				<ListItem button>
					<Typography variant="h6">
						<Link to="/quick">Quick Sort</Link>
					</Typography>
				</ListItem>
			</List>
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
