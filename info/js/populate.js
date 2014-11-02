/*Created by Jonathan Hollinger, use at your own risk. */

function populate()
    {
    var dataset = getUrlParameter('type')
    var idnum = getUrlParameter('ID')

    if (dataset == 'permit') { 
      var fields = '"ID", "Date","Address", "Suite","PermitType", "ConstructionCost","OwnerName","Contractor","lat","lng"'
      var resource = '2691aff1-e555-48d3-9188-aebf1fa8323e'
      var params = {
          sql: 'SELECT' + fields + 'FROM "' + resource + '" WHERE "_id" = ' + idnum};
      $.ajax({
          url: '//www.civicdata.com/api/action/datastore_search_sql',
          data: params,
          dataType: 'jsonp',
          success: function(data) {
          $.each(data.result.records, function(key, property){
          
          $("#title").html('<h1>' + AddressCleaner(property.Address.ProperCase()) + '</h1><h3>Permit</h3>')
          
          $("#details").html('<ul class="permit"><li><b>Permit ID:</b> ' + property.ID + '</li><li><b>Date:</b> ' + FormatDate(property.Date) + '</li><li><b>Address:</b> ' + property.Address.toTitleCase() + ' ' + property.Suite.toTitleCase() + '</li>  <li><b>Permit Type:</b> ' + property.PermitType.toTitleCase() + '</li><li><b>Construction Cost:</b> $' + CurrencyFormat(property.ConstructionCost) + '</li>  <li><b>Owner:</b> ' + property.OwnerName.ProperCase() + '</li><li><b>Contractor:</b> ' + property.Contractor.ProperCase() + '</li></ul><p>If you have questions or concerns about this building permit please contact the Division of Building Inspection at (859) 258-3770.</p>')    
          
          $("#map").html('<iframe width="100%" height="300px" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q=' + AddressCleaner(property.Address) + ' Lexington KY United States &key=AIzaSyDXqhUx3ZQwPBtAVsXg6tz9N_2yvrRydcQ"></iframe>')
                   
          });
          }
        })} 
    else if (dataset == 'code') { 
      var fields = '"CaseNo", "DateOpened","Address","CaseType", "Status","StatusDate", "Closed","lat","lng"'
      var resource = 'ad346da7-ce88-4c77-a0e1-10ff09bb0622'
      var params = {
          sql: 'SELECT' + fields + 'FROM "' + resource + '" WHERE "_id" = ' + idnum};
      $.ajax({
          url: '//www.civicdata.com/api/action/datastore_search_sql',
          data: params,
          dataType: 'jsonp',
          success: function(data) {
          $.each(data.result.records, function(key, property){
          
          $("#title").html('<h1>' + AddressCleaner(property.Address.toTitleCase()) + '</h1><h3>Code Enforcement Case</h3>')
          
          $("#details").html('<ul class="permit"><li><b>Case No:</b> ' + property.CaseNo + '</li><li><b>Date Opened:</b> ' + FormatDate(property.DateOpened) + '</li><li><b>Address:</b> ' + property.Address.toTitleCase() + '</li>  <li><b>Case Type:</b> ' + property.CaseType.toTitleCase() + '</li><li><b>Status:</b> The status of this case was updated to ' + property.Status.toLowerCase() + ' on ' + FormatDate(property.StatusDate) + '</li></ul><p>If you have questions or concerns about this code enforcement case please contact the Division of Code Enforcement at (859) 425-2255.</p>')    
          
          $("#map").html('<iframe width="100%" height="300px" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q=' + AddressCleaner(property.Address) + ' Lexington KY United States &key=AIzaSyDXqhUx3ZQwPBtAVsXg6tz9N_2yvrRydcQ"></iframe>')
                   
          });
          }
        })}
    else{}    
    }

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

    function CurrencyFormat(number)
    {
       var decimalplaces = 2;
       var decimalcharacter = ".";
       var thousandseparater = ",";
       number = parseFloat(number);
       var sign = number < 0 ? "-" : "";
       var formatted = new String(number.toFixed(decimalplaces));
       if( decimalcharacter.length && decimalcharacter != "." ) { formatted = formatted.replace(/\./,decimalcharacter); }
       var integer = "";
       var fraction = "";
       var strnumber = new String(formatted);
       var dotpos = decimalcharacter.length ? strnumber.indexOf(decimalcharacter) : -1;
       if( dotpos > -1 )
       {
          if( dotpos ) { integer = strnumber.substr(0,dotpos); }
          fraction = strnumber.substr(dotpos+1);
       }
       else { integer = strnumber; }
       if( integer ) { integer = String(Math.abs(integer)); }
       while( fraction.length < decimalplaces ) { fraction += "0"; }
       temparray = new Array();
       while( integer.length > 3 )
       {
          temparray.unshift(integer.substr(-3));
          integer = integer.substr(0,integer.length-3);
       }
       temparray.unshift(integer);
       integer = temparray.join(thousandseparater);
       return sign + integer + decimalcharacter + fraction;
    }

String.prototype.ProperCase = function() {
var bigwords = /\b(llc|i|ii|iii|iv|v|vi|vii|viii|ix)\b/i;
var smallwords = /\b(and|if)\b/i;
var result = '';
var oldstring = this.toLowerCase().split(' '); 
var newstring = $.map(oldstring, function( v, i ) {
if (v.match(bigwords) !== null){
result = v.toUpperCase();   
} 
else if (v.match(smallwords) !== null){
result = v.toLowerCase();
} 
else {result = v.replace(v.charAt(0),v.charAt(0).toUpperCase());
}
return(result);
});
return newstring.join(" ");
};

function AddressCleaner(address){
var paren = address.replace(/#.*$/,'');
var hash = paren.replace(/\(.*$/,'');
var nozero = hash.replace(/^0/,'');
var nonum2 = nozero.replace(/-\S*(?=\s)/,'');
return nonum2.trim();
};

function FormatDate(input){
    var parts = input.split('-');
    var year = parts[0];
    var month = parts[1].replace(/^0/, '');
    var day = parts[2].replace(/^0/, '');
    return month + '/' + day + '/' + year;
    }

