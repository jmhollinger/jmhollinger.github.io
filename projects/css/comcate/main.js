var current, date
current = new Date()
date = current.getFullYear() + '-' + ("0" + (current.getMonth() + 1)).slice(-2) + '-' + ("0" + current.getDate()).slice(-2)
time = current.getHours() + ':' + current.getMinutes()

$('#add-appeal').click(function() {
  $('#appeal-body').prepend( 
'<tr>' + 
'<td><input class="input" value="' + date + '" type="date"></td>' +
'<td><input class="input" type="text" value=""></td>' + 
'<td><input class="input" value="" type="date"></td>' +
'<td><select class="input" ><option>Awaiting Hearing</option><option>Withdrawn</option><option>Violation Upheld</option><option>Violation Overturned</option></select></td>' +
'<td><input class="input" value="" type="text"></td>' + 
'</tr>')

  $('#appeal-history').prepend(
  '<tr>' + 
    '<td>' + date + ' ' + time + '</td>' +
    '<td>Jonathan Hollinger #48238</td>' + 
    '<td>Added Appeal</td>' +
  '</tr>'
  )
  
})

$('#add-assistance').click(function() {
$('#assistance-body').prepend(                          
  '<tr>'+
  '<td><input class="input" value="' + date + '" type="date"></td>' +
  '<td><input class="input" type="text" value=""></td>' +
  '<td><select class="input" ><option>CDBG Rehab</option><option>Realtors Community Housing</option><option>Sidewalk Assistance</option></select></td>' +
  '<td><select class="input" ><option>Awaiting Eligibility Determination</option>     <option>Eligible</option><option>Not Eligible</option></select></td>' +
 '<td><input class="input" value="" type="text"></td>' +
'</tr>')

  $('#assistance-history').prepend(
  '<tr>' + 
    '<td>' + date + ' ' + time + '</td>' +
    '<td>Jonathan Hollinger #48238</td>' + 
    '<td>Added Appeal</td>' +
  '</tr>'
  )

})

$('#add-abatement').click(function() {
$('#abatement-body').prepend(
 '<tr>'+
 '<td><input class="input" type="date" value="' + date + '"></td>' +
 '<td><input class="input" type="text" value=""></td>' +
 '<td><input class="input" type="number" value=""></td>' +
 '<td><input class="input" type="text" value=""></td>' +
 '<td><input class="input" type="text" value=""></td>' +
'</tr>'                             
)

  $('#abatement-history').prepend(
  '<tr>' + 
    '<td>' + date + ' ' + time + '</td>' +
    '<td>Jonathan Hollinger #48238</td>' + 
    '<td>Added Appeal</td>' +
  '</tr>'
  )
})

$('#add-liens').click(function() {
$('#liens-body').prepend(                          
  '<tr>'+
  '<td><input class="input" value="' + date + '" type="date"></td>' + 
  '<td><input class="input" type="number" value=""></td>' +
  '<td><select class="input"><option>Unpaid Civil Penalty</option><option>Abatement</option></select></td>' +
  '<td><input class="input" value="" type="text"></td>' +
'</tr>'                             
)

  $('#lien-history').prepend(
  '<tr>' + 
    '<td>' + date + ' ' + time + '</td>' +
    '<td>Jonathan Hollinger #48238</td>' + 
    '<td>Added Appeal</td>' +
  '</tr>'
  )
})