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
function setTheme(path) {
	// Check if the given theme name exists in the res.themes list, if so gets
	// the associated path
	if (path in res.themes) { path = res.themes[path]; }
	// Applies the theme by changing the href attribute of the colorscheme object
	// because CSS does not allow dynamic imports
	$(res.css.color_scheme).attr('href', path);
	return theme;
}

/*
	Get the user's current working page
*/
let section = window.location.hash;

/*
	Move to a specific section of the website
*/
function moveTo(path) {
	// Add a leading # hash to the given string if not already present
	if (!path.startsWith("#")) { path = `#${path}`; }
	// Move to the specified section; it just adds #section to the URL
	window.location.hash = path;
	return section;
}

/*
	Gets the user's screen size, then returns true if it's smaller than the
	threshold, else returns false
*/
const smallScreen = (smallScreen = settings.ux.small_screen) => {
	// Create a media query that checks for screen sizes smaller than smallScreen
	// This only accounts for screens; if the page is printed this will return false
	let mediaQuery = window.matchMedia(`only screen and (max-width: ${smallScreen}px)`);
	return mediaQuery.matches;
};

/*
	Move navbar to the top/bottom
*/
function moveNavbar(position) {
	let navbar = $(res.html.navbar);
	// Change the position attribute of the navbar element, which is assigned to
	// the navbar[position="top"] CSS class
	navbar.attr('position', position);
	return navbar.attr('position');
}