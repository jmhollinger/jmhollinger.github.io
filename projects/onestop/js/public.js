$(document).ready(function() {$('#appform').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        trigger: 'input change keyup',
        fields: {
          name: {validators: {notEmpty: {message: 'Name of business cannot be left blank.'}}},
          contact: {validators: {notEmpty: {message: 'Contact Person cannot be left blank'}}},
          phone1: {validators: {notEmpty: {message: 'Primary Phone cannot be left blank'}, phone: {country: 'US', message: 'Primary phone is not a valid phone number, try something like 859-425-2255'}}},
          phone2: {validators: {phone: {country: 'US', message: 'Secondary phone is not a valid phone number, try something that looks like 859-425-2255'}}},
          email: {validators: {notEmpty: {message: 'The email address cannot be left blank'},emailAddress: {message: 'The email address is not a valid, try something that looks like email@lexintonky.gov'}}},
          address: {validators: {notEmpty: {message: 'Address cannot be left blank.'}}},
          city: {validators: {notEmpty: {message: 'City cannot be left blank.'}, regexp: {regexp: /^lexington$/i, message: 'The business location must be in Lexington.'}}},
          state: {validators: {notEmpty: {message: 'State cannot be left blank.'}, regexp: {regexp: /^ky$/i, message: 'The business location must be in KY.'}}},
          zip: {validators: {notEmpty: {message: 'Zip cannot be left blank.'}, regexp: {regexp: /^\d{5}$/, message: 'Zip code is not valid, try something that looks like 40508.'}}},
          busaddress: {validators: {notEmpty: {message: 'Address cannot be left blank.'}}},
          buscity: {validators: {notEmpty: {message: 'City cannot be left blank.'}}},
          busstate: {validators: {notEmpty: {message: 'State cannot be left blank.'}}},
          bustype: {validators: {notEmpty: {message: 'Business type cannot be left blank.'}}},
          buszip: {validators: {notEmpty: {message: 'Zip cannot be left blank.'}, regexp: {regexp: /^\d{5}$/, message: 'Zip code is not valid, try something that looks like 40508.'}}},
          busactivities: {validators: {notEmpty: {message: 'Business activities cannot be left blank.'}}},
          verify: {validators: {notEmpty: {message: 'You must agree to the statement above to submit the application.'}}}
        }
        });
});

$("#CopyAddress").click(function() 
 {
$("#busaddress").val($("#address").val()).change()
$("#bussuite").val($("#suite").val()).change()
$("#busstate").val($("#state").val()).change()
$("#buscity").val($("#city").val()).change()
$("#buszip").val($("#zip").val()).change()
 });