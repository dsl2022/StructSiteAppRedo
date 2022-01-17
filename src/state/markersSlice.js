import { createSlice } from "@reduxjs/toolkit";

const initialState = { markers: [] };

export const markersSlice = createSlice({
  name: "markers",
  initialState,
  reducers: {
    addInitMarkers: (state, action) => {
      if (action.payload) state.markers = action.payload;
      return state;
    },
    updateMarkers: (state, action) => {
      state.markers = action.payload;
      console.log(action.payload, "test payload");
      console.log(state, "test state markers");
      return state;
    },
  },
});

export const { addInitMarkers, addInitProcessedMarkers, updateMarkers } =
  markersSlice.actions;
export const getMarkers = (state) => state.markers;

export default markersSlice.reducer;
