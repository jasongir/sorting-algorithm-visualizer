import React from "react";

import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

import "./labeled-slider.styles.css";

const LabeledSlider = ({
	label,
	helperText,
	min,
	max,
	value,
	onChange,
	defaultValue,
}) => {
	return (
		<div className="top-slider">
			<Typography variant="body1" component="p">
				{label}
			</Typography>
			{helperText && (
				<Typography variant="caption" component="p">
					{helperText}
				</Typography>
			)}
			<Slider
				aria-labelledby={label}
				valueLabelDisplay="auto"
				step={1}
				min={min}
				max={max}
				onChange={onChange}
				value={value}
				defaultValue={defaultValue}
			/>
		</div>
	);
};

export default LabeledSlider;

/*
         <label htmlFor={id}>
				{label}
				<input
					type="range"
					name={name}
					id={id}
					min={min}
					max={max}
					value={value}
					onChange={onChange}
				/>
			</label>
*/
