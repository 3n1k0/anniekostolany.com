import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Facebook, Instagram } from './SocialIcons';

const Menu = styled.div`
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
	padding: 10px;
	text-decoration: none;

	&:hover {
		background: #000000;
		color: #ffffff;
	}
`;

export default () => (
	<Menu>
		<MenuItem to="/about-me">About me</MenuItem>
		<MenuItem to="/investment">Investment</MenuItem>
		<MenuItem to="/blog">Blog</MenuItem>
		<MenuItem to="/contact">Contact</MenuItem>
		<Instagram />
		<Facebook />
	</Menu>
);
