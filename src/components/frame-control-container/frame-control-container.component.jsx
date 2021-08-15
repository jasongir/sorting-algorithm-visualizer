import React from "react";

import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";

// import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
// import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';

import ButtonGroup from "@material-ui/core/ButtonGroup";
import FrameControlBtn from "../frame-control-btn/frame-control-btn.component";

const FrameControlContainer = ({
	handleForwards,
	handleBackwards,
	handlePlayPause,
	isPlaying,
}) => {
	return (
		<>
			<ButtonGroup>
				<FrameControlBtn
					Icon1={SkipPreviousIcon}
					show1
					handleFrameControl={handleBackwards}
				/>
				<FrameControlBtn
					Icon1={PauseIcon}
					Icon2={PlayArrowIcon}
					show1={isPlaying}
					handleFrameControl={handlePlayPause}
				/>
				<FrameControlBtn
					Icon1={SkipNextIcon}
					show1
					handleFrameControl={handleForwards}
				/>
			</ButtonGroup>
		</>
	);
};

export default FrameControlContainer;
