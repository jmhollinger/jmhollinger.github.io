/*Created by Jonathan Hollinger, use at your own risk. */


$(document).ready(populate);

function populate()
    {
    var dataset = getUrlParameter('type')
    var idnum = getUrlParameter('ID')

    if (dataset == 'permit') { 
      var fields = '"ID", "Date","Address", "Suite","PermitType", "ConstructionCost","OwnerName","Contractor","lat","lng"'
      var resource = '2691aff1-e555-48d3-9188-aebf1fa8323e'
      var params = {
          sql: 'SELECT' + fields + 'FROM "' + resource + '" WHERE "ID" = ' + idnum};
      $.ajax({
          url: '//www.civicdata.com/api/action/datastore_search_sql',
          data: params,
          dataType: 'jsonp',
          success: function(data) {
          $.each(data.result.records, function(key, property){
          
          $("#details").html('<h3>Building Permit</h3><ul class="permit"><li><b>Permit ID:</b> ' + property.ID + '</li><li><b>Date:</b> ' + property.Date + '</li><li><b>Address:</b> ' + property.Address.toTitleCase() + ' ' + property.Suite.toTitleCase() + '</li>  <li><b>Permit Type:</b> ' + property.PermitType.toTitleCase() + '</li><li><b>Construction Cost:</b> $' + CurrencyFormat(property.ConstructionCost) + '</li>  <li><b>Owner:</b> ' + property.OwnerName.toTitleCase() + '</li><li><b>Contractor:</b> ' + property.Contractor.toTitleCase() + '</li></ul>')    
          
          $("#map").html('<iframe width="500" height="500" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q=' + property.Address + ' Lexington KY United States &key=AIzaSyDXqhUx3ZQwPBtAVsXg6tz9N_2yvrRydcQ"></iframe>')

          $("#contact").html('<p>If you have questions or concerns about this building permit please contact the Division of Building Inspection at (859) 258-3770.</p>')
                   
          });
          }
        })} 
    else if (dataset == 'code') { 
      var fields = '"CaseNo", "DateOpened","Address","CaseType", "Status","StatusDate", "Closed","lat","lng"'
      var resource = 'ad346da7-ce88-4c77-a0e1-10ff09bb0622'
      var params = {
          sql: 'SELECT' + fields + 'FROM "' + resource + '" WHERE "CaseNo" = ' + idnum};
      $.ajax({
          url: '//www.civicdata.com/api/action/datastore_search_sql',
          data: params,
          dataType: 'jsonp',
          success: function(data) {
          $.each(data.result.records, function(key, property){
          
          $("#details").html('<h3>Building Permit</h3><ul class="permit"><li><b>Case No:</b> ' + property.CaseNo + '</li><li><b>Date Opened:</b> ' + property.DateOpened + '</li><li><b>Address:</b> ' + property.Address.toTitleCase() + '</li>  <li><b>Case Type:</b> ' + property.CaseType.toTitleCase() + '</li><li><b>Status:</b> $' + property.Status.toTitleCase() + '</li>  <li><b>Status Date:</b> ' + property.StatusDate + '</li></ul>')    
          
          $("#map").html('<iframe width="500" height="500" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q=' + property.Address + ' Lexington KY United States &key=AIzaSyDXqhUx3ZQwPBtAVsXg6tz9N_2yvrRydcQ"></iframe>')

          $("#contact").html('<p>If you have questions or concerns about this building permit please contact the Division of Building Inspection at (859) 258-3770.</p>')
                   
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

/* 
  * To Title Case 2.1 – http://individed.com/code/to-title-case/
  * Copyright © 2008–2013 David Gouch. Licensed under the MIT License.
 */
String.prototype.toTitleCase = function(){
  var smallWords = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;

  return this.toLowerCase().replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g, function(match, index, title){
    if (index > 0 && index + match.length !== title.length &&
      match.search(smallWords) > -1 && title.charAt(index - 2) !== ":" &&
      (title.charAt(index + match.length) !== '-' || title.charAt(index - 1) === '-') &&
      title.charAt(index - 1).search(/[^\s-]/) < 0) {
      return match.toLowerCase();
    }

    if (match.substr(1).search(/[A-Z]|\../) > -1) {
      return match;
    }

    return match.charAt(0).toUpperCase() + match.substr(1);
  });
};

