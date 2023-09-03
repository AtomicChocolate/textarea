import React, { useEffect } from "react";
import UIThemes, { ThemeEntry } from "../../utilities/UIThemes";

type Props = {
	setUITheme: (newTheme: string) => void;
	UITheme: ThemeEntry;
};

function onChange(
	setUITheme: (newTheme: string) => void,
	event: React.ChangeEvent<HTMLSelectElement>
) {
	setUITheme(event.currentTarget.value);
}

const Theme = (props: Props) => {
	useEffect(() => {
		const deviceColor = window.matchMedia("(prefers-color-scheme: dark)").matches;

		// TODO: get color scheme
	})
	return (
		<select
			value={props.UITheme.label}
			onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
				onChange(props.setUITheme, event)
			}
			className="bg-inherit text-inherit rounded border border-gray-100 p-1 self-end"
		>
			{UIThemes.map((theme) => (
				<option key={theme.label} value={theme.label}>
					{theme.label}
				</option>
			))}
		</select>
	);
};

export default Theme;
