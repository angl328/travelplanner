const mapboxgl = require("mapbox-gl");
const buildMarker = require('./marker');

mapboxgl.accessToken = "pk.eyJ1IjoiYW5nbDMyOCIsImEiOiJjam9nYTFydHowZDJ0M3Bwbnlvcnl2dTF5In0.HPjrsytda9UW10dKRY2HsA";

const map = new mapboxgl.Map({
    container: "map",
    center: [-74.009, 40.705], // FullStack NY coordinates. Chicago: [-87.641, 41.895]
    zoom: 12, // starting zoom
    style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available
  });
  
  const marker = buildMarker("hotel", [-74.009151, 40.705086]); // or [-87.6354, 41.8885]
    marker.addTo(map);
  