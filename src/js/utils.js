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


/***
	Quickly get a JSON object from a URL
***/
const getJson = (url) => {
	$.getJSON(url, (data) => { console.log(data); return data; });
};

/***
	Webpage resources: pages, styles, content, scripts etc.
***/
const resources = () => { return getJson("/content/resources.json"); };

/***
	Get the user's settings, defaults to default settings if none
***/
const defaults = () => { getJson(resources.data.defaults); };
let settings = () => {
	try { return getJson(resources().data.settings); }
	catch { return defaults(); }
};

/***
	Get the current user's theme
***/
// let theme = $(resources().css.color_scheme).attr('href');
let theme = $('#colorscheme').attr('href');

/***
	Change the current webpage theme
***/
function setTheme(resource) {
	if (!!resources().resource) { resource = resources().resource; }
	// $(resources.css.color_scheme).attr('href', resource);
	$('#colorscheme').attr('href', resource);
	return theme;
}

/***
	Move to a specific section of the website
***/
function moveTo(section) {
	window.location.hash = section;
	return window.location.hash;
}

/***
	Gets the user's screen size, then returns true if it's smaller than the
	threshold, else returns false
***/
const smallScreen = (smallScreen = 800) => {
	let mediaQuery = window.matchMedia(`only screen and (min-width: ${smallScreen}px)`);
	return mediaQuery.matches;
};

/***
	Move navbar to the top/bottom
***/
function moveNavbar(position) {
	$('#navigation').attr('position', position);
	return $('#navigation').attr('position');
}