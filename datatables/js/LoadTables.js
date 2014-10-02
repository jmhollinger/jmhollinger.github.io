/*
    Created by Jonathan Hollinger, 9-30-2014
    Accepts 'dataset' argument from HTML Buttons to display datatable of each dataset
*/

function selectdata(dataset)
        {
          if (dataset === 'permits')
            {
              $('#tablearea').html('<h3>Building Permits</h3><p><a href="data/permits.csv">Download the Data</a></p><table class="hover" id="example"><thead><tr><th>Date</th><th>Address</th><th>Suite</th><th>Permit Type</th><th>Construction Cost</th><th>Owner</th><th>Contractor</th></tr></thead></table>')
              $('#example').dataTable( {
                 "order": [ 0, 'desc' ],
                 "deferRender": true,
                 "destroy" : true, 
                 "ajax": "data/permits.json",
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
              $('#tablearea').html('<h3>Code Enforcement Cases</h3><p><a href="data/code.csv">Download the Data</a></p><table class="hover" id="example"><thead><tr><th>Date Opened</th><th>Address</th><th>Case Type</th><th>Open/Closed</th><th>Status</th><th>Status Date</th></tr></thead></table>')
                $('#example').dataTable( {
                 "order": [ 0, 'desc' ],
                 "deferRender": true,
                 "destroy" : true, 
                 "ajax": "data/code.json",
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
              $('#tablearea').html('<h3>Right-of-Way Permits</h3><p><a href="data/row.csv">Download the Data</a></p><table class="hover" id="example"><thead><tr><th>Date</th><th>Address</th><th>Permit Type</th><th>Type of Work<th>Entity</th><th>Start Date</th><th>End Date</th><th>Lane Blockage</th></tr></thead></table>')
                $('#example').dataTable( {
                 "order": [ 0, 'desc' ],
                 "deferRender": true,
                 "destroy" : true, 
                 "ajax": "data/row.json",
                 "columns": [
                     { "data": "date" },
                     { "data": "address" },
                     { "data": "type" },
                     { "data": "work" },
                     { "data": "entity" },
                     { "data": "start" },
 		             { "data": "end" },
                     { "data": "lnblock" },
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
                 "ajax": "data/code.json",
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