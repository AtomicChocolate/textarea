import React from "react";

const About = () => {
	return (
		<div>
			<h1>About textarea.site</h1>
			{/* TODO: add patch notes, about me, about the project, links etc. */}
		</div>
	);
};

function handleClick() {
	console.log("click");
}

const AboutButton = () => {
	return (
		<button
			type="button"
			onClick={() => handleClick()}
			className="bg-inherit text-inherit rounded border border-gray-100 p-1"
		>
			About
		</button>
	);
};

export default About;
export { AboutButton };
