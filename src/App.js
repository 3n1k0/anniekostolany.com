import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import styled, { createGlobalStyle } from 'styled-components/macro';

const Title = styled.h1`
  color: #ffffff;
  padding: 10px;
  font-family: 'Lato', sans-serif;
  font-size: 1.5em;
  font-size: 21px;
  letter-spacing: 2px;
  text-transform: uppercase;
  line-height: 1em;
  `

const GlobalStyle = createGlobalStyle`
  * {
    
    // font-family: 'Lato', sans-serif;
    font-family: 'IBM Plex Sans', sans-serif;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    outline: none;
  }

`
const Maincontainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`

const Header = styled.div`
height: 700px;
background: url('https://ucarecdn.com/ebb062f7-cfc1-4f6a-a380-6b64cfc8838b/header.jpg') rgba(0,0,0,.3);
background-blend-mode: multiply;
background-size: cover;
background-position: 100% 70%;
display: flex;
flex-flow: column nowrap;
justify-items: center;
position: relative;

`

const Navbar = styled.nav`
display: flex;
flex-flow: row nowrap;
align-items: center;
justify-items: flex-end;
padding-top: 20px;
padding-right: 40px;

`

const Menuitem = styled.div`
font-style: normal;
    font-size: 13px;
    letter-spacing: 2px;
    text-transform: uppercase;
    text-decoration: none;
    line-height: 1em;
    font-family: 'Lato', sans-serif;
    padding: 10px;
    color: white;

`

const TitleDiv = styled.div`
min-width: 250px;
max-width: 250px;
`

const Button = styled.button`
    border: 2px solid white;
    border-radius: 20px;
    background: transparent;
    color: white;
    height: 42px;
    width: 101px;
    letter-spacing: 2px;
    text-transform: uppercase;
    line-height: 1em;
    padding: 0;

&:hover{
  border: 2px solid white;
  border-radius: 20px;
  background: white;
  color: black;
}

`

const Textcontainer = styled.div`
display: flex;
flex-flow: column nowrap;
justify-content: space around;
height: 700px;
margin: 0 auto;
position: relative;
top: 25%;
text-align: center;
`

const Subtitle = styled.div`
font-family: 'Cormorant Garamond', serif;
font-size: 18px;
font-style: italic;
color: white;
`

const Motto = styled.div`
 font-family: 'Lato', sans-serif;
 color: white;

 font-style: normal;
font-size: 27px;
letter-spacing: 4px;
text-transform: uppercase;
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
    width: 25%;

    &:hover{
      background: white;
      color: black;
    }

`

const MottoContainer = styled.div`
min-width: 700px;
max-width: 700px;
`

function App() {

  return (
    <div className="App">
      <GlobalStyle />
      <Header>
        <Maincontainer>
          <TitleDiv>
            <Title>Annie Kostolany Photography</Title>
          </TitleDiv>
          <Navbar>
            <Menuitem>Home</Menuitem>
            <Menuitem>About me</Menuitem>
            <Menuitem>Portfolio</Menuitem>
            <Menuitem>Investment</Menuitem>
            <Menuitem>Preset shop </Menuitem>
            <Menuitem>Blog </Menuitem>
            <Menuitem><Button>Contact</Button></Menuitem>
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
      </Header>


      {/* <Test><img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a></Test> */}
    </div>
  );
}

export default App;
