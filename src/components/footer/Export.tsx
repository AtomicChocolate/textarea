// A utility that downloads the current text as a .txt file onto the user's device.

import React from "react";
import { FooterButton } from "../../styles/footer/button";

type Props = {
  text: string;
};

function handleClick(text: string) {
  const element = document.createElement("a");
  const file = new Blob([text], { type: "text/plain" });
  element.href = URL.createObjectURL(file);
  element.download = "writehere-exported.txt";
  element.click();
}

const Export = (props: Props) => {
  return (
    <FooterButton onClick={() => handleClick(props.text)}>Export</FooterButton>
  );
};

export default Export;
