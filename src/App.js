import "./App.css";
import React, { useEffect } from "react";
import sampleData from "./sample_data.json";
import { useSelector, useDispatch } from "react-redux";
import { addInitMarkers, getMarkers } from "./state/markersSlice";
function App() {
  const markers = useSelector(getMarkers);
  const dispatch = useDispatch();
  useEffect(() => {
    if (markers.markers.length === 0)
      dispatch(addInitMarkers(sampleData.markers));
  });
  console.log({ markers });
  return <div>test</div>;
}

export default App;
