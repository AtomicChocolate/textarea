import { writable } from "svelte/store";
import { getText, saveText } from "./Save";

export const text = writable(getText());
text.subscribe(currentValue => saveText(currentValue));
