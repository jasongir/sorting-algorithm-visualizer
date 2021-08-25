import React from "react";

const TabPanel = ({ index, value, children }) => {
	return <>{value === index && <div role="tabpanel">{children}</div>}</>;
};

export default TabPanel;
