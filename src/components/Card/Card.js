import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 1020px;
  height: 500px;
  padding: 20px 40px;
  margin: 0 auto;
  margin-top: ${props => (props.featured ? "-140px;" : "0px")};
  background-color: #ffffff;
`;

const CardHeader = styled.div`
  width: 100%;
  height: 60px;
`;

const CardBody = styled.div`
  height: 100%;
  display: flex;
`;

const CardImg = styled.div`
  flex: 1;
  background-image: ${props => `url(${props.image})`};
  background-repeat: no-repeat;
  background-size: cover;
`;

const CardPost = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0px 20px 30px 40px;
`;

const PostDate = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  span {
    font-size: 12px;
    color: #bfbfbf;
  }
`;

const PostHeader = styled.div`
  color: ${props => (props.featured ? "#aebfc6" : "#000000")};
  flex: 3;
  font-style: italic;
  font-weight: 700;
  font-size: 30px;
  &:hover {
    color: ${props => (props.featured ? "#000000" : "#aebfc6")};
  }
`;

const PostSummary = styled.div`
  flex: 4;
  font-weight: 200;
`;

export default function Card(props) {
  return (
    <Container featured={props.featured}>
      {props.featured ? <CardHeader>Featured</CardHeader> : null}
      <CardBody>
        <CardImg
          image={
            props.image
              ? props.image
              : "https://images.unsplash.com/photo-1565300667498-2843c56b4603?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1271&q=80"
          }
        />
        <CardPost>
          <PostDate>
            <span>{props.createdAt}</span>
          </PostDate>
          <PostHeader featured={props.featured}>{props.title}</PostHeader>
          <PostSummary>{props.rawBody}</PostSummary>
        </CardPost>
      </CardBody>
    </Container>
  );
}
