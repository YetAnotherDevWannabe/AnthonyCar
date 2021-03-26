function resetForm() {
	// Removes error classes
	$('.is-invalid').removeClass('is-invalid');
	$('.is-valid').removeClass('is-valid');
	// Removes any remaining error message
	$('form').find('.invalid-feedback').remove();
}

function setError(errorField, errorTxt) {

	// Create errorDiv html
	let errorDiv = $(`
	<div class="invalid-feedback">
		` + errorTxt + `
	</div>`)

	// Add errorDiv to page
	$(errorField).after(errorDiv)
	// Change element color to red
	$(errorField).addClass('is-invalid');
}



function setSuccess(field)
{
	$(field).removeClass('is-invalid');	// Remove .in-invalid class
	$(field).addClass('is-valid');		// Adds .is-valid class
}

function checkForm() {

	let fieldArray = ['#firstname', '#lastname', '#email', '#phone', '#subject', '#comment'];
	let returnValue = true;

	// Removes any remaining error message
	$('form').find('.invalid-feedback').remove();

	for (let i = 0; i < fieldArray.length; i++)
	{

		if (i == 0)
		{ // Firstname && Lastname
			if ( $(fieldArray[i]).val().length < 1 )
			{ setError(fieldArray[i], 'Doit contenir au moins 1 caractère '); returnValue = false; }// Error
			else
			{ setSuccess(fieldArray[i]); }	// Ok
		}
		else if (i == 1)
		{ // Email
			if ( $(fieldArray[i]).val().length < 5 )
			{ setError(fieldArray[i], 'Doit contenir au moins 5 caractère '); returnValue = false; }// Error
			else
			{ setSuccess(fieldArray[i]); }	// Ok
		}
		else if (i == 2)
		{ // Email
			if ( $(fieldArray[i]).val().length < 5 )
			{ setError(fieldArray[i], 'Doit contenir au moins 5 caractère '); returnValue = false; }// Error
			else
			{ setSuccess(fieldArray[i]); }	// Ok
		}
		else if (i == 3)
		{ // Tel
			if ( $(fieldArray[i]).val().length < 10 )
			{ setError(fieldArray[i], 'Doit contenir au moins 10 caractère '); returnValue = false; }// Error
			else
			{ setSuccess(fieldArray[i]); }	// Ok
		}
		else if (i == 4)
		{ // Subject
			if ( $(fieldArray[i]).val().length < 2 )
			{ setError(fieldArray[i], 'Doit contenir au moins 2 caractère '); returnValue = false; }// Error
			else
			{ setSuccess(fieldArray[i]); }	// Ok
		}
		else if (i == 5)
		{ // Comment
			if ( $(fieldArray[i]).val().length < 20 )
			{ setError(fieldArray[i], 'Doit contenir au moins 20 caractère '); returnValue = false; }// Error
			else
			{ setSuccess(fieldArray[i]); }	// Ok
		}
	}

	return returnValue;

}

function submitForm() {
	// Hide form
	$('form').fadeOut(500, function() {

		// Show successful message
		let successDiv = $(`
		<div id="formSuccess" class="alert alert-success" role="alert">
			Formulaire envoyé !
		</div>`);
		$('#formContainer').prepend(successDiv);

	});
	
}


// Click event on submit button
$('#formSubmit').click(function (e)
{
	e.preventDefault();	// Prevent form from refreshing page

	// Check if form is ok, then submit it
	if (checkForm()) { submitForm(); }
})

// Click event on reset button
$('#formReset').click(function ()
{
	resetForm();
})

$('form').change(function () {
	checkForm();
})