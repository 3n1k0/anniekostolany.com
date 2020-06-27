import React, { useState } from 'react';
import { device } from './mediaquery'
import styled, { createGlobalStyle } from 'styled-components/macro';
import { fonts } from './config';
import { ImageContainer, Image } from './Home'


class About extends React.Component {


    render() {
        return (
            <div className="About">

                <ImageContainer>
                    <Image src='https://ucarecdn.com/3c6be24b-afaf-41a0-afd5-b062ea61693d/anniekostolanyaboutmepage1.jpg'></Image>
                </ImageContainer>
            </div>


        )

    }
}


export default About
