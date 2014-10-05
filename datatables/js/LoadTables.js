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

/*the selectdata() function accepts the 'dataset' argument from HTML Buttons or other events to display the datatable for each dataset*/

function selectdata(dataset)
        {
/*Create Variables*/
        var title = ""
        var jsonurl = ""
        var csvurl = ""
        var metadata = ""
        var coltitles = ""
        var datatitles = ""
/*Permits Variable assignment*/       
        if (dataset === 'permits') {
            title = 'Building Permits'
            jsonurl = 'data/permits.json'
            csvurl = 'data/permits.csv'
            metadata = 'Building permits are issued by the Division of Building Inspection for a variety of construction activity, including residential and commercial building construction, remodeling, decks, fences, HVAC, and many other categories. The construction cost of projects is provided by the applicant.'
            coltitles = ["Date", "Address", "Suite","Type","Construction Cost","Owner","Contractor"]
            datatitles = [{ "data": "Date_1"},{ "data": "Address_1"},{ "data":  "Suite_1"},{ "data":  "Type"},{ "data":  "ConstructionCost_1"},{ "data":  "Owner_1"},{ "data":  "Contractor_1"}]
        }
/*Code Variable assignment*/
        else if (dataset === 'code') {
            title = 'Code Enforcement Cases'
            jsonurl = 'data/code.json'
            csvurl = 'data/code.csv'
            metadata = 'The Division of Code Enforcement inspects and cites nuisance, housing, and sidewalk violations as categorized under the LFUCG Code of Ordinances, and the International Property Maintenance Code.'
            coltitles = ["Date Opened", "Address", "Case Type","Open/Closed","Status","Status Date"]
            datatitles = [{ "data": "DateOpened_1" },{ "data":  "Address_1" },{ "data":  "CaseType" },{ "data": "OpenClosed" },{ "data": "Status" },{ "data": "StatusDate_1"}]
        }
/*ROW Variable assignment*/
        else if (dataset === 'row') {
            title = 'Right-of-Way Permits'
            jsonurl = 'data/row.json'
            csvurl = 'data/row.csv'
            metadata = 'Any entity performing work on a public street or within the right-of-way is required to have a right-of-way permit.'
            coltitles = ["Date", "Address", "Permit Type","Type of Work","Entity Performing Work","Start Date","End Date","Lane Blockage"]
            datatitles = [{ "data": "date" },{ "data": "address" },{ "data": "type" },{ "data": "work" },{ "data": "entity" },{ "data": "start" },{ "data": "end" },{ "data": "lnblock" }]
        }
        else {
            $('#content').html('<h3>Planning, Preservation, and Development Data Browser</h3><p>Please select a topic from the navigation bar to begin exploring city data.</p>')
        }
/*Create Descriptive Content*/
              $('#content').html('<div id="headerarea"></div><div id="metaarea"></div><div id="tablearea"></div>')
              $('#headerarea').html('<h3>'+ title +'</h3>')
              $('#metaarea').html('<p>' + metadata + '</p><a href="' + csvurl +'">Download the Data</a><p></p>')
              $('#tablearea').html('<table id="databrowser" class="table-responsive" class="hover"><thead><tr id="hdrow"></tr></thead></table>')
              $.each(coltitles, function( index, value ) {$("#hdrow").append('<th>'+ value +'</th>')})
/*Create Table*/
              $('#databrowser').dataTable( {
                 "order": [ 0, 'desc' ],
                 "deferRender": true,
                 "destroy" : true, 
                 "ajax": jsonurl,
                 "columns": datatitles
                                } )
        }
