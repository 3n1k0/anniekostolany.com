import { device } from './mediaquery'
import styled from 'styled-components/macro';

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


export const Menuitem = styled.div`
    display: none;
    padding: 20px;



    @media ${device.desktop} {
    display: flex;
    font-style: normal;
    font-size: 13px;
    letter-spacing: 2px;
    text-transform: uppercase;
    text-decoration: none;
    line-height: 1em;
    font-family: 'Lato', sans-serif;
    padding: 10px;
    color: white;
    }

`
export const Navbar = styled.nav`

display: flex;
flex-flow: column nowrap;

@media ${device.desktop} {

display: flex;
flex-flow: row nowrap;
align-items: center;
justify-items: flex-end;
padding-top: 20px;
padding-right: 40px;
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
}

&:hover{
  border: 2px solid white;
  border-radius: 20px;
  background: white;
  color: black;
}

`
