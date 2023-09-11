const STORAGE_KEYS = {
	TEXT: "text",
	SETTINGS: "settings",
};

export type SettingsType = {
	Theme: string;
};

const DEFAULT_SETTINGS = {
	Theme:
		window.matchMedia &&
		window.matchMedia("(prefers-color-scheme: dark)").matches
			? "Default Dark"
			: "Default Light",
};

function getFromStorage(key: string, defaultValue: any = ""): any {
	return localStorage.getItem(key) || defaultValue;
}

function saveToStorage(key: string, value: any): void {
	localStorage.setItem(key, value);
}

// Text
function getText(): string {
	return getFromStorage(STORAGE_KEYS.TEXT, "");
}

function saveText(text: string): void {
	saveToStorage(STORAGE_KEYS.TEXT, text);
}

// Settings
function getSettings(): any {
	// Parse the JSON string from localStorage into an object
	const settings = getFromStorage(
		STORAGE_KEYS.SETTINGS,
		JSON.stringify(DEFAULT_SETTINGS)
	);
	return JSON.parse(settings);
}

function saveSettings(settings: any): void {
	// Convert the settings object into a JSON string for storage
	saveToStorage(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
}

export { getText, saveText, getSettings, saveSettings };
