import React from "react";

import Typography from "@material-ui/core/Typography";

import "./home.styles.css";

const Home = () => {
	return (
		<div className="home-page">
			<Typography variant="h4" component="h1">
				The Sorting Algorithm Visualizer!
			</Typography>
			<Typography variant="body2" component="p">
				I promise this page is under construction... try exploring other pages
				using the top-left menu :)
			</Typography>
		</div>
	);
};

export default Home;
