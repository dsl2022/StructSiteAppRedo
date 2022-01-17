export const updateMarkerById = ({ markers, lat, lng, targetId }) => {
  return markers.map((mar) => {
    if (mar.id === targetId) {
      const newMarkerObject = {};
      newMarkerObject["position"] = [lat, lng];
      newMarkerObject["rotation"] = mar.rotation;
      newMarkerObject["id"] = mar.id;
      return newMarkerObject;
    }
    return mar;
  });
};
