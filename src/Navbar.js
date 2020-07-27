import React from "react";
import { device } from "./mediaquery";
import styled, { createGlobalStyle, css } from "styled-components/macro";
import { fonts, colors } from "./config";
import { NavLink } from "react-router-dom";

export const HamburgerMenu = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    height: 30px;
    width: 40px;
    position: relative;
    top: 35px;
    right: 50px;
    position: absolute;
    z-index: 10;

 
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
        display: none;
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
  font-family: ${fonts.mindenmas};
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 15px;
  display: flex;
  position: absolute;
  right: 0px;
  top: 0px;

  z-index: 4;
  height: 700px;
  width: 300px;

  @media ${device.desktop} {
    display: flex;
    width: 100%;
    background: none;
    position: relative;
    height: 100%;
    justify-content: flex-end;
  }
`;

export const ContactButton = styled.button`
    border: none;
    border-radius: 20px;
    background: transparent;
    color: white;
    letter-spacing: 2px;
    text-transform: uppercase;
    line-height: 1em;
    padding: 0;
    display: inline-block;
    z-index: 100;
    cursor: pointer;

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
    z-index: 100;
    cursor: pointer;

    &:hover {
    border: 2px solid white;
    border-radius: 20px;
    background: white;
    color: ${colors.footerfekete};
  }
  }


`;

export const Menuitems = styled.ul`
  flex-flow: column nowrap;
  color: white;
  position: absolute;
  top: 0px;
  right: 0px;
  height: 100%;
  font-size: 13px;
  width: 300px;
  padding: 100px 20px;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  background: rgb(88, 86, 86);
  background: linear-gradient(
    176deg,
    rgba(9, 6, 10, 1) 30%,
    rgba(190, 190, 191, 0.0) 90%
  );

  @media ${device.desktop} {
    align-items: center;
    justify-content: flex-end;
    padding-top: 20px;
    padding-right: 40px;
    top: 60px;
    right: 0px;
    width: 100%;
    display: flex;
    background: none;
    flex-flow: row nowrap;
    height: 100%;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 15px;
    top: 30px;
  }
`;

export const Menuitem = styled.li`
  display: flex;
  padding: 8px 30px;
  font-family: ${fonts.cimek};
  font-weight: 500;
  cursor: pointer;

  @media ${device.desktop} {
    display: flex;
    font-style: normal;
    font-size: 14px;
    letter-spacing: 2px;
    text-transform: uppercase;
    text-decoration: none;
    line-height: 1em;
    padding: 10px;
  }
`;

export const PortfolioMenuitem = styled(Menuitem)`
  flex-flow: column;
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
    list-style: none;
    

 

  }

`;
const Maincontainer = styled.div`
  display: flex;
  height: 100px;
  width: 100%;
  background: ${colors.footerfekete};
  position: absolute;

  @media ${device.desktop} {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: flex-start;
    background: ${colors.footerfekete};
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
  position: relative;
  display: flex;
  flex-flow: column;

  @media ${device.desktop} {
    background-color: ${({ backgroundColor }) => backgroundColor};

    width: 220px;
    height: 270px;
    position: absolute;
    z-index: 5;
    top: 50px;
    padding: 24px 15px;
    flex-flow: column;
  }

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

  static defaultProps = {
    dropDowncolor: "rgb(8, 8, 8)",
    linkColors: "white",
  };

  onBodyClick = () => {
    this.setState({ isOpen: false });
    this.setState({ isDropDownOpen: false });
  };

  componentDidMount() {
    window.addEventListener("click", this.onBodyClick);
  }

  componentWillUnmount() {
    window.removeEventListener("click", this.onBodyClick);
  }

  render() {
    const options = ["/", "Gallery", "Contact"];
    const defaultOption = options[0];

    return (
      <div className="Navbar">
        <GlobalStyle />
        <Maincontainer style={this.props.style}>
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

            <Menuitems isOpen={this.state.isOpen}>
              <Menuitem>
                <StyledNavLink to="/">Home</StyledNavLink>
              </Menuitem>
              <Menuitem>
                <StyledNavLink to="/about">About me</StyledNavLink>
              </Menuitem>
              <ul>
                <PortfolioMenuitem
                  onMouseOver={() => {
                    this.setState({ isDropDownOpen: true });
                  }}
                  onClick={(event) => {
                    event.stopPropagation();
                    this.setState({
                      isDropDownOpen: !this.state.isDropDownOpen,
                    });
                  }}
                >
                  <Menuitem><b>+ Portfolio</b></Menuitem>
                  <DropDown
                    isOpen={this.state.isDropDownOpen}
                    onMouseOut={() => {
                      this.setState({ isDropDownOpen: false });
                    }}
                    backgroundColor={this.props.dropDowncolor}
                  >
                    <Menuitem>
                      <InnerStyledNavLink to="/couples">
                        Love shoots ♡
                      </InnerStyledNavLink>
                    </Menuitem>

                    <Menuitem>
                      <InnerStyledNavLink to="/family">
                        Family & celebration
                      </InnerStyledNavLink>
                    </Menuitem>

                    <Menuitem>
                      <InnerStyledNavLink to="/solo-travelers">
                        Solo travelers
                      </InnerStyledNavLink>
                    </Menuitem>

                    <Menuitem>
                      <InnerStyledNavLink to="/boudoir">
                        Boudoir
                      </InnerStyledNavLink>
                    </Menuitem>
                    <Menuitem>
                      <InnerStyledNavLink to="/wedding">
                        Wedding
                      </InnerStyledNavLink>
                    </Menuitem>
                    <Menuitem>
                      <InnerStyledNavLink to="/how-does-it-work">
                        How does it work?
                      </InnerStyledNavLink>
                    </Menuitem>
                  </DropDown>
                </PortfolioMenuitem>
              </ul>

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