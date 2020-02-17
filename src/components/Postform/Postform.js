import React, { Component } from "react";
import styled from "styled-components";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { postCreate } from "../../axios/axios";

const Container = styled.div`
  position: fixed;
  width: 500px;
  height: 500px;
  background-color: #cfcfcf;
  bottom: 40px;
  right: 40px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  .ck-editor {
    display: flex;
    flex-direction: column;
    flex: 12;
    .ck-editor__main {
      flex: 1;
      div {
        height: 100%;
      }
    }
  }
`;

const FormHeader = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
`;

const Input = styled.input``;

const SubmitButton = styled.button``;

export default class Postform extends Component {
  state = {
    title: "",
    body: "",
    rawBody: ""
  };

  _handleTitle = title => {
    this.setState({
      title
    });
  };

  _handleInput = (body, rawBody) => {
    this.setState({
      body,
      rawBody
    });
  };

  _handleSubmit = async e => {
    e.preventDefault();
    const { title, body } = this.state;
    let { rawBody } = this.state;
    rawBody = rawBody.replace(/\n/g, " ");
    if (title === "" || body === "") {
      alert("값을 입력해주세요.");
    } else {
      await postCreate(title, body, rawBody);
      this.setState({
        title: "",
        body: "",
        rawBody: ""
      });
    }
  };
  render() {
    return (
      <Container>
        <Form onSubmit={this._handleSubmit}>
          <FormHeader>
            <Input
              onChange={e => this._handleTitle(e.target.value)}
              value={this.state.title}
            />
            <SubmitButton type="submit">제출하기</SubmitButton>
          </FormHeader>
          <CKEditor
            data={this.state.body}
            editor={ClassicEditor}
            config={{
              simpleUpload: {
                uploadUrl: "http://localhost:4000/post/upload"
              }
            }}
            onInit={editor => {}}
            onChange={(event, editor) => {
              const body = editor.getData();
              const rawBody = editor.ui.element.innerText.substring(11);
              this._handleInput(body, rawBody);
            }}
          />
        </Form>
      </Container>
    );
  }
}
