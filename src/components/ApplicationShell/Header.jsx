import styled from 'styled-components';
import { Link } from 'react-router-dom';
import React from 'react';
import { Facebook, Instagram } from './SocialIcons';

const Header = styled.div`
	background: #000000;
	margin: 0 auto;
	padding: 2px 0;
	width: 100%;
`;

const Menu = styled.nav`
	display: block;
	padding: 0;

	&:after {
		clear: both;
		content: ' ';
		display: block;
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

	@media (max-width: 800px) {
		float: right;
	}
`;

const Logo = MenuItem.extend`
	background-image: url(https://anniekostolany.com/images/logo_white.png);
	background-repeat: no-repeat;
	background-size: 100%;
	background-position: center center;
	color: rgba(0, 0, 0, 0);
	padding: 0 40px;

	@media (max-width: 800px) {
		float: left;
	}
`;

export default () => (
	<Header>
		<Menu>
			<Logo to="/">Annie Kostolany Photography</Logo>
			<MenuItem to="/">Home</MenuItem>
			<MenuItem to="/about-me">About me</MenuItem>
			<MenuItem to="/investment">Investment</MenuItem>
			<MenuItem to="/blog">Blog</MenuItem>
			<MenuItem to="/contact">Contact</MenuItem>
			<Instagram />
			<Facebook />
		</Menu>
	</Header>
);
