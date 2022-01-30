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
	Change the current webpage theme
***/
function setTheme(resource) {
	switch (resource) {
		case 'dark': resource = "./src/css/theme/charmga/dark.css"; break;
		case 'light': resource = "./src/css/theme/charmga/light.css"; break;
	}
	$('#colorscheme').attr('href', resource)
}

/***
	Move to a specific section of the website
***/
function moveTo(section) {
	window.location.hash = section;
}