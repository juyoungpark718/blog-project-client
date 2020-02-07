import React from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "../../GlobalStyle";
import theme from "../theme";

const Button = styled.h1`
  font-size: 2em;
  text-align: center;
  color: ${props => props.theme.bgColor};
`;

const Container = styled.div``;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Button>test</Button>
      </Container>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
