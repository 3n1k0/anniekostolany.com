import { device } from './mediaquery'
import styled, { css } from 'styled-components/macro';
import { fonts } from './config'



const Maincontainer = styled.div`
display:  inline-block;


@media ${device.desktop} {
display: flex;
justify-content: space-between;
align-items: flex-start;
}
`


const TitleDiv = styled.div`
min-width: 250px;
max-width: 270px;
`

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


export const HamburgerMenu = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    height: 30px;
    width: 40px;
    position: relative;
    top: 25px;
    right: 50px;
    position: absolute;
 
    ${({ isOpen }) => isOpen ? css`
    



        div:nth-child(2) {
            opacity: 0
        }

        div:nth-child(1) {
            transform: rotate(45deg);
            position: absolute;
  
        }

        div:nth-child(3)  {
            transform: rotate(-45deg);
            position: absolute;


        }
    
    ` : ''}

    @media ${device.desktop} {

        width: 41px;
        height: 39px;
        align-items: center;
    }

  `

export const Stripe = styled.div`
    background: white;
    height: 3px;
    width: 100%;

    @media ${device.desktop} {
      display: none;
    }
`

export const Navbar = styled.nav`
display: flex;
position: fixed;
right: 0px;
top: 0px;
background: rgba(0, 0, 0, 0.3);
width: ${({ isOpen }) => isOpen ? '200' : '0'}px;
height: 100%;


@media ${device.desktop} {

display: flex;
width: 100%;
background: none;
position: relative;
}
`

export const ContactButton = styled.button`

display: none;

@media ${device.desktop}{

    border: 2px solid white;
    border-radius: 20px;
    background: transparent;
    color: white;
    height: 42px;
    width: 117px;
    letter-spacing: 2px;
    text-transform: uppercase;
    line-height: 1em;
    padding: 0;
    display: inline-block;
}

&:hover{
  border: 2px solid white;
  border-radius: 20px;
  background: white;
  color: black;
}

`

export const Menuitems = styled.div`
display: flex;
flex-flow: column nowrap;
top: 100px;
color: white;

@media ${device.desktop} {
display: flex;
flex-flow: row nowrap;
align-items: center;
justify-items: flex-end;
padding-top: 20px;
padding-right: 40px;
position: absolute;
    top: 0px;
    right: 0px;
}

`

export const Menuitem = styled.div`
    display: flex;
    padding: 15px 30px;
    font-weight: 600;



    @media ${device.desktop} {
    display: flex;
    font-style: normal;
    font-size: 13px;
    letter-spacing: 2px;
    text-transform: uppercase;
    text-decoration: none;
    line-height: 1em;
    font-family: ${fonts.cimek};
    padding: 10px;
    color: white;

}
    `


