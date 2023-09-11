import { writable } from "svelte/store";

type PanelState = {
    about: boolean;
    settings: boolean;
} 

export const panels = writable({
    about: false,
    settings: false
} as PanelState);