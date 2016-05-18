// Initialize google maps
$(document).ready(function(){
    var marker;
    var geocoder = new google.maps.Geocoder();
    var myLatLng = new google.maps.LatLng(51.0486, -114.0708);
    var mapOptions = {
        center: myLatLng,
        disableDoubleClickZoom: true,
        draggable: false,
        mapTypeControl: false,
        scaleControl: false,
        scrollwheel: false,
        zoom: 10,
        zoomControl: false,
    };

    var map = new google.maps.Map($("#map").get(0), mapOptions);
});

function initMap2() {
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
