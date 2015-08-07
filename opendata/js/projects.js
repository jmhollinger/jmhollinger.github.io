
 google.load("visualization", "1", {packages:["corechart","timeline"]});

      google.setOnLoadCallback(drawChart);
 
      function drawChart() {
        var donut_div = document.getElementById('donutchart');
        var donut_chart = new google.visualization.PieChart(donut_div);
        var budget_data = google.visualization.arrayToDataTable([
          ['Category',  'Amount'],
          ['Spent',     200000],
          ['Available', 200000 ]
        ]);

        var budget_options = {
          pieHole: 0.5,
          fontName: 'Raleway'
        };

        donut_chart.draw(budget_data, budget_options);


        var time_div = document.getElementById('timeline');
        var timechart = new google.visualization.Timeline(time_div);
        var time_data = google.visualization.arrayToDataTable([
          ['Phase','Start','End'],
          [ 'Design', new Date(2015, 6, 1), new Date(2015, 9, 1) ],
          [ 'Right of Way',  new Date(2015, 7, 1),  new Date(2015, 11, 1) ],
          [ 'Construction',  new Date(2015, 10, 1),  new Date(2016, 3, 1) ]]);

        var time_options = {
          timeline: {rowLabelStyle:{fontName: 'Raleway'}}
        };

        timechart.draw(time_data, time_options);

      }

function daysToMilliseconds(days) {
      return days * 24 * 60 * 60 * 1000;
    }