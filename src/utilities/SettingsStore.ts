import { writable } from "svelte/store";
import { getSettings, saveSettings } from "./Save";

export const settings = writable(getSettings());
settings.subscribe((currentValue) => {
	saveSettings(currentValue);
});
