  window.onload = function() { init() };

  var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1tqMBzBJNfEJNulf4A0_WqJmZbmynqGAnDA_9FQT8IJ8/pubhtml';

  function init() {
    Tabletop.init( { key: public_spreadsheet_url,
                     callback: showInfo,
                     simpleSheet: true,
                     wanted: ["Plans"]
                    } )
  }

  function showInfo(data, tabletop) {
  	$('#table').append(
      '<thead>' +
      '<th></th>' +
      '<th>Type</th>' +
      '<th>Application No</th>' +
      '<th>Application Name</th>' +
      '<th>Address</th>' +
      '<th>Date Filed</th>' +
      '</thead>')
    $('#table').append('<tbody id="table-body"></tbody>')
    $.each(data, function(index, key) {
            $('#table-body').append(
              '<tr>' +
              '<td><a href="plan.html?plan=' + key.PlanID + '"><i class="fa fa-plus"></i></a></td>' +
              '<td>' + key.ApplicationType + '</td>' +
              '<td>' + key.ApplicationNo + '</td>' +
              '<td>' + key.PlanName + '</td>' +
              '<td>' + key.PlanAddress + '</td>' +
              '<td>' + key.ApplicationDate + '</td>' +
              '</tr>')
  })}