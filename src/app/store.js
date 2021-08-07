import { configureStore } from "@reduxjs/toolkit";
import widthReducer from "../features/pageAttributes/pageAttributeSlice";
import selectionMinReducer from "../features/selectionSort/minValueSlice";

export const store = configureStore({
	reducer: {
		width: widthReducer,
		selectionMin: selectionMinReducer,
	},
});
