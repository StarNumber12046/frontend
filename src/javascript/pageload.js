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
	Replace the '#navigation' div, present in most pages, with the
	standardized navbar in "/content/std/navbar.html", to avoid repetition.
***/
$("#navigation").load("./content/std/navbar.html");

/***
	Shows the message of the day in the '#motd' info panel picked randomly from
	"/assets/motd.json".
***/
$.getJSON("./assets/motd.json", (data) => {
	// Generates a random floating point number between 0 and 1
	const randint = Math.random();
	// Stringify the result
	const randstr = JSON.stringify(randint);
	let randomMotd = randstr.split('.')[1]
	.slice(
		-1 * (
			// Get the length of the stringified length of the array
			// In other words if the array contains 12 elements, we get 2 because '12'
			// is 2 characters long
			// This is so that we can get a random number that's actually in the
			// range of our array
			JSON.stringify(data.length).length
		)
	); // At this point we got the first [JSON.stringify(data.length).length]
	// digits after the decimal point
	randomMotd = int(randomMotd);

	// Finally, get a result
	const motd = data[randomMotd];
	// Write it in
	$('#motd').attr('innerText', motd)
})