import React from "react";

import { Link } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

const DrawerItem = ({ to, onClick, icon, text }) => {
	return (
		<>
			<Link to={to} onClick={onClick}>
				<ListItem button>
					<Typography variant="h6">
						{icon && <IconButton>{icon}</IconButton>}
						{text}
					</Typography>
				</ListItem>
			</Link>
		</>
	);
};

export default DrawerItem;

// <Link to="/" onClick={() => setShowDrawer(false)}>
// 					<ListItem button>
// 						<Typography variant="h6">
// 							<IconButton>
// 								<HomeIcon />
// 							</IconButton>
// 							HOME
// 						</Typography>
// 					</ListItem>
// 				</Link>
