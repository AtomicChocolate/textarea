const STORAGE_KEYS = {
	TEXT: "text",
	SETTINGS: "settings",
};

export type SettingsType = {
	Theme: string;
	WordWrap: boolean;
	SpellCheck: boolean;
	FontFamily: string;
};

const DEFAULT_SETTINGS = {
	Theme:
		window.matchMedia &&
		window.matchMedia("(prefers-color-scheme: dark)").matches
			? "Default Dark"
			: "Default Light",
	WordWrap: true,
	SpellCheck: true,
	FontFamily:
		'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
} as SettingsType;

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
