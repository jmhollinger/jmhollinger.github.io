/*Created by Jonathan Hollinger, use at your own risk. */


$(document).ready(populate);

function populate()
    {
    var dataset = getUrlParameter('type')
    var idnum = getUrlParameter('ID')

    var params = {
        sql: 'SELECT "ID", "Date","Address", "Suite","PermitType", "ConstructionCost","OwnerName","Contractor","lat","lng" FROM "2691aff1-e555-48d3-9188-aebf1fa8323e" WHERE "ID" = ' + idnum};
    $.ajax({
        url: '//www.civicdata.com/api/action/datastore_search_sql',
        data: params,
        dataType: 'jsonp',
        success: function(data) {
        $.each(data.result.records, function(key, property){
        
        $("#details").html('<h3>Building Permit</h3><ul class="permit"><li><b>Permit ID:</b> ' + property.ID + '</li><li><b>Date:</b> ' + property.Date + '</li><li><b>Address:</b> ' + property.Address.toTitleCase() + ' ' + property.Suite.toTitleCase() + '</li>  <li><b>Permit Type:</b> ' + property.PermitType.toTitleCase() + '</li><li><b>Construction Cost:</b> $' + CurrencyFormat(property.ConstructionCost) + '</li>  <li><b>Owner:</b> ' + property.OwnerName.toTitleCase() + '</li><li><b>Contractor:</b> ' + property.Contractor.toTitleCase() + '</li></ul>')    
        
        $("#map").html('<iframe width="500" height="500" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q=' + property.Address + ' Lexington KY United States &key=AIzaSyDXqhUx3ZQwPBtAVsXg6tz9N_2yvrRydcQ"></iframe>')

        $("#contact").html('<p>If you have questions or concerns about this ' + dataset.toTitleCase() + ' please contact the Division of Building Inspection at (859) 258-3770 or by email at <a  href = "#" >buildinginspection@lexingtonky.gov</a></p>')
                 
        });
        }
      })} 
    
    function getUrlParameter(sParam)
    {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            return sParameterName[1];
        }
    }
} 