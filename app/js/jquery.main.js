$(function(){
//field values
var field_values = {
		//id        :  value
		'firstname'  : 'first name',
		'lastname'  : 'last name',
		'email'  : 'email address',
		'dob'  : 'date of birth',
		'contact'  : 'contact number',
		'address1'  : 'address line 1',
		'address2'  : 'address line 2',
		'city'  : 'city',
		'county'  : 'county',
		'postcode'  : 'postcode'
};


		//inputfocus 
		$('input#lastname').inputfocus({ value: field_values['lastname'] });
		$('input#firstname').inputfocus({ value: field_values['firstname'] });
		$('input#dob').inputfocus({ value: field_values['dob'] });
		$('input#email').inputfocus({ value: field_values['email'] }); 
		$('input#contact').inputfocus({ value: field_values['contact'] });
		$('input#address1').inputfocus({ value: field_values['address1'] });
		$('input#address2').inputfocus({ value: field_values['address2'] });
		$('input#city').inputfocus({ value: field_values['city'] });
		$('input#county').inputfocus({ value: field_values['county'] });
		$('input#postcode').inputfocus({ value: field_values['postcode'] });


//reset progress bar
$('#progress').css('width','0');
$('#progress_text').html('0% Complete');

//first_step
$('form').submit(function(){ return false; });
$('#submit_first').click(function(){
	//remove classes
	$('#first_step input').removeClass('error').removeClass('valid');

	//ckeck if inputs aren't empty
	var fields = $('#first_step input[type=text], #first_step input[type=text]');
	var error = 0;
	fields.each(function(){
		var value = $(this).val();
		if( value.length<1 || value==field_values[$(this).attr('id')] ) {
			$(this).addClass('error');
			$(this).effect("shake", { times:3 }, 50);
			
			error++;
		} else {
			$(this).addClass('valid');
		}
	});        
	
	if(!error) {
		if( $('#firstname').val() != $('#firstname').val() ) {
				$('#first_step input[type=text]').each(function(){
					$(this).removeClass('valid').addClass('error');
					$(this).effect("shake", { times:3 }, 50);
				});
				
				return false;
		} else {   
			//update progress bar
			$('#progress_text').html('33% Complete');
			$('#progress').css('width','113px');
			
			//slide steps
			$('#first_step').slideUp();
			$('#second_step').slideDown();     
		}               
	} else return false;
});


$('#submit_second').click(function(){
	//remove classes
	$('#second_step input').removeClass('error').removeClass('valid');

	var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;  
	var fields = $('#second_step input[type=text]');
	var error = 0;
	fields.each(function(){
		var value = $(this).val();
		if( value.length<1 || value==field_values[$(this).attr('id')] || ( $(this).attr('id')=='email' && !emailPattern.test(value) ) ) {
			$(this).addClass('error');
			$(this).effect("shake", { times:3 }, 50);
			
			error++;
		} else {
			$(this).addClass('valid');
		}
	});

	if(!error) {
			//update progress bar
			$('#progress_text').html('66% Complete');
			$('#progress').css('width','226px');
			
			//slide steps
			$('#second_step').slideUp();
			$('#third_step').slideDown();     
	} else return false;

});


$('#submit_third').click(function(){
	//update progress bar
	$('#progress_text').html('100% Complete');
	$('#progress').css('width','339px');

	//fourth step display values
	var fields = new Array(
		$('#firstname').val() + ' ' + $('#lastname').val(),
		$('#dob').val(),
		$('#gender').val(),
		$('#marital').val(),
		$('#contact').val(),
		$('#address1').val(),
		$('#address2').val(),
		$('#city').val(),
		$('#county').val(),
		$('#postcode').val(),
		$('#country').val(),
		$('#email').val(),
		$('#allergy_details').val(),
		$('#medical_history_details').val()                       
	);
	var tr = $('#fourth_step tr');
	tr.each(function(){
		//alert( fields[$(this).index()] )
		$(this).children('td:nth-child(2)').html(fields[$(this).index()]);
	});
			
	//slide steps
	$('#third_step').slideUp();
	$('#fourth_step').slideDown();            
});


$('#submit_fourth').click(function(){
	//send information to server
	alert('Thanks. Your details have been stored in out database securely.');
});

});