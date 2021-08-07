import React from "react";
import { useSelector } from "react-redux";
import { selectWidth } from "../../features/pageAttributes/pageAttributeSlice";
import "./show-bars.styles.css";

import SortingItem from "../sorting-item/sorting-item.component";

const ShowBars = ({ currentArray, highlightedBars }) => {
	const NUMBER_WIDTH = 25;
	const NUM_ITEMS = currentArray.length;
	const pageWidth = useSelector(selectWidth);

	return (
		<div className="sorting-container">
			{currentArray.map((val, idx) => (
				// if one of the highlighted bar indices equals the element's index,
				// it is highlighted
				<SortingItem
					key={idx}
					value={val}
					highlighted={highlightedBars.some(
						(highlighted) => highlighted === idx
					)}
					showValue={NUMBER_WIDTH * NUM_ITEMS < pageWidth}
				/>
			))}
		</div>
	);
};

export default ShowBars;
