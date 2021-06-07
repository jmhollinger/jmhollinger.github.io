$("#CopyAddress").click(function() 
 {
$("#busaddress").val($("#address").val()).change()
$("#bussuite").val($("#suite").val()).change()
$("#busstate").val($("#state").val()).change()
$("#buscity").val($("#city").val()).change()
$("#buszip").val($("#zip").val()).change()
 });

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

$(document).ready(function() {$('#firesignoff').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        trigger: 'input change keyup',
        fields: {
          occclass: {validators: {notEmpty: {message: 'This cannot be left blank.'}}},
          occload: {validators: {notEmpty: {message: 'This cannot be left blank.'}}},
          consttype: {validators: {notEmpty: {message: 'This cannot be left blank.'}}},
          sqft: {validators: {notEmpty: {message: 'This cannot be left blank.'}}},
          annualsprinkler: {validators: {notEmpty: {message: 'This cannot be left blank.'}}},
          annualalarm: {validators: {notEmpty: {message: 'This cannot be left blank.'}}},
          exitsigns: {validators: {notEmpty: {message: 'This cannot be left blank.'}}},
          emergencylighting: {validators: {notEmpty: {message: 'This cannot be left blank.'}}},
          extinguishers: {validators: {notEmpty: {message: 'This cannot be left blank.'}}},
          hoods: {validators: {notEmpty: {message: 'This cannot be left blank.'}}},
          detectors: {validators: {notEmpty: {message: 'This cannot be left blank.'}}},
          occupantloadposted: {validators: {notEmpty: {message: 'This cannot be left blank.'}}},
          fireapproval: {validators: {notEmpty: {message: 'This cannot be left blank.'}}},
          fireinspector: {validators: {notEmpty: {message: 'This cannot be left blank.'}}}
        }
        });
});

$(document).ready(function() {$('#bisignoff').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        trigger: 'input change keyup',
        fields: {
          stateapproval: {validators: {notEmpty: {message: 'This cannot be left blank.'}}},
          biapproval: {validators: {notEmpty: {message: 'This cannot be left blank.'}}},
          buildinginspector: {validators: {notEmpty: {message: 'This cannot be left blank.'}}}
        }
        });
});

$(document).ready(function() {$('#planningsignoff').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        trigger: 'input change keyup',
        fields: {
          zone: {validators: {notEmpty: {message: 'This cannot be left blank.'}}},
          permitted: {validators: {notEmpty: {message: 'This cannot be left blank.'}}},
          boa: {validators: {notEmpty: {message: 'This cannot be left blank.'}}},
          parkrequired: {validators: {notEmpty: {message: 'This cannot be left blank.'}}},
          parkprovided: {validators: {notEmpty: {message: 'This cannot be left blank.'}}},
          parklease: {validators: {notEmpty: {message: 'This cannot be left blank.'}}},
          parkleaseatt: {validators: {notEmpty: {message: 'This cannot be left blank.'}}},
          greasetrap: {validators: {notEmpty: {message: 'This cannot be left blank.'}}},
          nonconform: {validators: {notEmpty: {message: 'This cannot be left blank.'}}},
          nonconformboa: {validators: {notEmpty: {message: 'This cannot be left blank.'}}},
          boacaseno: {validators: {notEmpty: {message: 'This cannot be left blank.'}}},
          devplan: {validators: {notEmpty: {message: 'This cannot be left blank.'}}},
          subplan: {validators: {notEmpty: {message: 'This cannot be left blank.'}}},
          conditions: {validators: {notEmpty: {message: 'This cannot be left blank.'}}},
          planningapproval: {validators: {notEmpty: {message: 'This cannot be left blank.'}}},
          planner: {validators: {notEmpty: {message: 'This cannot be left blank.'}}}
        }
        });
});

$(document).ready(function() {$('#payment').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        trigger: 'input change keyup',
        fields: {
          paymentdate: {validators: {notEmpty: {message: 'This cannot be left blank.'}}},
          paymenttype: {validators: {notEmpty: {message: 'This cannot be left blank.'}}},
          paymentplace: {validators: {notEmpty: {message: 'This cannot be left blank.'}}},
          paymentreceivedby: {validators: {notEmpty: {message: 'This cannot be left blank.'}}},
          paymentamount: {validators: {notEmpty: {message: 'This cannot be left blank.'}, numeric: {message: 'This must be a number. Leave out the $.'}}}
        }
        });
});