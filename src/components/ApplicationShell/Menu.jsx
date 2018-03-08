import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Facebook, Instagram } from './SocialIcons';

const Menu = styled.div`
	background: #000000;
	border-bottom: 1px solid #000000;
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
	font-family: 'Open sans';
	line-height: 50px;
	float: left;
	padding: 0 40px;
	text-decoration: none;
	text-align: center;

	&:hover {
		background-color: #000000;
		color: #ffffff;
	}
`;

const Logo = MenuItem.extend`
	background-color: #000000;
	background-image: url(https://anniekostolany.com/images/logo_white.png);
	background-repeat: no-repeat;
	background-size: 100%;
	background-position: center center;
	color: rgba(0, 0, 0, 0);


	&:hover {
		color: rgba(0, 0, 0, 0);
	}
`;

export default () => (
	<Menu>
		<Logo to="/">Annie Kostolany Photography</Logo>
		<MenuItem to="/about-me">About me</MenuItem>
		<MenuItem to="/investment">Investment</MenuItem>
		<MenuItem to="/blog">Blog</MenuItem>
		<MenuItem to="/contact">Contact</MenuItem>
		<Instagram />
		<Facebook />
	</Menu>
);
