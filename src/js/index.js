/*
		 _____
		|  ___|_ _ ___ _ __ ___    __ _  __ _
		| |_ / _` / __| '_ ` _ \  / _` |/ _` |
		|  _| (_| \__ \ | | | | || (_| | (_| |
		|_|  \__,_|___/_| |_| |_(_)__, |\__,_|
															|___/
	
	-> Name: index.js
	-> Description: Main webpage script
	-> Resource: /src/js/index.js
	-> Licensing: © 2022, Fasm.ga | https://www.fasmga.org/license
*/

/*** —————————————————— ***//*** —————————————————— ***//*** —————————————————— ***//*** —————————————————— ***/

let shortenLink = $('#shortenlink');
let urlBox = $('#urlbox');
let debug = $('#debug');
let repl = $('#repl');

// Not connected to prod data at the moment, so just showing
// the user input
shortenLink.on('submit', (event) => {
	event.preventDefault();
	$('info')
	.attr('type', 'info')
	.attr('title', 'This is the URL you entered:')
	.html(`<a href='${urlBox.val()}'>${urlBox.val()}</a>
<i>This demo is not connected to production APIs.</i>
`);
});

urlBox.on('invalid', (event) => {
	if (urlBox.val() === "2+3") { go("https://billwurtz.com/2plus3.mp4"); }
})

debug.on('submit', (event) => {
	event.preventDefault();
	try {
		let result = eval(repl.val());
		$('code')
		.attr('title', `Evaluated expression: ${repl.val()}`)
		.text(result);
	} catch (error) {
		$('code')
		.attr('type', 'error')
		.attr('title', typeof error)
		.text(error.message);
	}
});
