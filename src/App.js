import React from "react";
import styled from "styled-components";
import Page from "./Page";

function App() {
  return (
    <>
      <PageContainer>
        <Page />
      </PageContainer>
    </>
  );
}

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export default App;
