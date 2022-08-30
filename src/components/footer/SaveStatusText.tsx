// Handles the current saving status of the text (unsaved, saving, saved)

import React from "react";
import { FooterP } from "../../styles/footer/p";
import { SaveStatus } from "../../utilities/types/SaveStatus";

type Props = {
  saveStatus: SaveStatus;
};

const Status = (props: Props) => {
  return <FooterP>{props.saveStatus}</FooterP>;
};

export default Status;
