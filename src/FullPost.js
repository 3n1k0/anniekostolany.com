import React, { useState } from "react";
import Navbar from "./Navbar";
import styled, { createGlobalStyle, css } from "styled-components/macro";
import posts from "./posts";
import { PostTitle } from "./Blog";
import { Helmet } from "react-helmet";

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  position: relative;
`;

const Post = styled.div`
  width: 60%;
  padding-top: 60px;
`;

const PostContainer = styled.div`
  margin-top: 150px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

const TextContainer = styled.div`
  width: 100%;
`;

const StyledImg = styled.img`
  padding: 50px 0px;
  width: 100%;
`;
const GoToTopButton = styled.button`
  outline: none;
`;

class FullPost extends React.Component {
  render() {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const slug = this.props.match.params.slug;

    const index = posts.findIndex((post) => {
      return post.slug === slug;
    });

    const post = posts[index];

    return (
      <div>
        <Helmet>
          <title>{post.title}
          </title>
          <meta
            name="description"
            content={post.excerpt}
          />
        </Helmet>
        <Navbar style={{ background: "black", marginBottom: "20px" }} />

        <Container>
          <PostContainer>
            <Post>
              <PostTitle style={{ textAlign: "center" }}>
                {post.title}
              </PostTitle>
              <TextContainer>
                <p>{post.content} </p>
              </TextContainer>

              {post.postimage &&
                post.postimage.map((image) => {
                  return <StyledImg src={image} />;
                })}
            </Post>

            <GoToTopButton
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Go to top{" "}
            </GoToTopButton>
          </PostContainer>
        </Container>
      </div>
    );
  }
}
export default FullPost;
