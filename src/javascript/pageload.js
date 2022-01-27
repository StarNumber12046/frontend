/*
		 _____
		|  ___|_ _ ___ _ __ ___    __ _  __ _
		| |_ / _` / __| '_ ` _ \  / _` |/ _` |
		|  _| (_| \__ \ | | | | || (_| | (_| |
		|_|  \__,_|___/_| |_| |_(_)__, |\__,_|
															|___/
	
	-> Name: pageload.js
	-> Description: Executed at startup for data binding
	-> Resource: /src/javascript/pageload.js
	-> Licensing: © 2022, Fasm.ga | https://www.fasmga.org/license
*/

/*** —————————————————— ***//*** —————————————————— ***//*** —————————————————— ***//*** —————————————————— ***/

/***
	Dynamic theming based on user's system preferences
***/
// Let's check if the user likes light theme through the browser
let prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;

// (These are the only currently available themes)
const darkTheme = "./src/css/theme/charmga/dark.css";
const lightTheme = "./src/css/theme/charmga/light.css";

// If the user prefers light theme we'll apply light theme to the webpage
// Else fall back to the default dark theme
let theme = prefersLight ? lightTheme : darkTheme;

// We set the '#colorScheme' link to our user's preferred theme
// this is because CSS doesn't allow for dynamic imports with media queries
$('#colorScheme').attr('href', theme)

/***
	Automatically move to the user's preferred home page
***/
let home = "#newLink"; // #newLink is the default
window.location.hash = home; // automatically moves to the section in [home]

/***
	Load the global website navigation bar
***/
let navbar = "/content/navbar.html"; // has to be an HTML file
$("#navigation").load(navbar);