import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components/macro";
import posts from "./posts";
import { PostTitle } from "./Blog";
import { Helmet } from "react-helmet";
import { HeaderImage } from "./Home";
import { fonts } from "./config";

const Container = styled.div`
  height: 700px;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Post = styled.div`
  width: 60%;
  height: 100%;
  padding: 100px;
  position: relative;
  display: block;
`;

const Title = styled.div`
  margin: 0 auto;
  position: absolute;
  color: white;
  text-transform: uppercase;
  font-family: ${fonts.focim};
  font-size: 3em;
  letter-spacing: 2px;
  font-weight: 600;
`;

const Date = styled(Title)`
  font-size: 1.5em;
  top: 270px;
  font-family: ${fonts.kacskaringos};
  text-transform: none;
`;

const PostContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const TextContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const StyledImg = styled.img`
  padding: 50px 0px;
  width: 100%;
`;
export const GoToTopButton = styled.button`
  outline: none;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  margin: 0 auto;
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
          <title>{post.title}</title>
          <meta name="description" content={post.excerpt} />
        </Helmet>
        <Navbar style={{ background: "black", marginBottom: "20px" }} />

        <Container>
          <HeaderImage src={post.leadimage} loading="lazy"></HeaderImage>

          <Date>October 25, 2018</Date>
          <Title>{post.title}</Title>

          <Post>
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
        </Container>

      </div>
    );
  }
}
export default FullPost;
