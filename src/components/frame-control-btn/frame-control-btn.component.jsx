import React from "react";
// import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

// and then put these in a buttongroup
const FrameControlBtn = ({ Icon1, Icon2, handleFrameControl, show1 }) => {
	return (
		<IconButton size="medium" onClick={handleFrameControl}>
			{show1 ? <Icon1 /> : <Icon2 />}
		</IconButton>
	);
};

export default FrameControlBtn;
