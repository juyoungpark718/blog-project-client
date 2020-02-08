import React, { Component } from "react";
import styled from "styled-components";
import Card from "../Card/Card";

const Container = styled.div`
  width: 100%;
  padding: 0 80px;
  background-color: ${props => props.theme.bgColor};
`;

const BackgroundImg = styled.div`
  width: 100%;
  height: 600px;
  background-color: #809096;
`;

export default class Post extends Component {
  render() {
    return (
      <Container>
        <BackgroundImg />
        <Card
          featured
          image={
            "https://cdn.pixabay.com/photo/2020/02/03/17/39/beach-4816249_1280.jpg"
          }
        />
        <Card />
        <Card />
        <Card />
      </Container>
    );
  }
}
