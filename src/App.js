import "./App.css";
import React, { useState } from "react";
import sampleData from "./sample_data.json";
import { useSelector, useDispatch } from "react-redux";
import { getMarkers, updateMarkers } from "./state/markersSlice";
import MapWrapper from "./Map";
function App() {
  const [sampleLoaded, setSampleLoaded] = useState(false);
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
    setSampleLoaded(true);
  };

  return (
    <div>
      <button
        disabled={sampleLoaded}
        onClick={handleLoadSampleMarkers}
        id="refreshButton"
      >
        Load Sample Markers
      </button>
      <MapWrapper />
    </div>
  );
}

export default App;
