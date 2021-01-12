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

const EmptyArea = styled.textarea`
  width: 300px;
  height: 40px;
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


export default class AddPost extends Component {
  render() {
    return (
      <>
        <Navbar style={{ background: "rgb(9, 6, 10)" }} />
        <MainContainer>
          <h1>Create a new post</h1>
          <label for="created">Date:</label>
          <Date
            type="date"
            id="created"
            name="created"
            value="2021-01-01"
          ></Date>

          <h2>Excerpt:</h2>
          <Excerpt />
          <h2>Lead image URL:</h2>
          <EmptyArea />
          <h2>Content:</h2>
          <Content />
          <h2>Tags</h2>
          <EmptyArea />

          <button type="submit" value="Submit">
            Submit
          </button>
        </MainContainer>
      </>
    );
  }
}
