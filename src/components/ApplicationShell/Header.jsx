import styled from 'styled-components';
import Menu from './Menu';
import { Link } from 'react-router-dom';
import React from 'react';

const Header = styled.div`
	background: #ffffff;
	width: 100%;
	margin: 0 auto;
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
`;

export default () => (
	<Header>
		<Menu />
	</Header>
);
