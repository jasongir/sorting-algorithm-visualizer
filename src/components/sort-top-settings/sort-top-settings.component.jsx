import React from "react";
import LabeledSlider from "../labeled-slider/labeled-slider.component";

const SortTopSettings = ({
	numItems,
	handleNumItemsChange,
	minValue,
	handleMinValueChange,
	maxValue,
	handleMaxValueChange,
	baseDelay,
	handleBaseDelayChange,
}) => {
	return (
		<>
			<div className="sort-top-settings">
				<LabeledSlider
					label={`Array Size: ${numItems}`}
					helperText="(sizes over 50 may not display on mobile devices)"
					min={5}
					max={100}
					value={numItems}
					onChange={handleNumItemsChange}
					defaultValue={10}
				/>
				<LabeledSlider
					label={`Min: ${minValue}`}
					min={0}
					max={99}
					value={minValue}
					onChange={handleMinValueChange}
					defaultValue={0}
				/>

				<LabeledSlider
					label={`Max: ${maxValue}`}
					min={1}
					max={100}
					value={maxValue}
					onChange={handleMaxValueChange}
					defaultValue={100}
				/>
				<LabeledSlider
					label={`Base Delay: ${baseDelay}ms`}
					min={30}
					max={1000}
					value={baseDelay}
					onChange={handleBaseDelayChange}
					defaultValue={150}
				/>
			</div>
		</>
	);
};

export default SortTopSettings;
