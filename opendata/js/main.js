  window.onload = function() { init() };

  var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1_5YhIrnGdyGxEKenfr3S56T3zXX97_bnuEY3zhpf1tw/pubhtml';

  function init() {
    Tabletop.init( { key: public_spreadsheet_url,
                     callback: showInfo,
                     simpleSheet: true,
                    } )
  }

  function showInfo(data, tabletop) {
    $('#table').append(
      '<thead>' +
      '<th>Type</th>' +
      '<th>Application No</th>' +
      '<th>Application Name</th>' +
      '<th>Address</th>' +
      '<th>Date Filed</th>' +
      '<th>Meeting Date</th>' +
      '<th>Body</th>' +
      '<th>Applicant</th>' +
      '</thead>')
    $('#table').append('<tbody id="table-body"></tbody>')
    $.each(data, function(index, key) {
            $('#table-body').append(
              '<tr>' + 
              '<td>' + key.TypeOfApp + '</td>' +
              '<td>' + key.AppNo + '</td>' +
              '<td>' + key.AppName + '</td>' +
              '<td>' + key.Address + '</td>' +
              '<td>' + key.DateFiled + '</td>' +
              '<td>' + key.MeetingDate + '</td>' +
              '<td>' + key.Body + '</td>' +
              '<td>' + key.Applicant + '</td>' +
              '</tr>')
  })}