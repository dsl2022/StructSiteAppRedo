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

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   if (markers.markers.length === 0)
  //     dispatch(addInitMarkers(sampleData.markers));
  // }, [markers]);

  return (
    <MapContainer
      minZoom={0}
      whenCreated={setMap}
      crs={CRS.Simple}
      scrollWheelZoom={false}
    >
      {/* {markers.markers.length > 0 && ( */}
      <MyMarkers map={map} />
      {/* )} */}
    </MapContainer>
  );
};

export default MapWrapper;
