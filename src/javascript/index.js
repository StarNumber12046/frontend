const darkTheme = window.matchMedia("(prefers-color-scheme: dark)");
const lightTheme = window.matchMedia("(prefers-color-scheme: light)");

darkTheme.matches
? $('#colorScheme').attr('href', "./src/styles/theme/charmga/dark.css")
: $('#colorScheme').attr('href', "./src/styles/theme/charmga/light.css")
