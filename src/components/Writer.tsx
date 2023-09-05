import React from "react";

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
		<textarea
			aria-label="Writer"
			value={props.text}
			onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
				onChange(props.saveText, event)
			}
			autoFocus={true}
			className="w-full h-screen bg-inherit text-inherit border-none text-xl p-4"
		/>
	);
};

export default Writer;
