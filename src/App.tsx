import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Writer from "./components/Writer";
import Footer from "./components/Footer";
import { GetSave, MakeSave } from "./utilities/Saving";
import UIThemes, { ThemeEntry } from "./utilities/UIThemes";
const Main = styled.div`
	height: 100%;
	width: 100%;
	margin: 0;
	overflow: hidden;

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

	// For changing it from a Select list: gets the index of it in a table and uses that
	function updateUITheme(newTheme: ThemeEntry) {
		const found = UIThemes.find((theme) => theme.label == newTheme.label);
		if (!found) {
			return;
		}
		setUITheme(found);
	}

	return (
		<ThemeProvider theme={UITheme.value}>
			<Main>
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
