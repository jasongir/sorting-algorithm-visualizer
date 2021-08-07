import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: window.innerWidth,
};

export const pageWidthSlice = createSlice({
	name: "width",
	initialState,
	reducers: {
		setWidth: (state, action) => {
			state.value = action.payload;
		},
	},
});

export const { setWidth } = pageWidthSlice.actions;
export const selectWidth = (state) => state.width.value;

export default pageWidthSlice.reducer;
