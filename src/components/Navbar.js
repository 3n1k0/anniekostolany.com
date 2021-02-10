import React from "react";
import { device } from "../config/mediaquery";
import styled, {css} from "styled-components/macro";
import { NavLink } from "react-router-dom";
import GlobalStyle from "../config/globalStyles";

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
            background-color: rgb(197, 176, 175);
          }

          div:nth-child(3) {
            transform: rotate(-45deg);
            position: absolute;
            background-color: rgb(197, 176, 175);
          }
        `
      : ""}

  @media ${device.desktop} {
    display: none;
  }
`;

export const Stripe = styled.div`
  background: white;
  height: 3px;
  width: 100%;
  height: 3px;
  top: 13px;

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
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: bold;

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
  border: 1px solid black;
  background: transparent;
  color: black;
  letter-spacing: 2px;
  text-transform: lowercase;
  line-height: 1.5;
  padding: 15px;
  display: inline-block;
  z-index: 100;
  cursor: pointer;
  font-size: 16px;

  @media ${device.desktop} {
    border: 1px solid white;
    color: white;
    height: 42px;
    width: 117px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Menuitems = styled.div`
  flex-flow: column nowrap;
  position: absolute;
  top: 0px;
  right: 0px;
  height: 200%;
  width: 280px;
  padding: 100px 40px;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  background: linear-gradient(
    170deg,
    rgba(255, 255, 255, 1) 20%,
    rgba(190, 190, 191, 0) 90%
  );
  color: rgba(0, 0, 0, 0.8);

  &:hover {
    color: rgba(0, 0, 0, 0.5);
  }

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
    line-height: 1.5;
    padding: 10px;
    color: white;
  }
`;

export const PortfolioMenuitem = styled.div`
  flex-flow: column;
  display: flex;
  padding: 8px 0px;
  cursor: pointer;
  letter-spacing: 2px;
  align-items: center;
  color: rgba(0,0,0, 0.8);
`;

const Maincontainer = styled.div`
  display: flex;
  height: 100px;
  width: 100%;
  background: rgba(0, 0, 0, 0.9);
  position: absolute;

  @media ${device.desktop} {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: flex-start;
    background: rgba(0, 0, 0, 0.9);
  }
`;
const TitleDiv = styled.div`
  img {
    position: absolute;
    left: -20px;
    top: -30px;
    z-index: 100;
    width: 230px;
    height: 150px;

    @media ${device.desktop} {
      width: 350px;
      height: 200px;
      left: -50px;
      top: -55px;
    }
  }
`;

const StyledNavLink = styled(NavLink)`
  color: rgba(0, 0, 0, 0.8);

  &:hover {
    color: rgba(0, 0, 0, 0.5);
  }

  @media ${device.desktop} {
    color: white;

    &:hover {
      color: lightpink;
    }
  }
`;

const DropDown = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;

  @media ${device.desktop} {
    background-color: ${({ backgroundColor }) => backgroundColor};

    width: 180px;
    height: 350px;
    position: absolute;
    z-index: 5;
    top: 40px;
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
    dropDowncolor: "rgba(8, 8, 8, 0.9)",
    linkColors: "rgb(198,176,176)",
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
              <img
                src="https://static.llllllllllll.com/eniko/anniekostolany/Annie-Kostolany-White-low-res.png"
                alt="Annie Kostolany"
              />
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
                onClick={() => {
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
                      color: "rgb(170,134,140)",
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
                    <StyledNavLink to="/couples">Love shoots</StyledNavLink>
                  </Menuitem>

                  <Menuitem>
                    <StyledNavLink to="/family">
                      Family & celebration
                    </StyledNavLink>
                  </Menuitem>

                  <Menuitem>
                    <StyledNavLink to="/solo-travelers">
                      Solo travelers
                    </StyledNavLink>
                  </Menuitem>

                  <Menuitem>
                    <StyledNavLink to="/boudoir">Boudoir</StyledNavLink>
                  </Menuitem>
                  <Menuitem>
                    <StyledNavLink to="/wedding">Wedding</StyledNavLink>
                  </Menuitem>
                  <Menuitem>
                    <StyledNavLink to="/how-does-it-work">
                      How does it work?{" "}
                      <i class="fa fa-info-circle" aria-hidden="true"></i>
                    </StyledNavLink>
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
