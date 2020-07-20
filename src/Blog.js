import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components/macro";
import posts from "./posts";
import { device } from "./mediaquery";
import { fonts } from "./config";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  padding-top: 150px;

  @media ${device.desktop} {
    display: flex;
    flex-flow: row wrap;
    justify-items: center;
    align-content: center;
    padding: 200px 100px;
  }
`;
const PostContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media ${device.desktop} {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    width: 40%;
    padding-bottom: 50px;
  }
`;

const Post = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: flex-start;

  @media ${device.desktop} {
    display: flex;
    flex-flow: column nowrap;
  }
`;

export const PostTitle = styled.h1`
  font-family: ${fonts.cimek};
  padding-bottom: 30px;
  letter-spacing: 1px;
`;

export const StyledImg = styled.img`
  width: 100%;
  padding-bottom: 30px;
`;

class Blog extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Blog</title>
          <meta
            name="description"
            content="A blog about professional photography. Stories, inspiration and photo galleries."
          />
        </Helmet>

        <Navbar style={{ background: "black", marginBottom: "20px" }} />

        <Container>
          {" "}
          {posts.map((post) => {
            return (
              <PostContainer>
                <Post>
                  <PostTitle>{post.title}</PostTitle>
                  <StyledImg src={post.leadimage} />
                  <p>
                    {post.excerpt}{" "}
                    <NavLink to={"/blog/posts/" + post.slug}>
                      ...read more
                    </NavLink>
                  </p>
                </Post>
              </PostContainer>
            );
          })}
        </Container>
      </div>
    );
  }
}
export default Blog;
