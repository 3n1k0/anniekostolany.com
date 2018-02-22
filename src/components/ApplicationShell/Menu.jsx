import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Facebook, Instagram } from './SocialIcons';

const Menu = styled.div`
	background: #eee;
	//border: 1px solid #000000;
	display: block;
	padding: 0;

	&:after {
		clear: both;
		content: ' ';
		display: block;
	}
`;

const MenuItem = styled(Link)`
	color: #000000;
	font-family: 'Open sans';
	float: left;
	padding: 10px 0;
	text-decoration: none;
	border-right: 1px solid #fff;
	width: calc(100% /6);
	text-align: center;

	&:hover {
		background: #000000;
		color: #ffffff;
	}
`;

export default () => (
	<Menu>
		<MenuItem to="/">Home</MenuItem>
		<MenuItem to="/about-me">About me</MenuItem>
		<MenuItem to="/investment">Investment</MenuItem>
		<MenuItem to="/blog">Blog</MenuItem>
		<MenuItem to="/contact">Contact</MenuItem>
		<Instagram />
		<Facebook />
	</Menu>
);
