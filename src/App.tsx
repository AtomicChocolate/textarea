import React, { useState } from "react";
import styled from "styled-components";
import Writer from "./components/Writer";
import Footer from "./components/Footer";
import { GetSave, MakeSave } from "./utilities/Saving";
import UIThemes from "./utilities/types/UIThemes";
const Main = styled.div`
	height: 100%;
	width: 100%;
	margin: 0;
	overflow: hidden;
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
	const [UITheme, setUITheme] = useState(UIThemes.Light); // TODO

	return (
		<Main>
			<Writer text={text} saveText={(newText) => SaveText(newText, setText)} />
			<Footer
				text={text}
				saveStatus={text === GetSave()}
				UITheme={UITheme}
				setUITheme={setUITheme}
			/>
		</Main>
	);
}

export default App;
