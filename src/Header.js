import React, { useState } from 'react';
import { device } from './mediaquery'
import styled, { createGlobalStyle } from 'styled-components/macro';
import { Stripe, HamburgerMenu, Navbar, Menuitem, ContactButton, Menuitems } from './Menu'
import { fonts } from './config'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home'




const Title = styled.h1`
  color: #ffffff;
  padding: 25px;
  font-family: ${fonts.cimek};
  font-size: 1.5em;
  font-size: 21px;
  letter-spacing: 2px;
  text-transform: uppercase;
  line-height: 1em;
  width: 300px;
  `

const GlobalStyle = createGlobalStyle`
  * {

    box-sizing: border-box;
    padding: 0;
    margin: 0;
    outline: none;
  }

`
const Maincontainer = styled.div`
display:  inline-block;


@media ${device.desktop} {
display: flex;
justify-content: space-between;
align-items: flex-start;
}
`

const Container = styled.div`
height: 700px;
background: url('https://ucarecdn.com/ebb062f7-cfc1-4f6a-a380-6b64cfc8838b/header.jpg') rgba(0,0,0,.3);
background-blend-mode: multiply;
background-size: cover;
background-position: center 70%;
display: flex;
flex-flow: column nowrap;
justify-content: space-between;
position: relative;

`


const TitleDiv = styled.div`
min-width: 250px;
max-width: 270px;
`



const Textcontainer = styled.div`
display: flex;
flex-flow: column nowrap;
justify-content: center;
height: 500px;
align-items: center;

`

const Subtitle = styled.div`
font-family: ${fonts.kacskaringos};
font-size: 18px;
font-style: italic;
color: white;
text-align: center;
padding: 20px;


@media ${device.desktop} {
  font-size: 24px;
  }
  `


const MottoContainer = styled.div`
max-width: 65%;
text-align: center;
`

const Motto = styled.div`
font-family: ${fonts.focim};
color: white;
font-style: normal;
font-size: 1rem;
letter-spacing: 4px;
text-transform: uppercase;



@media ${device.tablet} {
font-size: 2rem;
}
`

const TextboxButton = styled.button`
    border: 2px solid white;
    background: transparent;
    color: white;
    height: 42px;
    width: 101px;
    letter-spacing: 2px;
    text-transform: uppercase;
    line-height: 1em;
    padding: 0;
    margin: 0 auto;
    width: 190px;
    margin-top: 20px;


    &:hover{
      background: white;
      color: black;

    }

`


class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      isOpen: false
    }
  }

  render() {
    return (
      <div className="Header">
        <GlobalStyle />
        <Container onClick={() => { this.setState({ isOpen: false }) }}>
          <Maincontainer>
            <TitleDiv>
              <Title>Annie Kostolany Photography</Title>
            </TitleDiv>
            <Navbar isOpen={this.state.isOpen}>
              <HamburgerMenu isOpen={this.state.isOpen} onClick={(event) => {
                event.stopPropagation()
                this.setState({ isOpen: !this.state.isOpen })
              }}>
                <Stripe />
                <Stripe />
                <Stripe />
              </HamburgerMenu>

             
               


                    <Menuitems>
                        <Menuitem><Link to="/">Home</Link></Menuitem>
                        <Menuitem><Link to="/about">About me</Link></Menuitem>
                        <Menuitem><Link to="/portfolio">Portfolio</Link></Menuitem>
                        <Menuitem><Link to="/investment">Investment</Link></Menuitem>
                        <Menuitem><Link to="/preset-shop">Preset shop</Link></Menuitem>
                        <Menuitem><Link to="/blog">Blog </Link></Menuitem>
                        <Menuitem><Link to="/contact-form"><ContactButton>Contact</ContactButton></Link></Menuitem>
                    </Menuitems>

                   


            </Navbar>
          </Maincontainer>


          <Textcontainer>
            <Subtitle>
              <p>Photo sessions in the Netherlands & worldwide</p>
            </Subtitle>
            <MottoContainer>
              <Motto>
                <h1>BE YOUR OWN KIND OF BEAUTIFUL</h1>
              </Motto>
            </MottoContainer>
            <TextboxButton>
              See portfolio
          </TextboxButton>

          </Textcontainer>

        </Container>

      </div>
    );
  }
}

export default Header;
