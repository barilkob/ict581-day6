// Initialize google maps
function initMap() {
    var mapDiv = document.getElementById("map");
    var map = new google.maps.Map(mapDiv, {
        center: {lat: 51.0486, lng: -114.0708},
        zoom: 10,
        draggable: false,
        zoomControl: false,
        scaleControl: false,
        scrollWheel: false,
        disableDoubleClickZoom: true,
        mapTypeControl: false,
    });
}
