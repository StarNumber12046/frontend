/*
		 _____
		|  ___|_ _ ___ _ __ ___    __ _  __ _
		| |_ / _` / __| '_ ` _ \  / _` |/ _` |
		|  _| (_| \__ \ | | | | || (_| | (_| |
		|_|  \__,_|___/_| |_| |_(_)__, |\__,_|
															|___/
	
	-> Name: index.js
	-> Description: Main webpage script
	-> Resource: /src/javascript/index.js
	-> Licensing: © 2022, Fasm.ga | https://www.fasmga.org/license
*/

/*** —————————————————— ***//*** —————————————————— ***//*** —————————————————— ***//*** —————————————————— ***/

/***
	Handling data from the '#newLink' form
***/
$('#newLink').on('submit', (event) => {
	// Prevent reloading the page
	event.preventDefault();
	// Get the current value inserted in the URL box
	const url = $('#urlBox').attr('value');
	// Get the webpage metadata from url
	let ogData = $.get(url);

	// If ogData is not null, return the OpenGraph Protocol data
	// used to extract link previews
	if (ogData) {
		console.log(ogData);
		return true;
	}

	// Else, return false and fallback to the default link card
	// style
	console.log("failed");
	return false;
});
