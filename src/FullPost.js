import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components/macro";
import posts from "./posts";
import { PostTitle } from "./Blog";
import { Helmet } from "react-helmet";
import { HeaderImage } from "./Home";
import { fonts } from "./config";
import { Icon } from "./Footer";

const ShareContainer = styled.div`
  width: 30%;
  border-top: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;
  margin: 50px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  padding: 5px;
`;

const Container = styled.div`
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
  position: absolute;
  color: white;
  /* text-transform: uppercase; */
  font-family: ${fonts.focim};
  font-size: 3em;
  letter-spacing: 2px;
  font-weight: 600;
  max-width: 70%;
  text-align: center;
`;

const Header = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
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
  margin: 50px;
`;

export const GoToTopButton = styled.button`
  outline: none;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  margin: 0 auto;
  padding: 20px;
  background: none;
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
        <Navbar style={{ background: "rgb(9, 6, 10)", marginBottom: "20px" }} />

        <Container>
          <Header>
            <HeaderImage src={post.leadimage} loading="lazy"></HeaderImage>
            <Title>{post.title}</Title>

            <Date>{post.date}</Date>
          </Header>

          <Post>
            <TextContainer
              dangerouslySetInnerHTML={{ __html: post.content }}
            ></TextContainer>

            {post.postimage &&
              post.postimage.map((image) => {
                return <StyledImg src={image} />;
              })}
          </Post>

          <ShareContainer>
            <div
              class="fb-share-button"
              data-href="https://developers.facebook.com/docs/plugins/"
              data-layout="button"
              data-size="large"
            >
              <a
                target="_blank"
                href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse"
                class="fb-xfbml-parse-ignore"
              >
                Share
              </a>
            </div>

            <Icon>
              <a href="mailto:mail@anniekostolany.com" label="Send an email">
                <i style={{ color: "black" }} class="far fa-envelope"></i>
              </a>
            </Icon>
            <Icon>
              <a href="mailto:mail@anniekostolany.com" label="Send an email">
                <i style={{ color: "black" }} class="far fa-envelope"></i>
              </a>
            </Icon>
          </ShareContainer>

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
