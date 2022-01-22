const darkTheme = window.matchMedia("(prefers-color-scheme: dark)");
const lightTheme = window.matchMedia("(prefers-color-scheme: light)");

darkTheme.matches
? $('#colorScheme').attr('href', "./src/css/theme/charmga/dark.css")
: $('#colorScheme').attr('href', "./src/css/theme/charmga/light.css")

$('#newLink').on('submit', (event) => {
	event.preventDefault();
	const url = $('#urlBox').attr('value');
	let ogData = $.get(url);

	if (ogData) {
		console.log(ogData);
		return true;
	}

	console.log("failed");
	return false;
});
