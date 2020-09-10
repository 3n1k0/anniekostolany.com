import React from "react";
import Navbar from "../Navbar";
import styled from "styled-components/macro";
import posts from "./posts/allposts";
import { device } from "../mediaquery";
import { fonts, colors } from "../config";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Button } from "../Ui";

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: row wrap;

  padding-top: 150px;

  @media ${device.desktop} {
 
  }
`;



const Post = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-flow: column;
  max-width: 600px;
  padding: 50px 0px;

  @media ${device.desktop} {
  
  }


`;

export const PostTitle = styled.h1`
  font-family: ${fonts.mindenmas};
  font-size: 30px;
  text-transform: uppercase;
  text-align: left;
  padding-bottom: 30px;
  letter-spacing: 1px;
  color: ${colors.cimek};
  max-width: 600px;
`;

export const StyledImg = styled.img`
  width: 100%;
  height: 400px;
  padding-bottom: 30px;
  object-fit: cover;

  &:hover {
    -webkit-filter: brightness(0.8);
    filter: brightness(0.8);

  }

  @media ${device.desktop} {
    width: 600px;
    height: 400px;
  }
`;

const Readmore = styled(Button)`
  border: none;
  background: none;
  font-size: 15px;
  color: black;

  &:hover {
    background: none;
    color: black;

  
  }
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

        <Navbar style={{ background: "rgb(9, 6, 10)", marginBottom: "20px" }} />

        <Container>
          {" "}
          {posts.map((post) => {
            return (
              <Post>
                <NavLink to={"/blog/posts/" + post.slug}>
                  <PostTitle>{post.title}</PostTitle>
                  <StyledImg src={post.leadimage} />
                </NavLink>
                <p>{post.excerpt} </p>
                <Readmore to={"/blog/posts/" + post.slug}>
                  ...Read more
                </Readmore>
              </Post>
            );
          })}
        </Container>
      </div>
    );
  }
}
export default Blog;
