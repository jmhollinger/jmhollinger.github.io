function initialize(){

  //Go ahead and create an empty marker set for address searching.
  var markers = [];
  
  //Set your basic options.
  var mapOptions = {
    overviewMapControl:true,
    rotateControl:true,
    scaleControl:true,
    mapTypeControl: true,
    mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR, position:google.maps.ControlPosition.TOP_CENTER},
    zoomControl: true,
    zoomControlOptions: {style: google.maps.ZoomControlStyle.DEFAULT}
    };

  //Fill up the map-canvas.
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  //Set default map bounds, expressed as southwest and northeast points.
  var defaultBounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(37.921971, -84.663139),
      new google.maps.LatLng(38.155595, -84.334923)
      );
  
  map.fitBounds(defaultBounds);

  //This is the customizable section where you can load data, style it, and display information when it is clicked.
  //Load map data
  map.data.loadGeoJson('data/fiber.geojson')

  //Set conditional styling, get rid of the if else for consistent styling.
  map.data.setStyle(
    {
    strokeColor: '#005dab',
    strokeWeight: 4
    }
    );

   //Create an infowindow.
  var infowindow = new google.maps.InfoWindow();


  //This is the beginning of the address search stuff. 
  // Create the search box and link it to the HTML element.
    var input = /** @type {HTMLInputElement} */(
        document.getElementById('pac-input'));

    var searchBox = new google.maps.places.SearchBox(
      /** @type {HTMLInputElement} */(input));

    // Listen for search box changes.
    google.maps.event.addListener(searchBox, 'places_changed', function() {
      var places = searchBox.getPlaces();

      if (places.length == 0) {
        return;
      }
      for (var i = 0, marker; marker = markers[i]; i++) {
        marker.setMap(null);
      }

      // For each place, get the icon, place name, and location.
      markers = [];
      var bounds = new google.maps.LatLngBounds();
      for (var i = 0, place; place = places[i]; i++) {
        var image = {
          url: place.icon,
          size: new google.maps.Size(71, 71),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(25, 25)
        };

        // Create a marker for each place.
        var marker = new google.maps.Marker({
          map: map,
          icon: image,
          title: place.name,
          position: place.geometry.location
        });


        markers.push(marker);

        bounds.extend(place.geometry.location);
      }
      
      map.fitBounds(bounds);
      //Set zoom level for when an address is selected.
      map.setZoom(14)
        });
    
    // Bias the SearchBox results towards places that are within the bounds of the
    // current map's viewport.
    google.maps.event.addListener(map, 'bounds_changed', function() {
      var bounds = map.getBounds();
      searchBox.setBounds(bounds);
    });
  }
  //End the address search.

google.maps.event.addDomListener(window, 'load', initialize);