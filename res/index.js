/*
	Webpage resources: pages, styles, content, scripts etc.
*/
const res = {
	"html": {
		"index": "./index.html",
		"navbar": "#navbar"
	},
	"css": {
		"colorScheme": "#colorscheme",
		"style": "./src/css/style.css",
		"static": "./src/css/static.css",
	},
	"ui": {
		"mobile": [
			"moveNavbar('bottom');"
		],
		"tablet": [
			"moveNavbar('bottom');"
		],
		"desktop": [
			"moveNavbar('top');"
		]
	},
	"themes": {
		"dark": "./src/css/theme/dark.css",
		"light": "./src/css/theme/light.css"
	},
	"js": {
		"utils": "./src/js/utils.js",
		"main": "./src/js/index.js",
		"pageload": "./src/js/pageload.js"
	},
	"data": {
		"settings": "./src/user/settings.json",
		"defaults": "./src/user/defaults.json"
	}
};