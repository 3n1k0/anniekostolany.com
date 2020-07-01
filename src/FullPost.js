import React, { useState } from 'react';
import Navbar from './Navbar';
import styled, { createGlobalStyle, css } from 'styled-components/macro';
import posts from './posts'



const Container = styled.div`
height: 100vh;
width: 100%;
display: flex;
`

const Post = styled.div`
width: 60%;
height: 400px;


`

const PostContainer = styled.div`
margin-top: 150px;
display: flex;
flex-flow: column nowrap;
align-items: center;

`

class FullPost extends React.Component {


    render() {

        const slug = this.props.match.params.slug

        const index = posts.findIndex((post) => {
            return post.slug === slug
        })

        const post = posts[index];

        return (

            <div>
                <Navbar style={{ background: "black", marginBottom: "20px" }} />

                <Container> 
                     <PostContainer>

                        <Post>
                            <h1>{post.title}</h1>
                            <p>{post.content} </p>
                        </Post>
                    </PostContainer>
            



                </Container>
            </div>
        )

    }

}
export default FullPost 
