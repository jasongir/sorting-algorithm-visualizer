import React from "react";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import SortInfo from "../../components/home-sort-info/home-sort-info.component";

import "./home.styles.css";

const sortInfo = [
	{
		name: "Bubble Sort",
		url: "/bubble",
		growthClass: "n^2",
	},
	{
		name: "Selection Sort",
		url: "/selection",
		growthClass: "n^2",
	},
	{
		name: "Insertion Sort",
		url: "/insertion",
		growthClass: "n^2",
	},
	{
		name: "Shell Sort",
		url: "/shell",
		growthClass: "n^(3/2)",
	},
	{
		name: "Merge Sort",
		url: "/merge",
		growthClass: "nlogn",
	},
	{
		name: "Quick Sort",
		url: "/quick",
		growthClass: "nlogn",
	},
];

const Home = () => {
	return (
		<div className="home-page">
			<div className="home-inner-container">
				<Typography variant="h4" component="h1">
					The Sorting Algorithm Visualizer!
				</Typography>
				{/*<Typography variant="body2" component="p">
               I promise this page is under construction... try exploring other pages
               using the top-left menu :)
            </Typography> */}
				<Grid
					container
					spacing={4}
					direction="row"
					justifyContent="space-between"
				>
					{sortInfo.map(({ name, url, growthClass }) => (
						<SortInfo
							prop={name}
							sortName={name}
							url={url}
							growthClass={growthClass}
						/>
					))}
				</Grid>
			</div>
		</div>
	);
};

export default Home;

// const data = {
// 	labels: ["1", "2", "3", "4", "5", "6"],
// 	datasets: [
// 		{
// 			label: "# of Votes",
// 			data: [12, 19, 3, 5, 2, 3],
// 			fill: false,
// 			backgroundColor: "rgb(255, 99, 132)",
// 			borderColor: "rgba(255, 99, 132, 0.2)",
// 		},
// 	],
// };
// const options = {
// 	scales: {
// 		yAxes: [
// 			{
// 				ticks: {
// 					beginAtZero: true,
// 				},
// 			},
// 		],
// 	},
// };
// const LineChart = () => (
// 	<>
// 		<Line data={data} options={options} />
// 	</>
// ); ///
