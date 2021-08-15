import React from "react";

import Typography from "@material-ui/core/Typography";

import "./home.styles.css";

const Home = () => {
	return (
		<div className="home-page">
			<div className="home-inner-container">
				<Typography variant="h4" component="h1">
					The Sorting Algorithm Visualizer!
				</Typography>
				<Typography variant="body2" component="p">
					I promise this page is under construction... try exploring other pages
					using the top-left menu :)
				</Typography>
			</div>
		</div>
	);
};

export default Home;
