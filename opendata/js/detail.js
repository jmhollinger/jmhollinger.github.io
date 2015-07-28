  window.onload = function() { init() };

  var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1tqMBzBJNfEJNulf4A0_WqJmZbmynqGAnDA_9FQT8IJ8/pubhtml';

  function init() {
    Tabletop.init( { key: public_spreadsheet_url,
                     callback: showInfo,
                     simpleSheet: true,
                     wanted: ["Actions"]
                     query: PlanID = 
                    } )
  }

  function showInfo(data, tabletop) {
  $('#content').append('<h1>')
    $.each(data, function(index, key) {
            $('#list').append(
              '<tr>' +
              '<td><a href="plan.html?plan=' + key.PlanID + '"><i class="fa fa-plus"></i></a></td>' +
              '<td>' + key.ApplicationType + '</td>' +
              '<td>' + key.ApplicationNo + '</td>' +
              '<td>' + key.PlanName + '</td>' +
              '<td>' + key.PlanAddress + '</td>' +
              '<td>' + key.ApplicationDate + '</td>' +
              '</tr>')
  })}