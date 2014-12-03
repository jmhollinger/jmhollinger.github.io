$(document).ready(function() {$('#appform').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
          name: {validators: {notEmpty: {message: 'Name of business cannot be empty'}}},
          contact: {validators: {notEmpty: {message: 'Contact Person cannot be empty'}}},
          phone1: {validators: {notEmpty: {message: 'Primary Phone cannot be empty'}, phone: {country: 'US', message: 'Primary phone is not a valid phone number, try something like 859-425-2255'}}},
          phone2: {validators: {phone: {country: 'US', message: 'Secondary phone is not a valid phone number, try something that looks like 859-425-2255'}}},
          email: {validators: {notEmpty: {message: 'The email address cannot be empty'},emailAddress: {message: 'The email address is not a valid, try something that looks like email@lexintonky.gov'}}},
          address: {validators: {notEmpty: {message: 'Address cannot be empty.'}}},
          city: {validators: {notEmpty: {message: 'City cannot be empty.'}, regexp: {regexp: /^lexington$/i, message: 'The business location must be in Lexington.'}}},
          state: {validators: {notEmpty: {message: 'State cannot be empty.'}, regexp: {regexp: /^ky$/i, message: 'The business location must be in KY.'}}},
          zip: {validators: {regexp: {regexp: /^\d{5}$/, message: 'Zip code is not valid, try something that looks like 40508.'}}},
          buscity: {validators: {notEmpty: {message: 'City cannot be empty.'}}},
          busstate: {validators: {notEmpty: {message: 'State cannot be empty.'}}},
          bustype: {validators: {notEmpty: {message: 'Business type cannot be empty.'}}},
          busactivities: {validators: {notEmpty: {message: 'Business activities cannot be empty.'}}}
        }
        });
});

$("#CopyAddress").click(function() 
 {
$("#busaddress").val($("#address").val())
$("#bussuite").val($("#suite").val())
$("#busstate").val($("#state").val())
$("#buscity").val($("#city").val())
$("#buszip").val($("#zip").val()) 
 });
