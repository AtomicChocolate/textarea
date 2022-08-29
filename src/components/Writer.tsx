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

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

const Writer = (props: Props) => {
  return <Textbox />;
};

export default Writer;
