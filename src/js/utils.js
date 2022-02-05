/*
		 _____
		|  ___|_ _ ___ _ __ ___    __ _  __ _
		| |_ / _` / __| '_ ` _ \  / _` |/ _` |
		|  _| (_| \__ \ | | | | || (_| | (_| |
		|_|  \__,_|___/_| |_| |_(_)__, |\__,_|
															|___/
	
	-> Name: utils.js
	-> Description: General utility/debugging functions
	-> Resource: /src/js/utils.js
	-> Licensing: © 2022, Fasm.ga | https://www.fasmga.org/license
*/

/*** —————————————————— ***//*** —————————————————— ***//*** —————————————————— ***//*** —————————————————— ***/


/*
	Get the current user's theme
*/
let theme = $(res.css.color_scheme).attr('href');

/*
	Change the current webpage theme
*/
function setTheme(resource) {
	resource = res.
	$(res.css.color_scheme).attr('href', resource);
	return theme;
}

/*
	Move to a specific section of the website
*/
function moveTo(section) {
	window.location.hash = section;
	return window.location.hash;
}

/*
	Gets the user's screen size, then returns true if it's smaller than the
	threshold, else returns false
*/
const smallScreen = (smallScreen = settings.ux.small_screen) => {
	let mediaQuery = window.matchMedia(`only screen and (min-width: ${smallScreen}px)`);
	return mediaQuery.matches;
};

/*
	Move navbar to the top/bottom
*/
function moveNavbar(position) {
	$('#navigation').attr('position', position);
	return $('#navigation').attr('position');
}