import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "../../GlobalStyle";
import theme from "../theme";
import Navbar from "../Navbar/Navbar";
import Post from "../Post/Post";
import Postform from "../Postform/Postform";

const Container = styled.div``;
const ShowBtn = styled.button`
  position: fixed;
  bottom: 40px;
  right: 40px;
`;

function App() {
  const [isPostform, setValue] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Navbar />
        <Post />
        {isPostform ? (
          <Postform />
        ) : (
          <ShowBtn
            onClick={() => {
              setValue(!isPostform);
            }}
          >
            Post
          </ShowBtn>
        )}
      </Container>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
