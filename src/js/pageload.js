/*
		 _____
		|  ___|_ _ ___ _ __ ___    __ _  __ _
		| |_ / _` / __| '_ ` _ \  / _` |/ _` |
		|  _| (_| \__ \ | | | | || (_| | (_| |
		|_|  \__,_|___/_| |_| |_(_)__, |\__,_|
															|___/
	
	-> Name: pageload.js
	-> Description: Executed at startup for data binding
	-> Resource: /src/js/pageload.js
	-> Licensing: © 2022, Fasm.ga | https://www.fasmga.org/license
*/

/*** —————————————————— ***//*** —————————————————— ***//*** —————————————————— ***//*** —————————————————— ***/


/*
	Responsive UI
*/
checkUI =()=> { setUI([
	isDesktop() && 'desktop' ||
	isTablet() && 'tablet' ||
	isMobile() && 'mobile'
]); };
$(window).on('resize', checkUI);

/*
	Dynamic theming based on user's system preferences
*/
// Let's check if the user likes light theme through the browser
let prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;

// If the user prefers light theme we'll apply light theme to the webpage
// Else fall back to the default dark theme
// We set the '#colorScheme' link to our user's preferred theme
// this is because CSS doesn't allow for dynamic imports with media queries
setTheme(prefersLight ? 'light' : 'dark');

/*
	Automatically move to the user's preferred home page
*/
moveTo(settings.ux.home); // automatically moves to the section in [home]