import { configureStore } from "@reduxjs/toolkit";
import weaterReducer from "./useWeather";

export const store = configureStore({
  reducer: weaterReducer,
});
