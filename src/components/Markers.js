import React, { useState, useEffect } from "react";
import ShowMarkers from "./ShowMarkers";
import L from "leaflet";
import shortUuid from "short-uuid";
import { useSelector, useDispatch } from "react-redux";
import { getMarkers, updateMarkers } from "../state/markersSlice";
const MyMarkers = ({ map }) => {
  const markers = useSelector(getMarkers);
  const [marker, setMarker] = useState([]);
  const [legend, setLegend] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    setMarker(markers.markers);
  }, [markers]);
  useEffect(() => {
    console.log({ marker }, "user effect");
    if (!map) return;
    const legend = L.control({ position: "bottomleft" });
    const bounds = [
      [0, 0],
      [1016, 1590],
    ];
    const info = L.DomUtil.create("div", "legend");
    const image = L.imageOverlay(
      "https://structionsite-code-challenge-assets.s3.us-east-2.amazonaws.com/full_map.png",
      bounds
    ).addTo(map);
    map.fitBounds(image.getBounds());
    legend.onAdd = () => {
      info.textContent = `click on the map, move the marker, click on the marker`;
      return info;
    };

    legend.addTo(map);

    map.on("click", (e) => {
      const { lat, lng } = e.latlng;
      setMarker((mar) => {
        dispatch(
          updateMarkers([
            ...mar,
            { position: [lat, lng], rotation: 0, id: shortUuid.generate() },
          ])
        );
        return [
          ...mar,
          { position: [lat, lng], rotation: 0, id: shortUuid.generate() },
        ];
      });

      //   dispatch(updateMarkers(marker));
      info.textContent = `new marker: ${e.latlng}`;
      setLegend(info);
    });
  }, [map]);

  return marker.length > 0 && legend !== undefined ? (
    <ShowMarkers
      mapContainer={map}
      legend={legend}
      markers={marker}
      setLegend={setLegend}
    />
  ) : null;

  //   marker.length > 0 && legend !== undefined ? (

  //   ) : null;
};

export default MyMarkers;
