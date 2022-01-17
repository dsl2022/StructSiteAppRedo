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
      return state;
    },
  },
});

export const { addInitMarkers, updateMarkers } = markersSlice.actions;
export const getMarkers = (state) => state.markers;

export default markersSlice.reducer;
