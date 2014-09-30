/*
    Created by Jonathan Hollinger, 9-30-2014
    Accepts 'dataset' argument from HTML Buttons to display datatable of each dataset
*/

function selectdata(dataset)
        {
          if (dataset === 'permits')
            {
              $('#tablearea').html('<h3>Building Permits</h3><p>Below is a table of building permit issued by the City of Lexington in 2014. The table can be sorted by field or searched from the bar in the top right corner.</p><p><a href="2014/permits.csv">Download the Data</a></p><table class="hover" id="example"><thead><tr><th>Date</th><th>Address</th><th>Suite</th><th>Permit Type</th><th>Construction Cost</th><th>Owner</th><th>Contractor</th></tr></thead></table>')
              $('#example').dataTable( {
                 "order": [ 0, 'desc' ],
                 "deferRender": true,
                 "destroy" : true, 
                 "ajax": "2014/permits.json",
                 "columns": [
                     { "data": "Date_1" },
                     { "data": "Address_1" },
                     { "data": "Suite_1" },
                     { "data": "Type" },
                     { "data": "ConstructionCost_1" },
                     { "data": "Owner_1" },
                     { "data": "Contractor_1" }
                 ]
             } )
            }
          else if (dataset === 'code') 
            {
              $('#tablearea').html('<h3>Code Enforcement Cases</h3><p>Below is a table Code Enforcement cases and opened by the City of Lexington in 2014. The table can be sorted by field or searched from the bar in the top right corner.</p><p><a href="2014/code.csv">Download the Data</a></p><table class="hover" id="example"><thead><tr><th>Date Opened</th><th>Address</th><th>Case Type</th><th>Open/Closed</th><th>Status</th><th>Status Date</th></tr></thead></table>')
                $('#example').dataTable( {
                 "order": [ 0, 'desc' ],
                 "deferRender": true,
                 "destroy" : true, 
                 "ajax": "2014/code.json",
                 "columns": [
                     { "data": "DateOpened_1" },
                     { "data": "Address_1" },
                     { "data": "CaseType" },
                     { "data": "OpenClosed" },
                     { "data": "Status" },
                     { "data": "StatusDate_1" }
                 ]
             } )

            }
            else if (dataset === 'row') 
            {
              $('#tablearea').html('<h3>Right-of-Way Permits</h3><p>Coming Soon...</p>')
                $('#example').dataTable( {
                 "order": [ 0, 'desc' ],
                 "deferRender": true,
                 "destroy" : true, 
                 "ajax": "2014/code.json",
                 "columns": [
                     { "data": "DateOpened_1" },
                     { "data": "Address_1" },
                     { "data": "CaseType" },
                     { "data": "OpenClosed" },
                     { "data": "Status" },
                     { "data": "StatusDate_1" }
                 ]
             } )

            }
            else if (dataset === 'hp') 
            {
              $('#tablearea').html('<h3>Historic Preservation Activity</h3><p>Coming Soon...</p>')
                $('#example').dataTable( {
                 "order": [ 0, 'desc' ],
                 "deferRender": true,
                 "destroy" : true, 
                 "ajax": "2014/code.json",
                 "columns": [
                     { "data": "DateOpened_1" },
                     { "data": "Address_1" },
                     { "data": "CaseType" },
                     { "data": "OpenClosed" },
                     { "data": "Status" },
                     { "data": "StatusDate_1" }
                 ]
             } )

            }
        };