// A utility that downloads the current text as a .txt file onto the user's device.

import React from "react";

type Props = {
	text: string;
};

function handleClick(text: string) {
	const element = document.createElement("a");
	const file = new Blob([text], { type: "text/plain" });
	element.href = URL.createObjectURL(file);
	element.download = "textarea-exported.txt";
	element.click();
}

const Export = (props: Props) => {
	return (
		<button onClick={() => handleClick(props.text)} className="bg-inherit text-inherit rounded border border-gray-100 p-1">Export</button>
	);
};

export default Export;
