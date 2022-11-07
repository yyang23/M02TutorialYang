mapboxgl.accessToken =
  "pk.eyJ1IjoieXlhbmcyNCIsImEiOiJjbGE3OTJ4Nncxc3I0M29vM2Q0dThvdXBzIn0.7tp_Z06SEyRUm-Bp16RQzQ";
const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/mapbox/streets-v11", // style URL
  center: [-71.060982, 42.35735], // starting position [lng, lat]
  zoom: 18, // starting zoom
  projection: "globe", // display the map as a 3D globe
});
map.on("style.load", () => {
  map.setFog({}); // Set the default atmosphere style
});
