import React from "react";
import LabeledSlider from "../labeled-slider/labeled-slider.component";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

/*
discrete slider: 
      <Slider
        defaultValue={30}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={10}
        marks
        min={10}
        max={110}
      />
*/

const SortTopSettings = ({
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
					min={5}
					max={100}
					value={numItems}
					onChange={handleNumItemsChange}
					defaultValue={10}
				/>
				<LabeledSlider
					id="min-value"
					label={`Min: ${minValue}`}
					name="minimum"
					min={0}
					max={99}
					value={minValue}
					onChange={handleMinValueChange}
					defaultValue={0}
				/>

				<LabeledSlider
					id="max-value"
					label={`Max: ${maxValue}`}
					name="maximum"
					min={1}
					max={100}
					value={maxValue}
					onChange={handleMaxValueChange}
					defaultValue={100}
				/>
				<LabeledSlider
					id="delay-value"
					label={`Base Delay: ${baseDelay}ms`}
					name="delay"
					min={30}
					max={1000}
					value={baseDelay}
					onChange={handleBaseDelayChange}
					defaultValue={150}
				/>

				<div className="triple-top-buttons">
					<ButtonGroup>
						<Button
							variant="contained"
							color="primary"
							style={{ color: "white" }}
							onClick={handlePlayPause}
						>
							{isPlaying ? "PAUSE" : "SORT"}
						</Button>
						<Button variant="contained" onClick={handleReset}>
							Reset
						</Button>
						<Button variant="contained" onClick={createNewMoments}>
							Randomize
						</Button>
					</ButtonGroup>
				</div>
			</div>
		</>
	);
};

export default SortTopSettings;
