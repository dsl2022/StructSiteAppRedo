import L from "leaflet";
import { Marker, Popup } from "react-leaflet";
import { useDispatch } from "react-redux";
import { updateMarkers } from "../state/markersSlice";
const removeMarker = (index, map, legend) => {
  map.eachLayer((layer) => {
    console.log({ layer });
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
  console.log(markers, "test show markers34");
  return markers?.map((marker, index) => {
    const icon = createIcon({ rotation: marker.rotation, height, width });
    //  const legend = L.control({ position: "bottomleft" });
    // const info = L.DomUtil.create("div", "legend");
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

            console.log({ lat, lng, index, legend });
            // console.log("test 46", marker);
            // if (legend) {
            // dispatch(updateMarkers("id"));
            if (!legend) {
              legend = L.control({ position: "bottomleft" });
              const info = L.DomUtil.create("div", "legend");
              legend.onAdd = () => {
                info.textContent = `imported sample marketers`;
                return info;
              };
              legend.addTo(mapContainer);
              setLegend(info);
            }
            legend.textContent = `change position: ${lat} ${lng}\n ${
              marker?.id ? marker.id : ""
            }`;
            // }
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
