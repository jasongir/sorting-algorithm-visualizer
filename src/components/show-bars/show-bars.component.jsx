import React, { useState, useEffect, useRef } from "react";
import "./show-bars.styles.css";

import SortingItem from "../sorting-item/sorting-item.component";

const ShowBars = ({ currentArray, highlightedBars }) => {
	const NUMBER_WIDTH = 25;
	const NUM_ITEMS = currentArray.length;

	const [pageWidth, setPageWidth] = useState(500);

	const containerRef = useRef(null);

	useEffect(() => {
		setPageWidth(containerRef.current.width);
	}, []);

	return (
		<div className="sorting-container" ref={containerRef}>
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
