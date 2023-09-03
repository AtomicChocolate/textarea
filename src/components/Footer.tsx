import React from "react";
import styled from "styled-components";
import { ThemeEntry } from "../utilities/UIThemes";
import Export from "./footer/Export";
import Theme from "./footer/Theme";

const FooterBar = styled.footer`
	background-color: ${(props) => props.theme.footerBackgroundColor};
`;

type Props = {
	text: string;
	saveStatus: boolean;
	UITheme: ThemeEntry;
	setUITheme: (newTheme: string) => void;
};

const Footer = (props: Props) => {
	return (
		<FooterBar className="fixed bottom-0 h-auto w-screen text-xs px-1 flex justify-between">
			{/* left side */}
			<div className="flex gap-1">
				<Export text={props.text} />
			</div>
			{/* right side */}
			<div className="flex gap-1">
				<Theme setUITheme={props.setUITheme} UITheme={props.UITheme} />
			</div>
		</FooterBar>
	);
};

export default Footer;
