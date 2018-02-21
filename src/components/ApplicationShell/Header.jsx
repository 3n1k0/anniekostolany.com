import styled from 'styled-components';
import Menu from './Menu';
import { Link } from 'react-router-dom';
import React from 'react';

const Header = styled.div`
`;

const Logo = styled(Link)`
	background-image: url(https://anniekostolany.com/images/logo.png);
	display: block;
	height: 130px;
	width: 100%;
	background-size: 100% auto;
	background-repeat: no-repeat;
	margin: 20px 0;
	width: 300px;
`;

export default () => (
	<Header>
		<Logo to="/" />
		<Menu />
	</Header>
);
