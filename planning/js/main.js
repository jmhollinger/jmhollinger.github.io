//Summary

  var summarytable = Tabletop.init( { key: 'https://docs.google.com/spreadsheets/d/1tqMBzBJNfEJNulf4A0_WqJmZbmynqGAnDA_9FQT8IJ8/pubhtml',
                       callback: showApplications,
                       simpleSheet: true,
                       parseNumbers: true,
                       wanted: ["Plans"]
                   } )

  function showApplications(data, summarytable) {
  $('#databrowser').dataTable( {
                 "order": [ 0, 'desc' ],
                 "deferRender": true,
                 "destroy" : true, 
                 "ajax": data,
                                } )
    

  	$('#table').append(
      '<thead>' +
      '<th>Date Filed</th>' +
      '<th>Type</th>' +
      '<th>Application No</th>' +
      '<th>Application Name</th>' +
      '<th>Address</th>' +
      '<th>Council District</th>' +
      '</thead>')
    $('#table').append('<tbody id="table-body"></tbody>')
    $.each(data, function(index, key) {
            $('#table-body').append(
              '<tr>' +
              '<td><a href="plan.html?id=' + key.PlanID + '">' + key.ApplicationDate + '</a></td>' +
              '<td><a href="plan.html?id=' + key.PlanID + '">' + key.ApplicationType + '</a></td>' +
              '<td><a href="planh.tml?id=' + key.PlanID + '">' + key.ApplicationNo + '</a></td>' +
              '<td><a href="plan.html?id=' + key.PlanID + '">' + TitleCase(key.PlanName) + '</a></td>' +
              '<td><a href="plan.html?id=' + key.PlanID + '">' + key.PlanAddress + '</a></td>' +
              '<td><a href="plan.html?id=' + key.PlanID + '">' + key.CouncilDistrict + '</a></td>' +
              '</tr>')
  })}

//Detail

  var planid = getUrlParameter('id')

  var detaillist = Tabletop.init( { key: 'https://docs.google.com/spreadsheets/d/1tqMBzBJNfEJNulf4A0_WqJmZbmynqGAnDA_9FQT8IJ8/pubhtml',
                       callback: showDetails,
                       simpleSheet: true,
                       parseNumbers: true,
                       wanted: ["Plans"],
                       query: 'planid = ' + planid
                   } )

  function showDetails(data, detaillist) {
  $('#detail').html(
      '<h2 class="text-primary">' + TitleCase(data[0].PlanName) + '</h2>' +
      '<div class="row"><div class="col-sm-4">' +
      '<h4>' + TitleCase(data[0].ApplicationType) + '</h4>' +  
      '<p><strong>Plan No: </strong>' + data[0].ApplicationNo + '</p>' +
      '<p><strong>Plan Address: </strong>' + data[0].PlanAddress + '</p>' +
      '<p><strong>Council District: </strong>' + data[0].CouncilDistrict + '</p>' +
      '<p><strong>Representative: </strong>' + data[0].Representative + '</p>' +
      '<p><strong>Date Applied: </strong>' + data[0].ApplicationDate + '</p>' +
      '<p><strong>Current Status: </strong>' + data[0].Status + ' - ' + data[0].StatusDate + '</p>' +
      '<p><strong>Public Hearing: </strong>' + data[0].MeetingBody + ' - ' + data[0].NextMeetingDate + '</p>' +
      '<p><a class="btn btn-success btn-wide" href="' + data[0].Link + '">View the Application/Plan</a></p>' +
      '</div>' +
      '<div class="col-sm-8">' +
      '<iframe width="100%" height="300px" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q=' + data[0].Locator + ' Lexington KY United States &key=AIzaSyDXqhUx3ZQwPBtAVsXg6tz9N_2yvrRydcQ"></iframe>' +
      '</div></div>'
    )
  }

function getUrlParameter(sParam){
var sPageURL = window.location.search.substring(1);
var sURLVariables = sPageURL.split('&');
for (var i = 0; i < sURLVariables.length; i++) 
{
var sParameterName = sURLVariables[i].split('=');
if (sParameterName[0] == sParam) 
   {return sParameterName[1];}}}

function TitleCase (input) {
var bigwords = /\b(aka|llc|hvac|n\/c|^[b-df-hj-np-tv-z]{3,}|i|ii|iii|iv|v|vi|vii|viii|ix)\b/i;
var smallwords = /\b(an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|to|vs)\b/i;
return $.map(input.toLowerCase().split(' '), function( v, i ) {
if (v.match(bigwords) !== null){return v.toUpperCase();} 
else if (v.match(smallwords) !== null){return v.toLowerCase();} 
else {return v.replace(v.charAt(0),v.charAt(0).toUpperCase());}
}).join(" ")};