import * as React from "react";
import Writer from "./components/Writer";
import Footer from "./components/Footer";
import About from "./components/About";
import { GetSave, MakeSave } from "./utilities/Saving";
import UIThemes from "./utilities/UIThemes";
import Settings, { SettingsContext } from "./components/Settings";

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
	const [text, setText] = React.useState(GetSave() || "Welcome!");
	const [UITheme, setUITheme] = React.useState(UIThemes[0]);

	function updateUITheme(newTheme: string) {
		const found = UIThemes.find((theme) => theme.label == newTheme);
		if (!found) {
			return;
		}
		setUITheme(found);
	}

	React.useEffect(() => {
		// Theme changing is applied through CSS
		document.body.className = UITheme.className;
	}, [UITheme]);

	const [settingsData, updateSettings] = React.useState({
		panelVisible: false,
		// TODO: actual settings like font type, etc.
	});

	return (
		<main className="h-screen w-screen m-0 overflow-hidden focus-visible:outline-none">
			<SettingsContext.Provider value={settingsData}>
				<About />
				<Writer
					text={text}
					saveText={(newText) => SaveText(newText, setText)}
				/>
				<Settings />
				<Footer
					text={text}
					saveStatus={text === GetSave()}
					UITheme={UITheme}
					setUITheme={updateUITheme}
				/>
			</SettingsContext.Provider>
		</main>
	);
}

export default App;
