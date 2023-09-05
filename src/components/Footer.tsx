import React from "react";
import Export from "./footer/Export";
import Theme from "./footer/Theme";
import { ThemeEntry } from "../utilities/UIThemes";
import { AboutButton } from "./About";

type Props = {
	text: string;
	saveStatus: boolean;
	UITheme: ThemeEntry;
	setUITheme: (newTheme: string) => void;
};

const Footer = (props: Props) => {
	return (
		<footer className="fixed bottom-0 h-auto w-screen text-xs px-1 flex justify-between">
			{/* left side */}
			<div className="flex gap-1 bg-inherit text-inherit">
				<Export text={props.text} />
			</div>
			{/* right side */}
			<div className="flex gap-1 bg-inherit text-inherit">
				<AboutButton></AboutButton>
				<Theme setUITheme={props.setUITheme} UITheme={props.UITheme} />
			</div>
		</footer>
	);
};

export default Footer;
