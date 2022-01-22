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
	console.log(data);
	// Get a random motd from [data]
	const motd = data[
		Math.floor(Math.random() * data.length)
	];
	// Write it in
	$('#motd').attr('innerText', motd)
});