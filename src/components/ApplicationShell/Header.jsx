import styled from 'styled-components';
import Menu from './Menu';
import { Link } from 'react-router-dom';
import React from 'react';

const Header = styled.div`
	padding: 40px 0;

	&:after {
		clear: both;
		content: ' ';
		display: block;
	}
`;

const Logo = styled(Link)`
	background-image: url(https://anniekostolany.com/images/logo.png);
	display: block;
	float: left;
	height: 0;
	width: 100%;
	background-size: 100% auto;
	background-repeat: no-repeat;
	padding-bottom: 130px;
	width: 300px;
`;

export default () => (
	<Header>
		<Logo to="/" />
		<Menu />
	</Header>
);
