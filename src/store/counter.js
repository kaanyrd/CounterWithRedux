import { createSlice } from "@reduxjs/toolkit";

const initialValues = { counter: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialValues,
  reducers: {
    increment(state, actions) {
      state.counter = state.counter + actions.payload;
    },
    decrement(state, actions) {
      state.counter = state.counter - actions.payload;
    },
    reset(state) {
      state.counter = 0;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice;
