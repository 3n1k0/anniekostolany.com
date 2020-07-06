import React, { useState } from "react";
import { device } from "./mediaquery";
import styled, { createGlobalStyle, css } from "styled-components/macro";
import { fonts } from "./config";
import { NavLink } from "react-router-dom";

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
 
    ${({ isOpen }) =>
      isOpen
        ? css`
            div:nth-child(2) {
              opacity: 0;
            }

            div:nth-child(1) {
              transform: rotate(45deg);
              position: absolute;
            }

            div:nth-child(3) {
              transform: rotate(-45deg);
              position: absolute;
            }
          `
        : ""}

    @media ${device.desktop} {

        width: 41px;
        height: 39px;
        align-items: center;
    }

  `;

export const Stripe = styled.div`
  background: white;
  height: 3px;
  width: 100%;

  @media ${device.desktop} {
    display: none;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  position: absolute;
  right: 0px;
  top: 0px;
  background: rgba(0, 0, 0, 0.4);
  width: ${({ isOpen }) => (isOpen ? "300" : "0")}px;
  height: 100%;
  z-index: 4;

  @media ${device.desktop} {
    display: flex;
    width: 100%;
    background: none;
    position: relative;
  }
`;

export const ContactButton = styled.button`
  display: none;

  @media ${device.desktop} {
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

  &:hover {
    border: 2px solid white;
    border-radius: 20px;
    background: white;
    color: black;
  }
`;

export const Menuitems = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  color: white;

  @media ${device.desktop} {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-items: flex-end;
    padding-top: 20px;
    padding-right: 40px;
    top: 0px;
    right: 0px;
    position: absolute;
  }
`;

export const Menuitem = styled.li`
  display: flex;
  padding: 15px 30px;
  font-weight: 600;

  p {
    cursor: pointer;
  }

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
  }
`;

const Title = styled.h1`
  color: #ffffff;
  padding: 30px;
  font-family: ${fonts.cimek};
  font-size: 1.5em;
  font-size: 21px;
  letter-spacing: 2px;
  text-transform: uppercase;
  line-height: 1em;
  width: 300px;
  font-weight: 400;
`;

const GlobalStyle = createGlobalStyle`
  * {

    box-sizing: border-box;
    padding: 0;
    margin: 0;
    outline: none;
    text-decoration: none;

  }

`;
const Maincontainer = styled.div`
  display: flex;
  height: 100px;
  width: 100%;
  background: black;
  position: absolute;

  @media ${device.desktop} {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: flex-start;
  }
`;
const TitleDiv = styled.div`
  min-width: 250px;
  max-width: 270px;
  z-index: 3;
`;

const StyledNavLink = styled(NavLink)`
  color: white;
`;

const InnerStyledNavLink = styled(StyledNavLink)`
  & :hover {
    transform: rotate(1deg);
  }
`;

const DropDown = styled.div`
  background: rgba(0, 0, 0, 0.7);
  width: 220px;
  height: 270px;
  position: absolute;
  z-index: -2;
  top: 90px;
  padding: 35px 15px;
  display: flex;
  flex-flow: column;


  ${({ isOpen }) =>
    isOpen
      ? css`
          display: flex;
        `
      : `display: none`}
`;

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      isDropDownOpen: false,
    };
  }

  onBodyClick = () => {
    this.setState({ isOpen: false });
    this.setState({ isDropDownOpen: false });
  }

  componentDidMount() {
    window.addEventListener('click', this.onBodyClick);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.onBodyClick);
  }

  render() {
    const options = ["/", "Gallery", "Contact"];
    const defaultOption = options[0];

    return (
      <div className="Navbar">
        <GlobalStyle />
        <Maincontainer
          style={this.props.style}
        >
          <TitleDiv>
            <Title>Annie Kostolany Photography</Title>
          </TitleDiv>

          <Navigation isOpen={this.state.isOpen}>
            <HamburgerMenu
              isOpen={this.state.isOpen}
              onClick={(event) => {
                event.stopPropagation();
                this.setState({ isOpen: !this.state.isOpen });
              }}
            >
              <Stripe />
              <Stripe />
              <Stripe />
            </HamburgerMenu>

            <Menuitems>
              <Menuitem>
                <StyledNavLink to="/">Home</StyledNavLink>
              </Menuitem>
              <Menuitem>
                <StyledNavLink to="/about">About me</StyledNavLink>
              </Menuitem>

              <Menuitem
                onMouseOver={() => {
                  this.setState({ isDropDownOpen: true });
                }}

                onClick={(event) => {
                  event.stopPropagation()
                  this.setState({ isDropDownOpen: !this.state.isDropDownOpen });
                }}
              >
                <p>Portfolio</p>

                <DropDown
                  isOpen={this.state.isDropDownOpen}
                  onMouseOut={() => {
                    this.setState({ isDropDownOpen: false });
                  }}
                >
                  <Menuitem>
                    <InnerStyledNavLink to="/solo-travelers">
                     Solo travelers
                    </InnerStyledNavLink>
                  </Menuitem>
                  <Menuitem>
                    <InnerStyledNavLink to="/couples">
                      Love shoots 
                    </InnerStyledNavLink>
                  </Menuitem>
                  <Menuitem>
                    <InnerStyledNavLink to="/families">
                      Family & celebration
                    </InnerStyledNavLink>
                  </Menuitem>
                  <Menuitem>
                    <InnerStyledNavLink to="/wedding">
                      Wedding
                    </InnerStyledNavLink>
                  </Menuitem>
                  <Menuitem>
                    <InnerStyledNavLink to="/boudoir">
                      Boudoir
                    </InnerStyledNavLink>
                  </Menuitem>
                  <Menuitem>
                    <InnerStyledNavLink to="/how-does-it-work">
                      How does it work?
                    </InnerStyledNavLink>
                  </Menuitem>
                </DropDown>
              </Menuitem>

              <Menuitem>
                <StyledNavLink to="/investment">Investment</StyledNavLink>
              </Menuitem>
              <Menuitem>
                <StyledNavLink to="/blog">Blog </StyledNavLink>
              </Menuitem>
              <Menuitem>
                <StyledNavLink to="/contact-form">
                  <ContactButton>Contact</ContactButton>
                </StyledNavLink>
              </Menuitem>
            </Menuitems>
          </Navigation>
        </Maincontainer>
      </div>
    );
  }
}

export default Navbar;
