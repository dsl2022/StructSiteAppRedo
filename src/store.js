import { configureStore } from "@reduxjs/toolkit";
import markersSliceReducer from "./state/markersSlice";
export const store = configureStore({
  reducer: {
    markers: markersSliceReducer,
  },
});
