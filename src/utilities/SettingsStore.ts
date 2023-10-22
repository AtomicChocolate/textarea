import { writable } from "svelte/store";
import { getSettings, saveSettings } from "./Save";

export type SettingsNamesType = {
	[key: string]: string;
	Theme: string;
	WordWrap: string;
	SpellCheck: string;
	FontFamily: string;
	ExportFileName: string;
};

const settingsNames = {
	Theme: "Theme",
	WordWrap: "Word Wrap",
	SpellCheck: "Spell Check",
	FontFamily: "Font Family",
	ExportFileName: "Export File Name",
} as SettingsNamesType;

const settings = writable(getSettings());
settings.subscribe((currentValue) => {
	saveSettings(currentValue);
});

export { settings, settingsNames };
