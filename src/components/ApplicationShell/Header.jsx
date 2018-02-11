import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
	background: #ffffff;
	height: 40px;
	left: 0;
	position: fixed;
	right: 0;
	top: 0;
`;

export default props => <Header>{props.children}</Header>;
