import React from "react";
import Navbar from "../Navbar";
import styled from "styled-components/macro";
import posts from "./posts/allposts";
import { PostTitle } from "./Blog";
import { Helmet } from "react-helmet";
import { HeaderImage } from "../Pages/Home";
import { fonts } from "../config";
import { device } from "../mediaquery";
import { GoToTopButton } from '../Ui'

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
  width: 90%;
  height: 100%;
  padding-top: 50px;
  padding-bottom: 20px;
  font-family: ${fonts.mindenmas};
  line-height: 1.5;
  font-size: 17px;

  @media ${device.desktop} {
    padding: 100px 100px 50px 100px;
    width: 60%;
  }
`;

const Title = styled.div`
  position: absolute;
  color: white;
  font-family: ${fonts.focim};
  font-size: 2em;
  letter-spacing: 2px;
  font-weight: 600;
  max-width: 70%;
  text-align: center;
  text-transform: uppercase;

  @media ${device.desktop}{
    font-size: 3em;
  }

`;

const Header = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
`;

const Date = styled.div`
  font-size: 1.5em;
  top: 270px;
  font-family: ${fonts.kacskaringos};
  text-transform: none;
  position: absolute;
  color: white;

`;

const TextContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  align-content: center;
  justify-items: center;

  img {
    padding-top: 30px;
    width: 100%;
  }
`;

const StyledImg = styled.img`
  padding: 50px;
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
