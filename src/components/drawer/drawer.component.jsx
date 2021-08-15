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
				<ListItem button>
					<Typography variant="h5">
						<Link to="/">
							<IconButton>
								<HomeIcon />
							</IconButton>
							HOME
						</Link>
					</Typography>
				</ListItem>
				<Divider />
				<ListItem button>
					<Typography variant="h6">
						<Link to="/selection">Selection Sort</Link>
					</Typography>
				</ListItem>
				<ListItem button>
					<Typography variant="h6">
						<Link to="/insertion">Insertion Sort</Link>
					</Typography>
				</ListItem>
				<ListItem button>
					<Typography variant="h6">
						<Link to="/shell">Shell Sort</Link>
					</Typography>
				</ListItem>
				<ListItem button>
					<Typography variant="h6">
						<Link to="/merge">Merge Sort</Link>
					</Typography>
				</ListItem>
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
