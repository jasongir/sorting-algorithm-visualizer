import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: 1,
};

export const selectionMinValueSlice = createSlice({
	name: "selectionMinValue",
	initialState,
	reducers: {
		setMin: (state, action) => {
			state.value = action.payload;
		},
	},
});

export const { setMin } = selectionMinValueSlice.actions;
export const selectMin = (state) => state.width.value;

export default selectionMinValueSlice.reducer;
