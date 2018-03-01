import styled from 'styled-components';
import Menu from './Menu';
import { Link } from 'react-router-dom';
import React from 'react';

const Header = styled.div`
	background: #ffffff;
	width: 100%;
	margin: 0 auto;
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
`;

const Logo = styled(Link)`
	display: block;
	width: 15%;
	opacity: 0.1;


	position: fixed;
	top: 2%;
	left: 2%;

	&:hover {
		opacity: 1;
	}

	img {
		width: 100%;
	}

`;

export default () => (
	<Header>
		<Menu />
	</Header>
);
