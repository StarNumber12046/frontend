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

let form = $('#shortenlink');
let urlBox = $('[name="url"]');
let url = urlBox.text(value); // Sanitized user input

// Not connected to prod data at the moment, so just showing
// the user input
form.on('submit', (event) => {
	event.preventDefault();
	$('#newLink').attr('title', url);
})