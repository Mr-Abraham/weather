import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  city: "delhi",
  darkMode: false,
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    getData: (state, action) => {
      state.city = action.payload;
    },
    lightMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { getData, lightMode } = weatherSlice.actions;

export default weatherSlice.reducer;
