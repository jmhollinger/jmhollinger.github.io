  var planid = 100002

  var detaillist = Tabletop.init( { key: 'https://docs.google.com/spreadsheets/d/1tqMBzBJNfEJNulf4A0_WqJmZbmynqGAnDA_9FQT8IJ8/pubhtml',
                       callback: showDetails,
                       simpleSheet: true,
                       parseNumbers: true,
                       wanted: ["Plans"],
                       query: 'planid = ' + planid
                   } )

  function showDetails(data, detaillist) {
  $('.container').html(
    '<h1>' + data[0].PlanName + '</h1>'

    )
  }