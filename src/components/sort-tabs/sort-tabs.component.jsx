import React from "react";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
// import Typography from "@material-ui/core/Typography";
// import Box from "@material-ui/core/Box";

import "./sort-tabs.styles.css";

import TabPanel from "../sort-tab-panel/tab-panel.component.jsx";

const SortTabs = ({
	tabValue,
	setTabValue,
	panel1,
	panel2,
	endControlsData,
}) => {
	const handleChange = (_event, newValue) => {
		setTabValue(newValue);
	};
	return (
		<>
			<div className="sorting-data-control-container">
				<Tabs
					value={tabValue}
					onChange={handleChange}
					aria-label="tabs to choose data source"
				>
					<Tab label="Randomized Data" />
					<Tab label="Import Data" />
				</Tabs>
				<TabPanel value={tabValue} index={0}>
					{panel1}
				</TabPanel>
				<TabPanel value={tabValue} index={1}>
					{panel2}
				</TabPanel>
				{endControlsData}
			</div>
		</>
	);
};

export default SortTabs;
