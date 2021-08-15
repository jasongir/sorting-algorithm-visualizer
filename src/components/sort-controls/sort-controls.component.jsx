import React from "react";

import FrameControlContainer from "../frame-control-container/frame-control-container.component";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import Slider from "@material-ui/core/Slider";

import "./sort-controls.styles.css";

const SortControls = ({
	handleSliderChange,
	sliderValue,
	max,
	handleBackwards,
	handleForwards,
	handlePlayPause,
	isPlaying,
	speedValue,
	handleSpeedChange,
}) => {
	return (
		<>
			<div className="sort-control-play">
				<div className="index-slider-container">
					<Slider
						defaultValue={0}
						value={sliderValue}
						onChange={handleSliderChange}
						aria-labelledby="index-slider"
						step={1}
						min={0}
						max={max}
						valueLabelDisplay="auto"
					/>
				</div>

				<div className="control-buttons-select">
					<FrameControlContainer
						handleForwards={handleForwards}
						handleBackwards={handleBackwards}
						handlePlayPause={handlePlayPause}
						isPlaying={isPlaying}
					/>
					<div className="speed-form-control">
						<FormControl>
							<Select
								value={speedValue}
								onChange={handleSpeedChange}
								displayEmpty
							>
								<MenuItem value={0.25}>0.25x</MenuItem>
								<MenuItem value={0.5}>0.5x</MenuItem>
								<MenuItem value={0.75}>0.75x</MenuItem>
								<MenuItem value={1}>1x</MenuItem>
								<MenuItem value={1.25}>1.25x</MenuItem>
								<MenuItem value={1.5}>1.5x</MenuItem>
								<MenuItem value={1.75}>1.75x</MenuItem>
							</Select>
							<FormHelperText>Speed</FormHelperText>
						</FormControl>
					</div>
				</div>
			</div>
		</>
	);
};

export default SortControls;

/*
//

<label htmlFor="speed-selection">
						<select
							name="select-speed"
							id="speed-selection"
							value={speedValue}
							onChange={handleSpeedChange}
						>
							<option value={0.25}>0.25x</option>
							<option value={0.5}>0.5x</option>
							<option value={0.75}>0.75x</option>
							<option default value={1}>
								1x
							</option>
							<option value={1.25}>1.25x</option>
							<option value={1.5}>1.5x</option>
							<option value={1.75}>1.75x</option>
						</select>
					</label>



               <input
						type="range"
						name="index-slider"
						id="idx-slider"
						onChange={handleSliderChange}
						value={sliderValue}
						min={0}
						max={max}
						step={1}
					/>
*/
