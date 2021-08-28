import React from "react";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import { Link } from "react-router-dom";

import GrowthChart from "../growth-chart/growth-chart.component";
import "./home-sort-info.styles.css";

const HomeSortInfo = ({ sortName, url, growthClass }) => {
	return (
		<Grid item xs={12} sm={6} md={4}>
			<Link to={url}>
				<Paper variant="elevation" className="home-paper-container">
					<div className="chart-container">
						<GrowthChart growthClass={growthClass} />
					</div>
					<Typography variant="subtitle1" component="h3">
						{sortName}
					</Typography>
				</Paper>
			</Link>
		</Grid>
	);
};

export default HomeSortInfo;
