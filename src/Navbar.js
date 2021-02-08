import React from "react";
import { device } from "./mediaquery";
import styled, { createGlobalStyle, css } from "styled-components/macro";
import { fonts, colors } from "./config";
import { NavLink } from "react-router-dom";

export const HamburgerMenu = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  height: 25px;
  width: 30px;
  position: relative;
  top: 35px;
  right: 20px;
  position: absolute;
  z-index: 10;

  @media ${device.tablet} {
    width: 40px;
  }

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
  height: 3px;
  top: 26px;

  @media ${device.desktop} {
    display: none;
  }
`;

export const Navigation = styled.nav`
  text-transform: lowercase;
  letter-spacing: 2px;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  position: absolute;
  right: 0px;
  top: 0px;
  z-index: 4;
  height: 700px;
  width: 300px;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;

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
  text-transform: lowercase;
  line-height: 1em;
  padding: 20px;
  display: inline-block;
  z-index: 100;
  cursor: pointer;
  font-size: 16px;

  @media ${device.desktop} {
    border: 2px solid white;
    background: whitesmoke;
    color: black;
    height: 42px;
    width: 117px;
    padding: 10px;
  }

  &:hover {
    border: 2px solid white;
    border-radius: 20px;
    background: white;
    color: ${colors.footerfekete};
  }
`;

export const Menuitems = styled.div`
  flex-flow: column nowrap;
  color: white;
  position: absolute;
  top: 0px;
  right: 0px;
  height: 200%;
  width: 280px;
  padding: 100px 40px;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  background: linear-gradient(
    170deg,
    rgba(9, 6, 10, 1) 40%,
    rgba(190, 190, 191, 0) 90%
  );

  @media ${device.desktop} {
    align-items: center;
    justify-content: flex-end;
    padding-top: 20px;
    padding-right: 10px;
    top: 60px;
    right: 0px;
    width: 100%;
    display: flex;
    background: none;
    flex-flow: row nowrap;
    height: 100%;
    text-transform: lowercase;
    letter-spacing: 2px;
    top: 30px;
  }
`;

export const Menuitem = styled.div`
  display: flex;
  padding: 8px 30px;
  cursor: pointer;
  letter-spacing: 2px;
  align-items: center;

  @media ${device.desktop} {
    display: flex;
    font-style: normal;
    letter-spacing: 2px;
    text-transform: lowercase;
    text-decoration: none;
    line-height: 1em;
    padding: 10px;
  }
`;

export const PortfolioMenuitem = styled.div`
  flex-flow: column;
  display: flex;
  padding: 8px 0px;
  cursor: pointer;
  letter-spacing: 2px;
  align-items: center;
`;

const Title = styled.h1`
  color: #ffffff;
  padding: 30px 40px;
  font-size: 12px;
  letter-spacing: 2px;
  text-transform: lowercase;
  line-height: 1em;
  width: 300px;
  font-weight: 400;

  @media ${device.desktop} {
    font-size: 22px;
  }
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
  display: flex;
  align-items: center;
  justify-content: space-around;
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

    width: 200px;
    height: 300px;
    position: absolute;
    z-index: 5;
    top: 40px;
    padding: 24px 15px;
    flex-flow: column;
    border-radius: 10px;
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
    return (
      <div className="Navbar">
        <GlobalStyle />
        <Maincontainer style={this.props.style}>
          <TitleDiv>
            <NavLink to="/">
              <Title>Annie Kostolany Photography</Title>
            </NavLink>
          </TitleDiv>

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

          <Navigation isOpen={this.state.isOpen}>
            <Menuitems isOpen={this.state.isOpen}>
              <Menuitem>
                <StyledNavLink to="/">Home</StyledNavLink>
              </Menuitem>
              <Menuitem>
                <StyledNavLink to="/about">About me</StyledNavLink>
              </Menuitem>

              <PortfolioMenuitem
                onMouseOver={() => {
                  this.setState({ isDropDownOpen: true });
                }}
                onMouseLeave={() => {
                  this.setState({ isDropDownOpen: false });
                }}
                onClick={(event) => {
                  event.stopPropagation();
                  this.setState({
                    isDropDownOpen: !this.state.isDropDownOpen,
                  });
                }}
              >
                <Menuitem>
                  Portfolio
                  <i
                    style={{
                      color: "white",
                      fontSize: "20px",
                      padding: "5px 3px 3px 3px",
                    }}
                    className="fas fa-angle-down"
                  ></i>
                </Menuitem>
                <DropDown
                  isOpen={this.state.isDropDownOpen}
                  onMouseLeave={() => {
                    this.setState({ isDropDownOpen: false });
                  }}
                  backgroundColor={this.props.dropDowncolor}
                >
                  <Menuitem>
                    <InnerStyledNavLink to="/couples">
                      Love shoots
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
                      How does it work?{" "}
                      <i class="fa fa-info-circle" aria-hidden="true"></i>
                    </InnerStyledNavLink>
                  </Menuitem>
                </DropDown>
              </PortfolioMenuitem>

              <Menuitem>
                <StyledNavLink to="/investment">Investment</StyledNavLink>
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
