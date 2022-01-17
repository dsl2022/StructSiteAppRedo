import L from "leaflet";
import { useDispatch } from "react-redux";
import { updateMarkers } from "../state/markersSlice";
import { Marker, Popup } from "react-leaflet";
import { updateMarkerById } from "./helpers";

const removeMarker = (index, map, legend) => {
  map.eachLayer((layer) => {
    if (layer.options && layer.options.pane === "markerPane") {
      if (layer.options.uniceid === index) {
        map.removeLayer(layer);
        legend.textContent = "goodbye marker 💩";
      }
    }
  });
};

const createIcon = ({ rotation, height, width }) => {
  return L.divIcon({
    iconSize: [20, 20],
    iconAnchor: [10, 10],
    className: "yourClassName",
    html: `<img 
    style="transform: rotate(${rotation}deg);"
    height="${height}" 
    width="${width}" 
    src='https://app.structionsite.com/assets/marker_flat.png'>`,
  });
};

const ShowMarkers = ({ mapContainer, legend, markers, setLegend }) => {
  const height = 20,
    width = 20;
  const dispatch = useDispatch();
  return markers?.map((marker, index) => {
    const icon = createIcon({ rotation: marker.rotation, height, width });
    return (
      <Marker
        icon={icon}
        key={marker.id}
        uniceid={marker.id}
        position={marker.position}
        draggable={true}
        eventHandlers={{
          moveend(e) {
            const { lat, lng } = e.target.getLatLng();
            // this is a mocking the behavior when markers are
            // moved and should be updated to redux. In production
            // context, this should be updated to db.
            const updatedmarkers = updateMarkerById({
              markers,
              lat,
              lng,
              id: marker.id,
            });
            // dispatch updated marker array to redux
            dispatch(updateMarkers(updatedmarkers));

            legend.textContent = `change position: ${lat} ${lng}\n ${
              marker?.id ? marker.id : ""
            }`;
          },
        }}
      >
        <Popup>
          <button onClick={() => removeMarker(marker.id, mapContainer, legend)}>
            delete this marker
          </button>
        </Popup>
      </Marker>
    );
  });
};

export default ShowMarkers;
