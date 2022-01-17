import { useState } from "react";
import { MapContainer } from "react-leaflet";
import L from "leaflet";
import MyMarkers from "./components/Markers";
import { CRS } from "leaflet";

const MapWrapper = () => {
  const [map, setMap] = useState(null);
  return (
    <MapContainer
      minZoom={0}
      whenCreated={setMap}
      // center={center}
      // zoom={18}
      crs={CRS.Simple}
      scrollWheelZoom={false}
    >
      <MyMarkers map={map} />
    </MapContainer>
  );
};

export default MapWrapper;
