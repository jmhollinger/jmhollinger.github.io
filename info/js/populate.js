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
          
          $("#title").html('<h1>' + AddressSplitter(ProperCase(property.Address),0) + '</h1><h3>Permit</h3>')
          
          $("#details").html('<ul class="permit"><li><b>Permit ID:</b> ' + property.ID + '</li><li><b>Date:</b> ' + FormatDate(property.Date) + '</li><li><b>Address:</b> ' + ProperCase(property.Address) + ' ' + ProperCase(property.Suite.toTitleCase) + '</li>  <li><b>Permit Type:</b> ' + property.PermitType.toTitleCase() + '</li><li><b>Construction Cost:</b> $' + CurrencyFormat(property.ConstructionCost) + '</li>  <li><b>Owner:</b> ' + property.OwnerName.toTitleCase() + '</li><li><b>Contractor:</b> ' + property.Contractor.toTitleCase() + '</li></ul><p>If you have questions or concerns about this building permit please contact the Division of Building Inspection at (859) 258-3770.</p>')    
          
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
          
          $("#title").html('<h1>' + AddressSplitter(ProperCase(property.Address),0) + '</h1><h3>Code Enforcement Case</h3>')
          
          $("#details").html('<ul class="permit"><li><b>Case No:</b> ' + property.CaseNo + '</li><li><b>Date Opened:</b> ' + FormatDate(property.DateOpened) + '</li><li><b>Address:</b> ' + AddressSplitter(ProperCase(property.Address),1) + '</li>  <li><b>Case Type:</b> ' + property.CaseType.toTitleCase() + '</li><li><b>Status:</b> The status of this case was updated to ' + property.Status.toLowerCase() + ' on ' + FormatDate(property.StatusDate) + '</li></ul><p>If you have questions or concerns about this code enforcement case please contact the Division of Code Enforcement at (859) 425-2255.</p>')    
          
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

function ProperCase(input){
var bigwords = /\b(llc|i|ii|iii|iv|v|vi|vii|viii|ix)\b/i
var smallwords = /\b(and|if)\b/i
var result = ''
var oldstring = input.toLowerCase().split(' '); 
var newstring = $.map(oldstring, function( v, i ) {
if (v.match(bigwords) !== null){
result = v.toUpperCase()   
} 
else if (v.match(smallwords) !== null){
result = v.toLowerCase()
} 
else {result = v.replace(v.charAt(0),v.charAt(0).toUpperCase())
};
return(result)
});
return newstring.join(" ");
}

function AddressSplitter(input,format){
var address = input.toLowerCase().replace(/#.*$/,'').replace(/\(.*$/,'').replace(/\(.*$/,'').trim();
var dirs = /\b(n|s|e|w|north|south|east|west)\b/i;
var sufs = /\b(dr|rd|trl|pl|drive|road|road|trail|place|blvd)\b/i;
var nums1 = /(^[0-9]\S*(?=-)|^[0-9]\S*(?=\s))/;
var nums2 = /-[0-9]*(?=\s)/
var number1 = '';
var number2 = '';
var direction = '';
var street = '';
var suffix = '';
var extra = '';
var fields = ''
var final = ''
if (address.match(nums1) !== null ){number1 = address.match(nums1)[0].trim()}
else {number1 = ''}
if (address.match(nums2) !== null ){number2 = address.match(nums2)[0].substring(1).trim()}
else {number2 = ''}
if (address.match(dirs) !== null ){direction = address.match(dirs)[0].toLowerCase().trim()}
else {direction = ''}
if (address.match(sufs) !== null ){suffix = address.match(sufs)[0].toLowerCase().trim()}
else {suffix = ''}
street = address.replace(number1,'').replace(number2,'').replace(direction,'').replace(suffix,'').replace('-','').trim()
extra = input.toLowerCase().replace(number1,'').replace(number2,'').replace(direction,'').replace(suffix,'').replace('-','').replace(street,'').trim();
if (format == '1'){
  fields = [number1, number2, direction, street, suffix, extra]
}
else {
  fields = [number1, direction, street, suffix]
}
final = $.map(fields, function( v, i ) {
  if (v !== '') {var item = v + ' '}
  else {var item = ''}
  return (item)
})  
return (final.join(''))  
}

function FormatDate(input){
    var parts = input.split('-');
    var year = parts[0];
    var month = parts[1].replace(/^0/, '');
    var day = parts[2].replace(/^0/, '');
    return month + '/' + day + '/' + year;
    }

