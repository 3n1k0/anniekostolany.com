import React, { useState } from 'react';
import Navbar from './Navbar';
import styled, { createGlobalStyle, css } from 'styled-components/macro';


const Container = styled.div`
height: 1000vh;
width: 100%;
`

class Blog extends React.Component {


    render() {
        return (
            
            <div>
                 <Navbar style={{ background: "black"}} />

                 <Container>
                <h1>Hello Preset shop</h1>
                </Container>
            </div>
        )

    }
}
export default Blog 
