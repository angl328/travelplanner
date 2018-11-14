const mapboxgl = require("mapbox-gl");

const icons = {
    activity: "http://i.imgur.com/WbMOfMl.png",
    restaurant: "http://i.imgur.com/cqR6pUI.png",
    hotel: "http://i.imgur.com/D9574Cu.png"
}

 const buildMarker = function (type, lngLat) {
    
    const markerDomEl = document.createElement("div");
    markerDomEl.style.width = "32px";
    markerDomEl.style.height = "39px";
    markerDomEl.style.backgroundImage = `url(${icons[type]})`;
  
    let icon = new mapboxgl.Marker(markerDomEl).setLngLat(lngLat);
    return icon;
  }

  module.exports = buildMarker;

