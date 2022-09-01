import React, { useState } from "react";
import styled from "styled-components";
import Writer from "./components/Writer";
import Footer from "./components/Footer";
import { GetSave, MakeSave } from "./utilities/Saving";
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
	} else {
		console.warn("Couldn't save text!");
		//TODO warn the user in app
	}
}

function App() {
	const [text, setText] = useState(GetSave() || "Welcome!");

	return (
		<Main>
			<Writer text={text} saveText={() => SaveText(text, setText)} />
			<Footer text={text} saveStatus={text === GetSave()} />
		</Main>
	);
}

export default App;
