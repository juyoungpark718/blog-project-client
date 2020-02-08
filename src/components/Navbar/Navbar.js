import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.bgColor};
  padding: 0 6rem;
  height: 6rem;
`;

const Item = styled.div`
  font-style: italic;
  font-size: 2rem;
  font-weight: 700;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 500px;
`;

const Anchor = styled.a`
  font-size: 1.1rem;
  font-weight: bold;
  font-style: italic;
  &:hover {
    color: #aebfc6;
  }
`;

export default function Navbar() {
  return (
    <Container>
      <Item>MY ZOO</Item>
      <Menu>
        <Anchor href="#">Home</Anchor>
        <Anchor href="#">Blog</Anchor>
        <Anchor href="#">Popcast</Anchor>
        <Anchor href="#">The Hosts</Anchor>
        <Anchor href="#">Contact</Anchor>
      </Menu>
    </Container>
  );
}
