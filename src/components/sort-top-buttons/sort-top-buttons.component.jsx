import React from "react";

import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";

const SortTopButtons = ({
	isPlaying,
	handlePlayPause,
	handleReset,
	createNewMoments,
	shownData,
	userInputMode,
}) => {
	return (
		<>
			<Grid container direction="row" justifyContent="center">
				<ButtonGroup>
					<Button variant="contained" onClick={handlePlayPause}>
						{isPlaying ? "PAUSE" : "SORT"}
					</Button>
					<Button variant="contained" onClick={handleReset}>
						Reset
					</Button>
					{!userInputMode && (
						<Button variant="contained" onClick={createNewMoments}>
							Randomize
						</Button>
					)}
				</ButtonGroup>
			</Grid>
			<Grid container direction="row" justifyContent="center">
				<Typography variant="h6" component="h4">
					{shownData}
				</Typography>
			</Grid>
		</>
	); ///
};

export default SortTopButtons;
