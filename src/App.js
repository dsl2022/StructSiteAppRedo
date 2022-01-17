import "./App.css";
import React, { useEffect } from "react";
import sampleData from "./sample_data.json";
import { useSelector, useDispatch } from "react-redux";
import {
  addInitMarkers,
  getMarkers,
  updateMarkers,
} from "./state/markersSlice";
import MapWrapper from "./Map";
function App() {
  const markers = useSelector(getMarkers);
  const dispatch = useDispatch();
  const handleLoadSampleMarkers = () => {
    const sampleMarkers = sampleData.markers.map((marker) => {
      return {
        position: [marker.x * 1016, marker.y * 1590],
        rotation: marker.rotation,
        id: marker.id,
      };
    });

    const finalData = sampleMarkers.concat(markers.markers);
    dispatch(updateMarkers(finalData));
  };

  return (
    <div>
      <button onClick={handleLoadSampleMarkers} id="refreshButton">
        Load Sample Markers
      </button>
      <MapWrapper />
    </div>
  );
}

export default App;
