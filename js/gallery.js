// Function to display image in overlay
function displayImageOverlay(imageClicked) {

	// Create overlay html variable
	let overlayDiv = $(`
	<div class="overlay">
		<div class="close">X</div>
		<img src="img/` + imageClicked + `" alt="` + imageClicked + `">
	</div>`)

	// Add html to page
	$('body').prepend(overlayDiv);


	$('.overlay .close').click(function () {
		removeImageOverlay();
	})

}

// Function to remove image overlay
function removeImageOverlay() {
	$('.overlay').remove();
}




// faseIn presentation text when page loads
$.when( $.ready ).then(function() {
	$('#hiddenText').fadeIn(500);
});


// Click event listener
$('#carList div figure img').click(function () {

	$('#hiddenText').stop();

	displayImageOverlay( $(this).data('image') );
})