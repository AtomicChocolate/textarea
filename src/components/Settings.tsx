import * as React from "react";

const SettingsContext = React.createContext({
	panelVisible: false,
	// TODO: actual settings like font type, etc.
});

const Settings = () => {
	const settingsData = React.useContext;
	return (
		<div className="settings invisible flex flex-grow max-h-0 transition-all">
			<h1>Settings here</h1>
		</div>
	);
};

function handleClick() {
	// idc
	const div = document.querySelector(".settings");
	if (div) {
		div.classList.toggle("show-settings");
	}
}

// TODO: could use gear icon instead of the word
const SettingsButton = () => {
	return (
		<button
			type="button"
			onClick={handleClick}
			className="bg-inherit text-inherit rounded border p-1"
		>
			Settings
		</button>
	);
};

export default Settings;
export { SettingsContext, SettingsButton };
