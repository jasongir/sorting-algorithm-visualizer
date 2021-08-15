import React from "react";

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
				</div>

				<div className="play-controls">
					<button onClick={handleBackwards}>Back</button>
					<button onClick={handlePlayPause}>
						{isPlaying ? "Pause" : "Play"}
					</button>
					<button onClick={handleForwards}>Forward</button>
				</div>

				<div>
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
				</div>
			</div>
		</>
	);
};

export default SortControls;
