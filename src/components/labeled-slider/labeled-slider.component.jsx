import React from "react";

const LabeledSlider = ({ id, label, name, min, max, value, onChange }) => {
	return (
		<div>
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
		</div>
	);
};

export default LabeledSlider;
