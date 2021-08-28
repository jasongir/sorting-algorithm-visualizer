import { useEffect, useState } from "react";
import { createRandomArray } from "../../utilities/utils";

import Typography from "@material-ui/core/Typography";

import SortControls from "../sort-controls/sort-controls.component";
import SortTopSettings from "../sort-top-settings/sort-top-settings.component.jsx";

import ShowBars from "../../components/show-bars/show-bars.component";
import SortTabs from "../sort-tabs/sort-tabs.component";
import SortTopButtons from "../sort-top-buttons/sort-top-buttons.component";

import ImportData from "../import-data/import-data.component";

import "./sort.styles.css";

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

	// state for which type of data source we are using
	const [tabIndex, setTabIndex] = useState(0);
	// ALSO: THIS WILL DECIDE WHICH DATA SOURCE TO GET FROM:
	// 0 MEANS IT IS RANDOMIZED, 1 MEANS IMPORTED DATA

	// state for creating the original array
	const [numItems, setNumItems] = useState(10);
	const [min, setMin] = useState(1);
	const [max, setMax] = useState(100);

	// inputed data from the user
	const [userData, setUserData] = useState("3,1,4,1,5,9,2,6,5,3,5");
	const [shownData, setShownData] = useState([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
	const [errorMessage, setErrorMessage] = useState("");

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
	const handleSliderChange = (sliderType) => (_event, newValue) => {
		// const value = Number(e.target.value);
		const newVal = Number(newValue);
		switch (sliderType) {
			case MINIMUM:
				if (newVal < max) {
					setMin(newVal);
					setCurrentIdx(0);
					setIsPlaying(false);
				}
				break;
			case MAXIMUM:
				if (newVal > min) {
					setMax(newVal);
					setCurrentIdx(0);
					setIsPlaying(false);
				}
				break;
			case NUM_ITEMS:
				setNumItems(newVal);
				setCurrentIdx(0);
				setIsPlaying(false);
				break;
			case BIG_SLIDER:
				setIsPlaying(false);
				setCurrentIdx(newVal);
				break;
			case DELAY_AMOUNT:
				setBaseDelay(newVal);
				break;
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

	const createData = (string) => {
		const separated = string.split(",");
		const separateNums = separated.map((num) => num.replace(/\D/g, ""));
		const actualNums = [];
		separateNums.forEach((num) =>
			num.length > 0 ? actualNums.push(Number(num)) : null
		);
		const finalNums = [];
		actualNums.forEach((num) =>
			Number(num) >= 0 && Number(num) <= 100
				? finalNums.push(Math.floor(Number(num)))
				: null
		);

		return finalNums;
	};

	const validateHandler = () => {
		const finalNums = createData(userData);
		// now the array will be of numbers
		// if the array is too short, have empty array with no highlights
		if (finalNums.length < 5) {
			setErrorMessage("Not enough numbers.");
			return;
		}
		// otherwise if array long enough, create new array moments
		// and display the correct array
		setErrorMessage("");
		setIsPlaying(false);
		setArrayMoments([...sortingAlgorithm(finalNums)]);
		setShownData(finalNums.join(", "));
		setNumItems(finalNums.length);
	};

	// Use effects: make sure to create all the moments + start interval when time is right
	useEffect(() => {
		if (tabIndex === 0) {
			createNewMoments();
		}
	}, [min, max, numItems]);
	useEffect(() => {
		setShownData(arrayMoments[0].wholeArray.join(", "));
		setUserData(arrayMoments[0].wholeArray.join());
	}, [arrayMoments]);

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

	// this use effect adds event listener to doc for key events
	useEffect(() => {
		function keyEvents(event) {
			const [left, right, space] = [37, 39, 32];
			const code = event.which;
			switch (code) {
				case left:
					handleBackForward(BACKWARD)();
					break;
				case right:
					handleBackForward(FORWARD)();
					break;
				case space:
					handlePlayPause();
					break;
				default:
					return;
			}
		}
		window.addEventListener("keyup", keyEvents);
		return () => window.removeEventListener("keyup", keyEvents);
	});

	return (
		<div className="sorting-container-div">
			<div className="sorting-component-inner-container">
				<Typography variant="h4" component="h1">
					{sortName}
				</Typography>
				<SortTabs
					tabValue={tabIndex}
					setTabValue={setTabIndex}
					panel1={
						<SortTopSettings
							numItems={numItems}
							handleNumItemsChange={handleSliderChange(NUM_ITEMS)}
							minValue={min}
							handleMinValueChange={handleSliderChange(MINIMUM)}
							maxValue={max}
							handleMaxValueChange={handleSliderChange(MAXIMUM)}
							baseDelay={baseDelay}
							handleBaseDelayChange={handleSliderChange(DELAY_AMOUNT)}
						/>
					}
					panel2={
						<ImportData
							data={userData}
							setData={setUserData}
							validateHandler={validateHandler}
							errorMessage={errorMessage}
						/>
					}
					endControlsData={
						<SortTopButtons
							handlePlayPause={handlePlayPause}
							isPlaying={isPlaying}
							handleReset={handleReset}
							createNewMoments={createNewMoments}
							shownData={shownData}
							userInputMode={tabIndex}
						/>
					}
				/>

				<ShowBars
					currentArray={arrayMoments[currentIdx].wholeArray}
					highlightedBars={arrayMoments[currentIdx].highlighted}
				/>

				<SortControls
					handleSliderChange={handleSliderChange(BIG_SLIDER)}
					sliderValue={currentIdx}
					max={arrayMoments.length - 1}
					handleBackwards={handleBackForward(BACKWARD)}
					handleForwards={handleBackForward(FORWARD)}
					handlePlayPause={handlePlayPause}
					isPlaying={isPlaying}
					speedValue={speed}
					handleSpeedChange={handleSpeedChange}
				/>
				<div className="under-sort-content">
					<Typography variant="body1" component="p">
						There are {arrayMoments.length} "frames" in this sort.
					</Typography>
					{sortDescription}
				</div>
			</div>
		</div>
	);
};

export default Sort;

// useEffect(() => {
// 	console.log(`Array size: ${arrayMoments[0].length}, index: ${currentIdx}`);
// }, [currentIdx]);
