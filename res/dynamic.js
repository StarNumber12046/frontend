/*
	Appends dynamic properties to the resources object
*/
res.pages['_home'] = $('main > section').attr('id');
res.themes['_auto'] = window.matchMedia('(prefers-color-scheme: light)').matches
										? res.themes.light
										: res.themes.dark;