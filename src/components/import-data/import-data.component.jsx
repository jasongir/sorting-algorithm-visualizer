import React from "react";

import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

import "./import-data.styles.css";

const ImportData = ({ data, setData, validateHandler, errorMessage }) => {
	const onChange = (event) => {
		setData(event.target.value);
	};

	return (
		<div>
			<Box component="div" style={{ paddingBottom: 8 }}>
				<Typography variant="body1">
					Input your own comma separated integers ranging from 0 to 100: (must
					include at least 5 numbers)
				</Typography>
			</Box>
			<TextField
				id="user-enter-data-textField"
				label="Enter your data:"
				multiline
				variant="outlined"
				value={data}
				onChange={onChange}
				fullWidth
			/>
			<div className="centered-btn">
				<Button onClick={validateHandler} variant="contained">
					Validate Data
				</Button>
				{errorMessage && (
					<Typography component="p" variant="body1">
						{errorMessage}
					</Typography>
				)}
			</div>
		</div>
	);
};

export default ImportData;
