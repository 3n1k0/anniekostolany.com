import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components/macro';

const Container = styled.div`
height: 350px;
background-color: #1f1f1f;
width: 100%;
`

const Icontainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
`

const Icon = styled.div`
    font-size: 2em;
    padding: 25px;
    outline: none;

`

class Footer extends React.Component {


    render() {
        return <Container>
            <Icontainer>
                <Icon><a target="_blank" href="https://instagram.com/anniekostolany"><i style={{color: "papayawhip"}} class="fab fa-instagram"></i></a></Icon>
                <Icon><a target="_blank" href="https://facebook.com/anniekostolany"><i style={{color: "papayawhip"}} class="fab fa-facebook-f"></i></a></Icon>
                <Icon><a href="mailto:mail@anniekostolany.com"><i style={{color: "papayawhip"}} class="far fa-envelope"></i></a></Icon>
            </Icontainer>

        </Container>

    }
}
export default Footer 
