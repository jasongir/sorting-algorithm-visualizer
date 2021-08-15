import React from "react";
import LabeledSlider from "../labeled-slider/labeled-slider.component";

const SortSettings = ({
	numItems,
	handleNumItemsChange,
	minValue,
	handleMinValueChange,
	maxValue,
	handleMaxValueChange,
	baseDelay,
	handleBaseDelayChange,
	handlePlayPause,
	isPlaying,
	handleReset,
	createNewMoments,
}) => {
	return (
		<>
			<div className="sort-top-settings">
				<LabeledSlider
					id="array-size"
					label={`Array Size: ${numItems}`}
					name="size"
					min="5"
					max="100"
					value={numItems}
					onChange={handleNumItemsChange}
				/>
				<LabeledSlider
					id="min-value"
					label={`Min: ${minValue}`}
					name="minimum"
					min="0"
					max="99"
					value={minValue}
					onChange={handleMinValueChange}
				/>

				<LabeledSlider
					id="max-value"
					label={`Max: ${maxValue}`}
					name="maximum"
					min="1"
					max="100"
					value={maxValue}
					onChange={handleMaxValueChange}
				/>
				<LabeledSlider
					id="delay-value"
					label={`Base Delay: ${baseDelay}ms`}
					name="delay"
					min="30"
					max="1000"
					value={baseDelay}
					onChange={handleBaseDelayChange}
				/>

				<div className="triple-top-buttons">
					<button onClick={handlePlayPause}>
						{isPlaying ? "Pause" : "SORT!"}
					</button>
					<button onClick={handleReset}>Reset</button>
					<button onClick={createNewMoments}>Randomize</button>
				</div>
			</div>
		</>
	);
};

export default SortSettings;
