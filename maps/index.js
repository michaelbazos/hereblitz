
/**
 * Boilerplate map initialization code starts below:
 */

// Step 1: initialize communication with the platform
// In your own code, replace with your own apikey
var platform = new H.service.Platform({
    apikey: atob(window.apikey)
});

var defaultLayers = platform.createDefaultLayers();

// Step 2: initialize a map
var map = new H.Map(document.getElementById('map'), defaultLayers.vector.normal.map, {
    center: new H.geo.Point(30.789, 33.790),
    zoom: 2,
    pixelRatio: window.devicePixelRatio || 1
});
// add a resize listener to make sure that the map occupies the whole container
window.addEventListener('resize', () => map.getViewPort().resize());

// Step 3: make the map interactive
// MapEvents enables the event system
// Behavior implements default interactions for pan/zoom (also on mobile touch environments)
var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));


// Step 4: create the default UI component, for displaying bubbles
var ui = H.ui.UI.createDefault(map, defaultLayers);
