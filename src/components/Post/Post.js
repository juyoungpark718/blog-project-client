import React, { Component } from "react";
import styled from "styled-components";
import Card from "../Card/Card";
import { getPostList } from "../../axios/axios";

const Container = styled.div`
  width: 100%;
  padding: 0 80px;
  background-color: ${props => props.theme.bgColor};
`;

const FirstImg = styled.div`
  width: 100%;
  height: 600px;
  background-color: #809096;
  background-image: url("https://cdn.pixabay.com/photo/2017/08/06/12/06/people-2591874_1280.jpg");
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const SecondImg = styled.div`
  width: 100%;
  height: 600px;
  background-color: #809096;
  background-image: url("https://cdn.pixabay.com/photo/2015/07/05/13/44/beach-832346_1280.jpg");
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const LatestPost = styled.div`
  width: 100%;
  padding: 20px;
`;

const LatestHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: cetner;
  padding: 40px;
  span {
    font-size: 48px;
    font-weight: 700;
    font-style: italic;
  }
`;

export default class Post extends Component {
  state = {
    postList: []
  };
  componentDidMount() {
    this._getPostList();
  }
  _getPostList = async () => {
    const { data } = await getPostList();
    this.setState({
      postList: data
    });
  };
  render() {
    return (
      <Container>
        <FirstImg />
        <Card
          featured
          image={
            "https://cdn.pixabay.com/photo/2020/02/03/17/39/beach-4816249_1280.jpg"
          }
        />
        <SecondImg />
        <LatestPost>
          <LatestHeader>
            <span>Latest Post !!</span>
          </LatestHeader>
          {this.state.postList.map(post => (
            <Card
              key={post.id}
              createdAt={post.createdAt}
              title={post.title}
              rawBody={post.rawBody}
            />
          ))}
        </LatestPost>
      </Container>
    );
  }
}
