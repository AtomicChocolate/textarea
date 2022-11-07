import React from "react";
import UIThemes, { ThemeEntry } from "../../utilities/UIThemes";
import { FooterSelect } from "../../styles/footer/select";

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
	return (
		<FooterSelect
			value={props.UITheme.label}
			onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
				onChange(props.setUITheme, event)
			}
		>
			{UIThemes.map((theme) => (
				<option key={theme.label} value={theme.label}>
					{theme.label}
				</option>
			))}
		</FooterSelect>
	);
};

export default Theme;
