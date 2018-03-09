import styled from 'styled-components';
import { Link } from 'react-router-dom';
import React from 'react';
import { Facebook, Instagram } from './SocialIcons';

const HeaderContainer = styled.header`
	background: #000000;
	margin: 0 auto;
	padding: 2px 0;
	width: 100%;

	&:after {
		clear: both;
		content: ' ';
		display: block;
	}

	@media (max-width: 800px) {
		left: 0;
		position: fixed;
		right: 0;
		top: 0;
	}
`;

const HorizontalMenu = styled.nav`
	display: block;
	padding: 0;

	@media (max-width: 900px) {
		display: none;
	}
`;

const MenuItem = styled(Link)`
	color: #ffffff;
	display: block;
	float: left;
	font-family: 'Open sans';
	height: 46px;
	line-height: 46px;
	padding: 0 20px;
	text-decoration: none;
	text-align: center;
`;

const Logo = styled(Link)`
	background-image: url(https://anniekostolany.com/images/logo_white.png);
	background-repeat: no-repeat;
	background-size: 100%;
	background-position: center center;
	color: rgba(0, 0, 0, 0);
	display: block;
	float: left;
	height: 46px;
	padding: 0 40px;

	@media (max-width: 800px) {
		display: block;
	}
`;

const MenuButton = styled.i`
	display: block;
	color: #ffffff;
	font-size: 24px;
	line-height: 46px;

	position: absolute;
	right: 40px;

	@media (min-width: 901px) {
		display: none;
	}
`;

export default class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			menuVisible: false
		};
	}

	onMenuButtonClick = () => {
		this.setState({
			menuVisible: true
		});
	};

	render() {
		return (
			<HeaderContainer>
				<Logo to="/">Annie Kostolany Photography</Logo>
				<HorizontalMenu>
					<MenuItem to="/">Home</MenuItem>
					<MenuItem to="/about-me">About me</MenuItem>
					<MenuItem to="/investment">Investment</MenuItem>
					<MenuItem to="/blog">Blog</MenuItem>
					<MenuItem to="/contact">Contact</MenuItem>
					<Instagram />
					<Facebook />
				</HorizontalMenu>
				<MenuButton
					className="fa fa-bars"
					onClick={this.onMenuButtonClick}
				/>
			</HeaderContainer>
		);
	}
}
