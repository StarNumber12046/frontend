const darkTheme = window.matchMedia("(prefers-color-scheme: dark)");
const lightTheme = window.matchMedia("(prefers-color-scheme: light)");

const smallScreen = window.matchMedia("screen and (max-width: 480px)");

darkTheme.matches
? $('#colorScheme').attr('href', "./src/styles/theme/charmga/dark.css")
: $('#colorScheme').attr('href', "./src/styles/theme/charmga/light.css")

if (smallScreen.matches) {
	$('navbarItem > span').attr(
		'style', "display: none;"
	)
}