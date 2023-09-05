import React, { useState, useEffect } from "react";
import Writer from "./components/Writer";
import Footer from "./components/Footer";
import About from "./components/About";
import { GetSave, MakeSave } from "./utilities/Saving";
import UIThemes from "./utilities/UIThemes";

function SaveText(text: string, setText: (text: string) => void) {
	MakeSave(text);
	if (text === GetSave()) {
		setText(text);
		console.log("Saved!");
	} else {
		console.warn("Couldn't save text!");
		// TODO: warn the user in app
	}
}

function App() {
	const [text, setText] = useState(GetSave() || "Welcome!");
	const [UITheme, setUITheme] = useState(UIThemes[0]);

	function updateUITheme(newTheme: string) {
		const found = UIThemes.find((theme) => theme.label == newTheme);
		if (!found) {
			return;
		}
		setUITheme(found);
	}

	useEffect(() => {
		// Theme changing is applied through CSS
		document.body.className = UITheme.className;
	}, [UITheme]);

	return (
		<>
			<About></About>
			<main className={`h-screen w-screen m-0 overflow-hidden`}>
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
			</main>
		</>
	);
}

export default App;
