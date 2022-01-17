import "./App.css";
import React, { useEffect } from "react";
import sampleData from "./sample_data.json";
import { useSelector, useDispatch } from "react-redux";
import { addInitMarkers, getMarkers } from "./state/markersSlice";
import MapWrapper from "./Map";
function App() {
  const markers = useSelector(getMarkers);
  const dispatch = useDispatch();
  useEffect(() => {
    if (markers.markers.length === 0)
      dispatch(addInitMarkers(sampleData.markers));
  });
  console.log({ markers });
  const sampleMarkers = markers.markers.map((marker) => {
    return {
      position: [marker.x * 1016, marker.y * 1590],
      rotation: 0,
      id: marker.id,
    };
  });
  console.log({ sampleMarkers });
  return (
    <div>
      <MapWrapper />
    </div>
  );
}

export default App;
