// Initialize the map
var map = L.map('map').setView([0, 0], 13); // Initial center and zoom level

// Add OpenStreetMap tile layer to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Function to handle geolocation
function onLocationFound(e) {
    var radius = e.accuracy / 2;

    L.marker(e.latlng).addTo(map)
        .bindPopup("You are within " + radius + " meters from this point").openPopup();

    L.circle(e.latlng, radius).addTo(map);
}

function onLocationError(e) {
    alert(e.message);
}

// Try to geolocate the user
map.locate({setView: true, maxZoom: 16});

// Handle location found and error events
map.on('locationfound', onLocationFound);
map.on('locationerror', onLocationError);
