import React from "react";

import { Line } from "react-chartjs-2";

import { Chart, registerables } from "chart.js";
Chart.register(...registerables);
Chart.defaults.scale.ticks.display = false;

const GrowthChart = ({ growthClass }) => {
	let val1 = 0;
	const x = Array(100)
		.fill()
		.map((_) => {
			val1 += 10;
			return val1;
		});

	let y;
	switch (growthClass) {
		case "n^2":
			y = x.map((x) => Math.pow(x, 2));
			break;
		case "n^(3/2)":
			y = x.map((x) => Math.pow(x, 3 / 2));
			break;
		case "nlogn":
			y = x.map((x) => x * Math.log2(x));
			break;
		default:
			console.log("didn't get one of the accepted strings in GrowthChart");
	}

	const options = {
		scales: {
			y: {
				gridLines: { color: "rgba(0,0,0,0)" },
				ticks: {
					beginAtZero: false,
					max: 1_000_000,
				},
			},

			x: {
				gridLines: {
					drawOnChartArea: false,
					display: false,
					color: "rgb(100,200,255)",
				},
			},
		},
		scales: {
			yAxes: [
				{
					gridLines: { color: "rgba(0,0,0,0)" },
					ticks: {
						beginAtZero: true,
					},
				},
			],
		},
		title: {
			display: false,
		},
		plugins: {
			legend: {
				display: false,
			},
		},
		elements: {
			point: {
				radius: 0,
			},
		},
	};

	const state = {
		labels: x.map((xVal) => String(xVal)),
		datasets: [
			{
				fill: false,
				lineTension: 0.1,
				borderColor: "rgb(0,0,0)",
				borderWidth: 3,

				data: y,
			},
		],
	};
	return (
		<>
			<Line data={state} options={options} />
		</>
	);
};

export default GrowthChart;
