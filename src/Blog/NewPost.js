import React, { Component } from "react";
import styled from "styled-components/macro";
import Navbar from "../Navbar";

const MainContainer = styled.div`
  height: 80%;
  display: grid;
  justify-content: center;
  padding-top: 250px;
  padding-bottom: 50px;

  button {
    background-color: #4caf50;
    border: none;
    color: white;
    padding: 16px 32px;
    text-decoration: none;
    margin: 4px 2px;
    cursor: pointer;
  }
`;

const Excerpt = styled.textarea`
  width: 600px;
  height: 100px;
  border: 3px solid #cccccc;
  padding: 5px;
  background-repeat: no-repeat;
`;

const Content = styled.textarea`
  width: 600px;
  height: 600px;
  border: 3px solid #cccccc;
  padding: 5px;
  background-repeat: no-repeat;
`;

const Date = styled.input`
  width: 200px;
`;

const Title = styled.input`
  width: 200px;
`;

export default class AddPost extends Component {
  constructor(props) {
    super(props);
    this.dateRef = React.createRef();
    this.titleRef = React.createRef();
    this.excerptRef = React.createRef();
    this.contentRef = React.createRef();
    this.tagsRef = React.createRef();
    this.leadimageRef = React.createRef();
    this.passwordRef = React.createRef();
  }

  submit = () => {
    const post = {
      leadimage: this.leadimageRef.current.value,
      tags: this.tagsRef.current.value,
      content: this.contentRef.current.value,
      excerpt: this.excerptRef.current.value,
      title: this.titleRef.current.value,
      date: this.dateRef.current.value,
    };

    fetch(`http://localhost:3001/add-post/${this.passwordRef.current.value}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(post)
    });
  }

  render() {

    return (
      <>
        <Navbar style={{ background: "rgb(9, 6, 10)" }} />
        <MainContainer>
          <h1>Create a new post</h1>
          <label for="title">Title:</label>
          <Title ref={this.titleRef} name="title" />
          <label for="created">Date:</label>
          <Date
            type="date"
            id="created"
            name="created"
            value="2021-01-01"
            ref={this.dateRef}
          ></Date>

          <h2>Excerpt:</h2>
          <Excerpt ref={this.excerptRef} />
          <h2>Lead image URL:</h2>
          <input
            type="url"
            ref={this.leadimageRef}
            placeholder="https://example.com"
            pattern="https://.*"
            size="30"
            required
          />
          <h2>Content:</h2>
          <Content ref={this.contentRef} />
          <h2>Tags</h2>
          <input ref={this.tagsRef} />
          <input ref={this.passwordRef} />
          <button type="button" value="Submit" onClick={this.submit}>
            Submit
          </button>
        </MainContainer>
      </>
    );
  }
}
