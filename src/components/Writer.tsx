import React from "react";
import styled from "styled-components";

const Textbox = styled.textarea.attrs({
	autoFocus: true,
})`
	box-sizing: border-box;
	width: 100vw;
	height: 100vh;
	margin: 0;
	outline: none;
	border: none;
	padding: 30px;
	/* font-size: 1.25em; */
	font-size: 2em;
	line-height: 1.3em;

	resize: none;
	background-color: inherit;
	color: inherit;

	overflow: auto;
`;

type Props = {
	text: string;
	saveText: (value: string) => void;
};

function onChange(
	saveText: (value: string) => void,
	event: React.ChangeEvent<HTMLTextAreaElement>
) {
	saveText(event.currentTarget.value);
}

const Writer = (props: Props) => {
	return (
		<Textbox
			value={props.text}
			onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
				onChange(props.saveText, event)
			}
		/>
	);
};

export default Writer;
