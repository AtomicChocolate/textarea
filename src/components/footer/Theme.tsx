import React from "react";
import ThemeData from "../../utilities/types/ThemeData";

type Props = {
	UITheme: ThemeData;
};

const Theme = (props: Props) => {
	return (
		<select>
			<option value="dark">Dark</option>
			<option value="light">Light</option>
			<option value="solarized-dark">Solarized Dark</option>
		</select>
		// TODO
	);
};

export default Theme;
