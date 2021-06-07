window.onload=function(){
	initmap()
};


function initmap() {

var map = L.map('map').setView([38.04635057521328,-84.49709415435791], 12);

var baseStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoiam1ob2xsNSIsImEiOiJPNl9tZUpVIn0.7wsSG0IuoMQejOWap07m2g', {
    attribution: 'Imagery from <a href="http://mapbox.com/about/maps/">MapBox</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
})

baseStreets.addTo(map);

}