import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Writer from "./components/Writer";
import Footer from "./components/Footer";
import { GetSave, MakeSave } from "./utilities/Saving";
import UIThemes from "./utilities/UIThemes";

const Main = styled.main`
	background-color: ${(props) => props.theme.backgroundColor};
	color: ${(props) => props.theme.textColor};
`;

function SaveText(text: string, setText: (text: string) => void) {
	MakeSave(text);
	if (text === GetSave()) {
		setText(text);
		console.log("Saved!");
	} else {
		console.warn("Couldn't save text!");
		//TODO warn the user in app
	}
}

function App() {
	const [text, setText] = useState(GetSave() || "Welcome!");
	const [UITheme, setUITheme] = useState(UIThemes[0]); // TODO

	// For changing it from a select list: gets the index of the given label in a table and uses that
	function updateUITheme(newTheme: string) {
		const found = UIThemes.find((theme) => theme.label == newTheme);
		if (!found) {
			return;
		}
		setUITheme(found);
	}

	return (
		<ThemeProvider theme={UITheme.value}>
			<Main className="h-screen w-screen m-0 overflow-hidden">
				<Writer
					text={text}
					saveText={(newText) => SaveText(newText, setText)}
				/>
				<Footer
					text={text}
					saveStatus={text === GetSave()}
					UITheme={UITheme}
					setUITheme={updateUITheme}
				/>
			</Main>
		</ThemeProvider>
	);
}

export default App;
