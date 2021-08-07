import { useEffect, useState } from "react";
import { createRandomArray } from "../../utilities/utils";

import ShowBars from "../../components/show-bars/show-bars.component";

const Sort = ({ sortingAlgorithm, sortName, sortDescription }) => {
	// Constant values
	const [MINIMUM, MAXIMUM, NUM_ITEMS, BIG_SLIDER, DELAY_AMOUNT] = [
		"min",
		"max",
		"num_items",
		"big_slider",
		"delay_amount",
	];
	const [FORWARD, BACKWARD] = ["forward", "backward"];

	// state for creating the original array
	const [numItems, setNumItems] = useState(10);
	const [min, setMin] = useState(1);
	const [max, setMax] = useState(100);

	// the set of all arrays
	const [arrayMoments, setArrayMoments] = useState([
		{ wholeArray: [1, 2, 3], highlighted: [] },
	]);

	// Keeps track of the current state of the displayed sort
	const [currentIdx, setCurrentIdx] = useState(0);
	const [isPlaying, setIsPlaying] = useState(false);
	const [speed, setSpeed] = useState(1);
	const [baseDelay, setBaseDelay] = useState(150);

	//! Handlers

	// handles when array size, minimum val, or max val changes
	const handleSliderChange = (sliderType) => (e) => {
		const value = Number(e.target.value);

		switch (sliderType) {
			case MINIMUM:
				if (value < max) {
					setMin(value);
					setCurrentIdx(0);
					setIsPlaying(false);
					return;
				}
			case MAXIMUM:
				if (value > min) {
					setMax(value);
					setCurrentIdx(0);
					setIsPlaying(false);
					return;
				}
			case NUM_ITEMS:
				setNumItems(value);
				setCurrentIdx(0);
				setIsPlaying(false);
				return;
			case BIG_SLIDER:
				setIsPlaying(false);
				setCurrentIdx(value);
				return;
			case DELAY_AMOUNT:
				setBaseDelay(value);
				return;
			default:
				console.log("not a slider type ._.");
		}
	};

	// handles when the user presses play/pause button
	const handlePlayPause = () => {
		if (!(currentIdx === arrayMoments.length - 1))
			setIsPlaying((isPlaying) => !isPlaying);
	};

	const handleBackForward = (direction) => () => {
		if (
			!isPlaying &&
			direction === FORWARD &&
			!(currentIdx === arrayMoments.length - 1)
		) {
			setCurrentIdx((currIdx) => currIdx + 1);
		} else if (!isPlaying && direction === BACKWARD && !(currentIdx === 0)) {
			setCurrentIdx((currIdx) => currIdx - 1);
		}
	};

	const handleReset = () => {
		setIsPlaying(false);
		setCurrentIdx(0);
	};

	const handleSpeedChange = (e) => {
		const newSpeed = Number(e.target.value);
		setSpeed(newSpeed);
	};

	const createNewMoments = () => {
		setCurrentIdx(0);
		const firstArr = createRandomArray(numItems, min, max);
		setArrayMoments([...sortingAlgorithm(firstArr)]);
	};

	// Use effects: make sure to create all the moments + start interval when time is right
	useEffect(() => {
		createNewMoments();
	}, [min, max, numItems]);

	useEffect(() => {
		let interval;

		if (isPlaying && currentIdx < arrayMoments.length - 2) {
			interval = setInterval(() => {
				setCurrentIdx((oldVal) =>
					oldVal === arrayMoments.length - 1 ? oldVal : oldVal + 1
				);
			}, baseDelay / speed);
		}
		return () => clearInterval(interval);
	}, [isPlaying]);

	useEffect(() => {
		if (currentIdx === arrayMoments.length - 1) {
			setIsPlaying(false);
		}
	}, [currentIdx]);

	return (
		<>
			<h1>{sortName}</h1>
			<div className="sort-top-settings">
				<div>
					<label htmlFor="array-size">
						Array Size: {numItems}
						<input
							type="range"
							name="minimum"
							id="array-size"
							min="5"
							max="100"
							value={numItems}
							onChange={handleSliderChange(NUM_ITEMS)}
						/>
					</label>
				</div>
				<div>
					<label htmlFor="min-value">
						Min: {min}
						<input
							type="range"
							name="minimum"
							id="min-value"
							min="0"
							max="99"
							value={min}
							onChange={handleSliderChange(MINIMUM)}
						/>
					</label>
				</div>
				<div>
					<label htmlFor="max-value">
						Max: {max}
						<input
							type="range"
							name="maximum"
							id="max-value"
							min="1"
							max="100"
							value={max}
							onChange={handleSliderChange(MAXIMUM)}
						/>
					</label>
				</div>
				<div>
					<label htmlFor="delay-value">
						Base Delay: {baseDelay}ms
						<input
							type="range"
							name="delay"
							id="delay-value"
							min="30"
							max="1000"
							value={baseDelay}
							onChange={handleSliderChange(DELAY_AMOUNT)}
						/>
					</label>
				</div>
				<button onClick={handleReset}>Reset</button>
				<button onClick={createNewMoments}>Randomize</button>
			</div>

			<ShowBars
				currentArray={arrayMoments[currentIdx].wholeArray}
				highlightedBars={arrayMoments[currentIdx].highlighted}
			/>

			<div className="sort-control-play">
				<input
					type="range"
					name="index-slider"
					id="idx-slider"
					onChange={handleSliderChange(BIG_SLIDER)}
					value={currentIdx}
					min={0}
					max={arrayMoments.length - 1}
					step={1}
				/>

				<button onClick={handleBackForward(BACKWARD)}>Back</button>
				<button onClick={handlePlayPause}>
					{isPlaying ? "Pause" : "Play"}
				</button>
				<button onClick={handleBackForward(FORWARD)}>Forward</button>

				<div>
					<label htmlFor="speed-selection">
						<select
							name="select-speed"
							id="speed-selection"
							value={speed}
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
			{arrayMoments.length}
			{sortDescription}
		</>
	);
};

export default Sort;
