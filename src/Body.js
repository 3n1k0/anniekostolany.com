import React, { useState } from 'react';
import { device } from './mediaquery'
import styled, { createGlobalStyle } from 'styled-components/macro';
import { fonts } from './config'

const TextBox = styled.div`
margin: 50px auto;
display: flex;
flex-flow: column nowrap;
width: 600px;
`

const TextTitle = styled.div`
margin: 0 auto;
font-family: ${fonts.cimek};
`


const Text = styled.div`
margin: 0 auto;
font-family: ${fonts.mindenmas};
`

class Body extends React.Component {

    render() {
        return (
            <div className="Body">

                <TextBox>
                    <TextTitle><p>Let’s create magic!</p></TextTitle>
                    <Text><p>Annie Kostolany is a portrait and lifestyle photographer, based in the Netherlands, and available worldwide.
                        Her signature style combines magazine portraiture with a soft and dreamy touch.</p></Text>
                </TextBox>
      );



            </div>

        );
    }
}

export default Body