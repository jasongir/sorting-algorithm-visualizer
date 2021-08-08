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

//             <LabeledSlider
//                id="array-size"
//                label={`Array Size: ${numItems}`}
//                name="minimum"
//                min="5"
//                max="100"
//                value={numItems}
//                onChange={handleSliderChange(NUM_ITEMS)}
//             />
