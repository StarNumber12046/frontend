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


/* Responsive UI stuff */
let changeUI =()=> { setUI([
	isDesktop() && 'desktop' ||
	isTablet() && 'tablet' ||
	isMobile() && 'mobile'
]); };
changeUI();
$(window).on('resize', changeUI);

/* Dynamic theming based on user's system preferences */
setTheme('_auto');

/* Automatically move to the user's preferred home page */
moveTo(settings.ux.home);