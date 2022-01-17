import React, { useState, useEffect } from "react";
import ShowMarkers from "./ShowMarkers";
import L from "leaflet";
import shortUuid from "short-uuid";
import sampleData from "../sample_data.json";
import { useSelector, useDispatch } from "react-redux";
import { addInitMarkers, getMarkers } from "../state/markersSlice";
const MyMarkers = ({ map }) => {
  const [marker, setMarker] = useState([]);
  const [legend, setLegend] = useState();
  const markers = useSelector(getMarkers);
  const dispatch = useDispatch();
  useEffect(() => {
    if (markers.markers.length === 0)
      dispatch(addInitMarkers(sampleData.markers));
  });
  useEffect(() => {
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
      setMarker((mar) => [
        ...mar,
        { position: [lat, lng], rotation: 0, id: shortUuid.generate() },
      ]);

      info.textContent = `new marker: ${e.latlng}`;
      setLegend(info);
    });
  }, [map]);
  console.log("test 44", { marker });
  return marker.length > 0 && legend !== undefined ? (
    <ShowMarkers mapContainer={map} legend={legend} markers={marker} />
  ) : null;
};

export default MyMarkers;
