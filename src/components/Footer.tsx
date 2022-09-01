import React from "react";
import styled from "styled-components";
import { SaveStatus } from "../utilities/types/SaveStatus";
import Export from "./footer/Export";
import SaveStatusText from "./footer/SaveStatusText";

const FooterBar = styled.footer`
  position: fixed;
  height: auto;
  width: 100%;
  font-size: 10px;
  bottom: 0px;

  outline: solid black 1px;
  background-color: lightgray;
`;

type Props = {
  text: string;
  saveStatus: boolean;
};

const Footer = (props: Props) => {
  return (
    <FooterBar>
      <Export text={props.text} />
      <SaveStatusText saveStatus={props.saveStatus} />
    </FooterBar>
  );
};

export default Footer;
