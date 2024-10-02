require([
  "esri/Map",
  "esri/views/MapView",
  "esri/layers/GeoJSONLayer"
], function(Map, MapView, GeoJSONLayer) {

  // Step 4: Create a map
  const map = new Map({
    basemap: "streets-navigation-vector" // Can change to satellite, topo, etc.
  });

  // Step 5: Create a MapView
  const view = new MapView({
    container: "viewDiv", // HTML element ID
    map: map,             // Reference to the map object created before
    center: [-94.6, 46.24], // Longitude, latitude of the map center
    zoom: 6               // Initial zoom level
  });

  // Step 6: Load GeoJSON data (we’ll use a local file or URL)
  const geojsonUrl = "C:\Users\ericg\OneDrive\Documents\GIS 5511 Principles of Cartography\Lab 3\rivers.json";

  // Create a GeoJSON layer from the data
  const geojsonLayer = new GeoJSONLayer({
    url: geojsonUrl,
    popupTemplate: {
      title: "{name}", // assuming the GeoJSON has a 'name' property
      content: "{description}" // assuming GeoJSON has 'description' property
    }
  });

  // Step 7: Add GeoJSONLayer to the map
  map.add(geojsonLayer);

});