/*Created by Jonathan Hollinger utilizing the DataTables jQuery Plug-in.*/

/*
 * @summary     DataTables
 * @description Paginate, search and order HTML tables
 * @version     1.10.2
 * @file        jquery.dataTables.js
 * @author      SpryMedia Ltd (www.sprymedia.co.uk)
 * @contact     www.sprymedia.co.uk/contact
 * @copyright   Copyright 2008-2014 SpryMedia Ltd.
 *
 * This source file is free software, available under the following license:
 *   MIT license - http://datatables.net/license
 *
 * This source file is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 * or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.
 *
 * For details please refer to: http://www.datatables.net
*/

/*the selectdata() function accepts the 'dataset' argument from HTML Buttons or other events inr order to display the datatable for each dataset*/

function selectdata(dataset)
        {
          /*Create Divs*/
        $('#content').html('<div id="headerarea"></div><div id="metaarea"></div><div id="tablearea"></div>')

/*Begin Permits Datatable*/
            if (dataset === 'permits')
            {
              var title = 'Building Permits'
              var url = 'permits'
              var coltitles = ["Date", "Address", "Suite","Type","Construction Cost","Owner","Contractor"]
              var metadata = 'Building permits are issued by the Division of Building Inspection for a variety of construction activity, including residential and commercial building construction, remodeling, decks, fences, HVAC, and many other categories. The construction cost of projects is provided by the applicant.'
              $('#headerarea').html('<h3>'+ title +'</h3><a href="data/' + url +'.csv">Download the Data</a>')
              $('#tablearea').html('<table id="example" class ="hover"><thead><tr id="hdrow"></tr></thead></table>')
              $.each(coltitles, function( index, value ) {$("#hdrow").append('<th>'+ value +'</th>')});
              $('#metaarea').html('<br><p><b>About ' + title + ' Data</b></p><p>' + metadata + '</p><br>')
              $('#example').dataTable( {
                 "order": [ 0, 'desc' ],
                 "deferRender": true,
                 "destroy" : true, 
                 "ajax": "data/" + url + ".json",
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
/*End Permits Datatable*/

/*Begin Code Datatable*/
          else if (dataset === 'code') 
            {
              var title = 'Code Enforcement Cases'
              var url = 'code'
              var coltitles = ["Date Opened", "Address", "Case Type","Open/Closed","Status","Status Date"]
              var metadata = 'The Division of Code Enforcement inspects and cites nuisance, housing, and sidewalk violations as categorized under the LFUCG Code of Ordinances, and the International Property Maintenance Code.'
              $('#headerarea').html('<h3>'+ title +'</h3><a href="data/' + url +'.csv">Download the Data</a>')
              $('#tablearea').html('<table id="example"><thead><tr id="hdrow"></tr></thead></table>')
              $.each(coltitles, function( index, value ) {$("#hdrow").append('<th>'+ value +'</th>')});
              $('#metaarea').html('<br><p><b>About ' + title + ' Data</b></p><p>' + metadata + '</p><br>')
              $('#example').dataTable( {
                 "order": [ 0, 'desc' ],
                 "deferRender": true,
                 "destroy" : true, 
                 "ajax": "data/" + url + ".json",
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
/*End Code Datatable*/

/*Begin ROW Datatable*/
            else if (dataset === 'row') 
             {
              var title = 'Right-of-Way Permits'
              var url = 'row'
              var coltitles = ["Date", "Address", "Permit Type","Type of Work","Entity Performing Work","Start Date","End Date","Lane Blockage"]
              var metadata = 'Any entity performing work in a public street or within the right-of-wayis required to acquire a right-of-way permit. Some work is allowed under an "Annual General Permit" while other requires specific permits for the activity.'
              $('#headerarea').html('<h3>'+ title +'</h3><a href="data/' + url +'.csv">Download the Data</a>')
              $('#tablearea').html('<table id="example"><thead><tr id="hdrow"></tr></thead></table>')
              $.each(coltitles, function( index, value ) {$("#hdrow").append('<th>'+ value +'</th>')});
              $('#metaarea').html('<br><p><b>About ' + title + ' Data</b></p><p>' + metadata + '</p><br>')
              $('#example').dataTable( {
                 "order": [ 0, 'desc' ],
                 "deferRender": true,
                 "destroy" : true, 
                 "ajax": "data/" + url + ".json",
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
/*End ROW Datatable*/

/*Begin Historic Preservation Datatable*/
            else if (dataset === 'hp') 
             {
              var title = 'Historic Preservation'
              var url = 'hp'
              var coltitles = ["Date", "Address", "Permit Type","Type of Work","Entity Performing Work","Start Date","End Date","Lane Blockage"]
              var metadata = 'This is the metadata for this dataset'
              $('#headerarea').html('<h3>'+ title +'</h3><a href="data/' + url +'.csv">Download the Data</a>')
              $('#tablearea').html('')
              $.each(coltitles, function( index, value ) {$("#hdrow").append('<th>'+ value +'</th>')});
              $('#metaarea').html('<h3>About ' + title + ' Data </h3><p>' + metadata + '</p>')
              $('#example').dataTable( {
                 "order": [ 0, 'desc' ],
                 "deferRender": true,
                 "destroy" : true, 
                 "ajax": "data/" + url + ".json",
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
        };