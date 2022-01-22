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
	Dynamic theming based on user's system preferences
***/
const darkTheme = window.matchMedia("(prefers-color-scheme: dark)");
const lightTheme = window.matchMedia("(prefers-color-scheme: light)");

darkTheme.matches
? $('#colorScheme').attr('href', "/src/css/theme/charmga/dark.css") // set the color scheme to dark
: $('#colorScheme').attr('href', "/src/css/theme/charmga/light.css") // set the color scheme to light

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
