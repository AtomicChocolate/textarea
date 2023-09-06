import React from "react";
import { useAddToHomescreenPrompt } from "../utilities/PWAPromptToInstall";

const InstallPWA = () => {
	const [prompt, promptToInstall] = useAddToHomescreenPrompt();
	const [visible, setVisible] = React.useState(false);

	React.useEffect(() => {
		if (prompt) {
			setVisible(true);
		}
	}, [prompt]);

	console.log(visible);

	return (
		<button
			type="button"
			onClick={promptToInstall}
			className="`${visible ? '' : 'hidden'}` rounded border p-1"
		>
			Install textarea.site as an app
		</button>
	);
};

export default InstallPWA;
