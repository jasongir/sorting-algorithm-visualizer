import React from "react";
import "./sorting-item.styles.css";
const SortingItem = ({ value, showValue, highlighted }) => {
	return (
		<div
			className="sorting-item"
			style={!showValue ? { justifyContent: "flex-end" } : {}}
		>
			{showValue && (
				<p className="item-value">{value < 10 ? "0" + value : value}</p>
			)}

			<div
				className={`inner-sorting-item ${highlighted && "highlighted-item"}`}
				style={{ height: `${3 * value}px` }}
			></div>
		</div>
	);
};

export default SortingItem;
