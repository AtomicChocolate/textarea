import React, { useEffect } from "react";
import UIThemes, { ThemeEntry } from "../../utilities/UIThemes";

type Props = {
	setUITheme: (newTheme: string) => void;
	UITheme: ThemeEntry;
};

function onChange(setUITheme: (newTheme: string) => void, newValue: string) {
	setUITheme(newValue);
}

const Theme = (props: Props) => {
	useEffect(() => {
		const deviceColor = window.matchMedia(
			"(prefers-color-scheme: dark)"
		).matches;

		onChange(props.setUITheme, deviceColor ? "Default Dark" : "Default Light");
	}, []);

	const categories = Array.from(
		new Set(UIThemes.map((theme) => theme.category))
	);

	return (
		<select
			aria-label="Theme"
			value={props.UITheme.label}
			onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
				onChange(props.setUITheme, event.currentTarget.value)
			}
			className="bg-inherit text-inherit rounded border p-1 self-end"
		>
			{categories.map((category) => (
				<optgroup key={category} label={category}>
					{UIThemes.filter((theme) => theme.category === category).map(
						(theme) => (
							<option key={theme.label} value={theme.label}>
								{theme.label}
							</option>
						)
					)}
				</optgroup>
			))}
		</select>
	);
};

export default Theme;
