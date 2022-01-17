import L from "leaflet";
import { Marker, Popup } from "react-leaflet";

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

const ShowMarkers = ({ mapContainer, legend, markers }) => {
  const height = 20,
    width = 20,
    rotatedValue = 60;

  console.log(markers, "test 29 inside show markers");
  return markers.map((marker, index) => {
    const icon = createIcon({ rotation: marker.rotation, height, width });
    return (
      <Marker
        icon={icon}
        key={index}
        uniceid={index}
        position={marker.position}
        draggable={true}
        eventHandlers={{
          moveend(e) {
            const { lat, lng } = e.target.getLatLng();
            console.log({ lat, lng, index });
            legend.textContent = `change position: ${lat} ${lng}`;
          },
        }}
      >
        <Popup>
          <button onClick={() => removeMarker(index, mapContainer, legend)}>
            delete marker 💔
          </button>
        </Popup>
      </Marker>
    );
  });
};

export default ShowMarkers;
