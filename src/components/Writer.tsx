import React from "react";
import styled from "styled-components";

const Textbox = styled.textarea.attrs({
  autoFocus: true,
})`
  width: 100%;
  height: calc(100vh - 35px);
  margin: 0;
  outline: none;
  border: none;
  padding: 10px;

  resize: none;
`;

type Props = {
  text: string;
  saveText: (value: string) => void;
};

function onChange(
  setState: (value: string) => void,
  event: React.ChangeEvent<HTMLTextAreaElement>
) {
  setState(event.currentTarget.value);
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
