import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Button } from "../config/Ui";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 400px));
  padding: 20px 80px;
  grid-gap: 1rem;
  align-items: center;
  justify-content: center;
  padding-top: 150px;
`;

const Post = styled.div`
  text-decoration: none;
  border-radius: 20px;
  background: transparent;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.08), 0 0 6px rgba(0, 0, 0, 0.05);
  transition: 0.3s transform cubic-bezier(0.155, 1.105, 0.295, 1.12),
    0.3s box-shadow,
    0.3s -webkit-transform cubic-bezier(0.155, 1.105, 0.295, 1.12);
  cursor: pointer;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
  margin: 30px;
  min-height: 600px;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06);
    text-decoration: none;
  }

  img {
    width: 100%;
    height: 100%;
    min-height: 300px;
    max-height: 180px;
    object-fit: cover;
    object-position: 50% 20%;
  }

  p {
    min-height: 100px;
  }
`;

export const PostTitle = styled.h1`
  font-size: 29px;
  text-align: center;
  padding-bottom: 30px;
  letter-spacing: 1px;
  color: #d26295;
  max-width: 600px;

  & a:visited {
    color: #d26295;
    font-family: "'Raleway', sans-serif";
  }
`;

const Readmore = styled(Button)`
  background: #d26295;
  margin: 0 auto;
  cursor: pointer;
  border: none;
  padding: 12px;
  font-weight: 600;
  color: #ffffff;
  border-radius: 10px;
  border: none;
  font-size: 17px;
  letter-spacing: -1px;
  margin-top: 20px;

  a {
    color: #ffffff;
    text-decoration: none;
  }
`;

class Blog extends React.Component {
  state = {
    posts: [],
  };

  async componentWillMount() {
    const response = await fetch(
      "https://anniekostolany-blog.herokuapp.com/get-posts"
    );
    const posts = await response.json();
    this.setState({ posts });
  }

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
          {this.state.posts.map((post) => {
            return (
              <Post key={post._id}>
                <div dangerouslySetInnerHTML={{ __html: post.leadimage }}></div>
                <NavLink to={"/blog/posts/" + post.slug}>
                  <PostTitle>{post.title}</PostTitle>
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
