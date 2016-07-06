$( document ).ready(function() {
  $.getJSON( "data/parcels.geojson", function( data ) {
  $.each( data.features, function( key, val ) {
    $('#parcels').append('<tr><td>' + val.properties.OBJECTID + '</td><td>' + JSON.stringify(val.geometry) + '</td></tr>')
  });     
});
})

