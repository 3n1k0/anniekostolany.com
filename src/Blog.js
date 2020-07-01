import React, { useState } from 'react';
import Navbar from './Navbar';
import styled, { createGlobalStyle, css } from 'styled-components/macro';
import posts from './posts'
import { device } from './mediaquery'
import { fonts } from './config'

import { NavLink } from 'react-router-dom';


const Container = styled.div`
height: 100%;
width:100%;
display: flex;
flex-flow: column nowrap;
justify-content: center;
align-content: center;
position: relative;
padding-top: 150px;
    
    
@media ${device.desktop} {
display: flex;
flex-flow: row wrap;
justify-items: center;
align-content: center;
padding-top: 200px;

}



`
const PostContainer = styled.div`
display: flex;
flex-flow: column nowrap;
align-items: center;
justify-content: space-between;
height: 600px;
width: 100%;

@media ${device.tablet}{
width: 80%;
display: flex;
}

@media ${device.desktop} {
display: flex;
flex-flow: column nowrap;
align-items: center;
height: 600px;
width: 50%;
}

`

const Post = styled.div`
display: flex;
flex-flow: column nowrap;
align-items: flex-start;
justify-content: flex-start;
width: 100%;
height: 600px;

@media ${device.desktop} {
display: flex;
flex-flow: column nowrap;
height: 600px;
width: 500px;
}

`

const PostTitle = styled.h1`
font-family: ${fonts.cimek};
padding-bottom: 30px;
letter-spacing: 1px;
`

const StyledImg = styled.img`
    width: 100%;
    padding-bottom: 30px;

`

class Blog extends React.Component {


    render() {
        return (

            <div>
                <Navbar style={{ background: "black", marginBottom: "20px" }} />

                <Container> {posts.map((post) => {
                    return <PostContainer>
                        <Post>
                            <PostTitle>{post.title}</PostTitle>
                            <StyledImg src={post.leadimage}/>
                            <p>{post.excerpt}   <NavLink to={"/blog/posts/" + post.slug}>...read more</NavLink></p>


                        </Post>
                    </PostContainer>
                })}



                </Container>
            </div>
        )

    }

}
export default Blog 
