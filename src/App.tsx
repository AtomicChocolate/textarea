import React, { useState } from "react";
import styled from "styled-components";
import Writer from "./components/Writer";
import Footer from "./components/Footer";
import { SaveStatus } from "./utilities/types/SaveStatus";

const Main = styled.div`
  height: 100%;
  width: 100%;
  margin: 0;
  overflow: hidden;
`;

function App() {
  const [text, setText] = useState("Welcome!");
  const [saveStatus, setSaveStatus] = useState(SaveStatus.Unsaved);

  return (
    <Main>
      <Writer text={text} setText={setText} />
      <Footer text={text} saveStatus={saveStatus} />
    </Main>
  );
}

export default App;
