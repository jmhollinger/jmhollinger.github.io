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

  var drawingManager = new google.maps.drawing.DrawingManager({
    drawingControl: true,
    drawingControlOptions: {
      position: google.maps.ControlPosition.TOP_LEFT,
      drawingModes: [
        google.maps.drawing.OverlayType.POLYLINE
      ]},
    polylineOptions: {
      clickable: true
    }  

    });
  drawingManager.setMap(map);

  google.maps.event.addListener(drawingManager, 'polylinecomplete', function(line) {

    drawingManager.setOptions({
      drawingControl: true,
      drawingControlOptions: {
      position: google.maps.ControlPosition.TOP_LEFT,
      drawingModes: [
      ]}
    });

    drawingManager.setDrawingMode(null)

    var points = []
    var points_obj = {}
    var p_array = line.getPath().getArray()
    $.each(p_array, function( index, value ) {
      var temp = []
      temp.push(value.lat(), value.lng())
      points.push(temp)
      return points
    });
  
    points_obj = 
    {
        "type": "LineString",
        "coordinates": points
    }

    
    $('#coordinates').val(JSON.stringify(points_obj))
    

    $('#clearmap').click(function(){
    line.setMap(null)

    drawingManager.setOptions({
      drawingControl: true,
      drawingControlOptions: {
      position: google.maps.ControlPosition.TOP_LEFT,
      drawingModes: [
      google.maps.drawing.OverlayType.POLYLINE
      ]}
    })
  
    $('#coordinates').val('')

  })
    
    console.log(points_obj)

  });




  //Set default map bounds, expressed as southwest and northeast points.
  var defaultBounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(37.921971, -84.663139),
      new google.maps.LatLng(38.155595, -84.334923)
      );
  
  map.fitBounds(defaultBounds);

  
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

function postGoogle() {
        
        var util = $('#utility').val();
        var name = $('#name').val();
        var desc = $('#desc').val();
        var start = $('#start').val();
        var end = $('#end').val();
        var xy = $('#coordinates').val();


        var spreadsheetkey = '1zmrxXEmIHvRRyIAlKCOP7pJVKsFXQRlIWIO0SR3m7D4'
            
        $.ajax({
                url: 'https://docs.google.com/forms/d/'+ spreadsheetkey +'/formResponse',
                data: { 
                  "entry.372192304": util,
                  "entry.1791471663": name,
                  "entry.959945629": desc,
                  "entry.2073523555": start,
                  "entry.1949851848": end,
                  "entry.2073488365": xy                 
                },
                type: "POST",
                dataType: "xml",
                statusCode: {
                        0: function() {
                          location.replace("http://172.24.4.63:8080/jmhollinger.github.io/utility-master-plan/")
                        }
                      ,
                        200: function () {
                          location.replace("http://172.24.4.63:8080/jmhollinger.github.io/utility-master-plan/")
                    }
                }
            });
    }