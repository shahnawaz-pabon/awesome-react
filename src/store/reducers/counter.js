import { createSlice } from "@reduxjs/toolkit";

// Define the initial state of the counter
const initialState = {
  value: 0,
};

// Define the counter slice using createSlice from Redux Toolkit
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

// Export the reducer and its action creators
export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
