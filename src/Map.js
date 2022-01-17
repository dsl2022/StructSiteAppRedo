import { useState, useEffect } from "react";
import { MapContainer } from "react-leaflet";
import L from "leaflet";
import MyMarkers from "./components/Markers";
import { CRS } from "leaflet";
import sampleData from "./sample_data.json";
import { useSelector, useDispatch } from "react-redux";
import { addInitMarkers, getMarkers } from "./state/markersSlice";
const MapWrapper = () => {
  const [map, setMap] = useState(null);
  const markers = useSelector(getMarkers);
  const dispatch = useDispatch();
  useEffect(() => {
    if (markers.markers.length === 0)
      dispatch(addInitMarkers(sampleData.markers));
  }, [markers]);
  console.log("test 17", markers);
  return (
    <MapContainer
      minZoom={0}
      whenCreated={setMap}
      // center={center}
      // zoom={18}
      crs={CRS.Simple}
      scrollWheelZoom={false}
    >
      <MyMarkers map={map} markers={markers.markers} />
    </MapContainer>
  );
};

export default MapWrapper;
