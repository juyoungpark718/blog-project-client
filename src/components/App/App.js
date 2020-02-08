import React from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "../../GlobalStyle";
import theme from "../theme";
import Navbar from "../Navbar/Navbar";
import Post from "../Post/Post";

const Container = styled.div``;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Navbar />
        <Post />
      </Container>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
