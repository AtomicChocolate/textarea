import React from 'react'
import styled from 'styled-components';

const FooterBar = styled.footer`
  height: 10px;
  font-size: 10px;
`;

type Props = {}

const Footer = (props: Props) => {
  return (
    <FooterBar>Footer</FooterBar>
  )
}

export default Footer