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


/* The document body in jQuery */
const body =()=> $(document.body);

/* Get the current browser location */
let href =()=> { return window.location.href; };

/* Change the user's location */
function go(href) {
	window.location.href = href;
	return href;
}

/* Get the current user's theme */
let theme =()=> { return $(res.css.colorScheme).attr('href'); };

/* Change the current webpage theme */
function setTheme(path) {
	// Check if the given theme name exists in the res.themes list, if so gets
	// the associated path
	if (path in res.themes) { path = res.themes[path]; }
	// Applies the theme by changing the href attribute of the colorscheme object
	// because CSS does not allow dynamic imports
	$(res.css.colorScheme).attr('href', path);
	return theme();
}

/* Handling screen sizes */
function screenSmaller(size) {
	return window.matchMedia(`only screen and (max-width: ${size}px)`).matches;
}
function screenLarger(size) {
	return window.matchMedia(`only screen and (min-width: ${size}px)`).matches;
}

let isDesktop =()=> { return screenLarger(settings.ux.desktopScreen); }
let isTablet =()=> { return screenLarger(settings.ux.tabletScreen) && screenSmaller(settings.ux.desktopScreen); }
let isMobile =()=> { return screenSmaller(settings.ux.mobileScreen); }

/* Switch between UI modes */
function setUI(device) {
	res.ui[device].forEach(expr => {
		return eval(expr)
	});
}

/* Get the user's current working page */
let section =()=> window.location.hash.replace('#', '');

/* The page's header */
let header =()=> $('header').first();

/* The page's footer */
let footer =()=> $('footer').last();

/* Move to a specific section of the website */
function moveTo(path) {
	// Add a leading # hash to the given string if not already present
	if (!path.startsWith("#")) { path = `#${path}`; }
	// Move to the specified section; it just adds #section to the URL
	window.location.hash = path;
	return section();
}

/*
	Show the header at the top of the screen, absolutely positioned
*/
function showHeader() {
	header().addClass('sticky');
	return header;
}
function hideHeader() {
	header().removeClass('sticky');
	return header;
}

/* Convenience functions for quicker debugging */
const dark =()=> setTheme('dark');
const light =()=> setTheme('light');
const desktop =()=> setUI('desktop');
const tablet =()=> setUI('tablet');
const mobile =()=> setUI('mobile');