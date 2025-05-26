{
	"$help": "https://aka.ms/terminal-documentation",
	"$schema": "https://aka.ms/terminal-profiles-schema",
	"actions": [],
	"compatibility.allowHeadless": false,
	"copyFormatting": "none",
	"copyOnSelect": false,
	"defaultProfile": "{0caa0dad-35be-5f56-a8ff-afceeeaa6101}",
	"focusFollowMouse": false,
	"keybindings": [
		{
			"id": "Terminal.CopyToClipboard",
			"keys": "ctrl+c"
		},
		{
			"id": "Terminal.PasteFromClipboard",
			"keys": "ctrl+v"
		},
		{
			"id": "Terminal.DuplicatePaneAuto",
			"keys": "alt+shift+d"
		}
	],
	"newTabMenu": [
		{
			"type": "remainingProfiles"
		}
	],
	"profiles": {
		"defaults": {
			"adjustIndistinguishableColors": "never",
			"antialiasingMode": "grayscale",
			"colorScheme": "CGA (\u041a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c)",
			"compatibility.allowDECRQCRA": true,
			// "compatibility.input.forceVT": false,
			"cursorColor": "#00FF00",
			"cursorShape": "bar",
			"elevate": true,
			"experimental.retroTerminalEffect": false,
			"font": {
				"axes": {},
				"cellHeight": "1.4",
				"cellWidth": "0.76",
				"colorGlyphs": true,
				"face": "jetbrains mono",
				"features": {},
				"size": 14,
				"weight": "bold"
			},
			"historySize": 10000000,
			"intenseTextStyle": "all",
			"opacity": 20,
			"padding": "35",
			"scrollbarState": "always",
			"suppressApplicationTitle": false,
			"tabColor": "#00FF00",
			"useAcrylic": true
		},
		"list": [
			{
				"commandline": "%SystemRoot%\\System32\\WindowsPowerShell\\v1.0\\powershell.exe",
				"guid": "{61c54bbd-c2c6-5271-96e7-009a87ff44bf}",
				"hidden": false,
				"name": "Windows PowerShell"
			},
			{
				"commandline": "%SystemRoot%\\System32\\cmd.exe",
				"guid": "{0caa0dad-35be-5f56-a8ff-afceeeaa6101}",
				"hidden": false,
				"name": "\u041a\u043e\u043c\u0430\u043d\u0434\u043d\u0430\u044f \u0441\u0442\u0440\u043e\u043a\u0430"
			},
			{
				"guid": "{b453ae62-4e3d-5e58-b989-0a998ec441b8}",
				"hidden": false,
				"name": "Azure Cloud Shell",
				"source": "Windows.Terminal.Azure"
			},
			{
				"guid": "{2ece5bfe-50ed-5f3a-ab87-5cd4baafed2b}",
				"hidden": false,
				"name": "Git Bash",
				"source": "Git"
			},
			{
				"guid": "{1e3519dc-1c72-54ae-a331-03b4e3d2a279}",
				"hidden": false,
				"name": "Developer Command Prompt for VS 2019",
				"source": "Windows.Terminal.VisualStudio"
			},
			{
				"guid": "{708e8b49-6a21-510d-a082-28763ebe9305}",
				"hidden": false,
				"name": "Developer PowerShell for VS 2019",
				"source": "Windows.Terminal.VisualStudio"
			}
		]
	},
	"schemes": [
		{
			"background": "#000000",
			"black": "#000000",
			"blue": "#0000AA",
			"brightBlack": "#000000",
			"brightBlue": "#5555FF",
			"brightCyan": "#55FFFF",
			"brightGreen": "#00FF00",
			"brightPurple": "#FF55FF",
			"brightRed": "#FF5555",
			"brightWhite": "#FFFFFF",
			"brightYellow": "#FFFF55",
			"cursorColor": "#00FF00",
			"cyan": "#00AAAA",
			"foreground": "#00FF00",
			"green": "#00FF00",
			"name": "CGA (\u041a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c)",
			"purple": "#AA00AA",
			"red": "#AA0000",
			"selectionBackground": "#D7D7D7",
			"white": "#FFFFFF",
			"yellow": "#AA5500"
		}
	],
	"themes": []
}
