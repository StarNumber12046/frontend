/*
		 _____
		|  ___|_ _ ___ _ __ ___    __ _  __ _
		| |_ / _` / __| '_ ` _ \  / _` |/ _` |
		|  _| (_| \__ \ | | | | || (_| | (_| |
		|_|  \__,_|___/_| |_| |_(_)__, |\__,_|
															|___/
	
	-> Name: index.js
	-> Description: Main webpage script
	-> Resource: /src/js/index.js
	-> Licensing: © 2022, Fasm.ga | https://www.fasmga.org/license
*/

/*** —————————————————— ***//*** —————————————————— ***//*** —————————————————— ***//*** —————————————————— ***/

let form = $('#shortenlink');
let urlBox = $('#urlbox');

// Not connected to prod data at the moment, so just showing
// the user input
form.on('submit', (event) => {
	event.preventDefault();
	$('info')
	.attr('title', 'This is the URL you entered:')
	.text(urlBox.val());
})