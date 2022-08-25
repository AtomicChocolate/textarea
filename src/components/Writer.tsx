import React from 'react'
import styled from "styled-components";

const Textbox = styled.textarea`
    width: 100vw;
    height: calc("100vh - 10px");
    resize: none;
`

type Props = {}

const Writer = (props: Props) => {
  return (
    <Textbox />
  )
}

export default Writer