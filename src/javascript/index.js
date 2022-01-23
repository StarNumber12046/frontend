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
// Let's check if the user likes light theme through the browser
let prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;

// (These are the only currently available themes)
const darkTheme = "/src/css/theme/charmga/dark.css";
const lightTheme = "/src/css/theme/charmga/light.css";

// If the user prefers light theme we'll apply light theme to the webpage
// Else fall back to the default dark theme
let theme = prefersLight ? lightTheme : darkTheme;

// We set the '#colorScheme' link to our user's preferred theme
// this is because CSS doesn't allow for dynamic imports with media queries
$('#colorScheme').attr('href', theme)

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
