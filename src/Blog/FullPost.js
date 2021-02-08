import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components/macro";
import { Helmet } from "react-helmet";
import { fonts } from "../config/config";
import { device } from "../config/mediaquery";
import { FixedUpArrow } from "../components/FixedUpArrow";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-top: 100px;

  h1 {
    color: #d26295;
    font-family: "'Raleway', sans-serif";
  }

  img {
    width: 100%;
    height: 100%;
  }
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
    padding: 50px 100px 50px 100px;
    width: 60%;
  }
`;

const Title = styled.div`
  position: absolute;
  color: white;
  font-family: ${fonts.mindenmas};
  font-size: 2em;
  letter-spacing: 2px;
  font-weight: 600;
  max-width: 70%;
  text-align: center;
  text-transform: uppercase;

  @media ${device.desktop} {
    font-size: 3em;
  }
`;


const Gallery = styled.div`
  display: grid;
  grid-gap: 20px;
  justify-content: center;
  height: 100%;
  width: 80%;
  padding-bottom: 50px;

  img {
    height: 600px;
    width: 600px;
  }
`;

const Date = styled.div`
color: lightgrey;
`

class FullPost extends React.Component {
  state = {
    post: { images: [] },
  };

  async componentWillMount() {
    const slug = this.props.match.params.slug;
    const response = await fetch(
      "https://anniekostolany-blog.herokuapp.com/get-post/" + slug
    );
    const posts = await response.json();
    this.setState({ post: posts[0] });
  }

  render() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const { post } = this.state;
    return (
      <div>
        <Navbar style={{ background: "rgb(9, 6, 10)", marginBottom: "20px" }} />

        <Container>
          <Post key={post._id}>
            <h1>{post.title}</h1>
            <Date>{post.date}</Date>
            <p>{post.excerpt} </p>
            <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
          </Post>
          <Gallery>
            {post.images.map((image) => {
              return <img src={image} />;
            })}
          </Gallery>
          <FixedUpArrow/>
        </Container>
      </div>
    );
  }
}
export default FullPost;
