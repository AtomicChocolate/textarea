import React from "react";
import Select, { ActionMeta, SingleValue } from "react-select";
import UIThemes, { ThemeEntry } from "../../utilities/UIThemes";

type Props = {
	setUITheme: (newTheme: ThemeEntry) => void;
	UITheme: ThemeEntry;
};

function onChange(
	setUITheme: (newTheme: ThemeEntry) => void,
	newValue: SingleValue<ThemeEntry> | null
) {
	if (!newValue) {
		return;
	}
	setUITheme(newValue);
}

const Theme = (props: Props) => {
	return (
		<Select
			options={UIThemes}
			value={props.UITheme}
			onChange={(newValue: SingleValue<ThemeEntry>) =>
				onChange(props.setUITheme, newValue)
			}
		/>
	);
};

export default Theme;
