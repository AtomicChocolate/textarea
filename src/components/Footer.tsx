import React from "react";
import styled from "styled-components";
import Export from "./footer/Export";

const FooterBar = styled.footer`
  position: fixed;
  height: auto;
  width: 100vh;
  font-size: 10px;
  bottom: 0px;

  outline: solid black 1px;
  background-color: lightgray;
`;

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

const Footer = (props: Props) => {
  return (
    <FooterBar>
      <Export />
    </FooterBar>
  );
};

export default Footer;
