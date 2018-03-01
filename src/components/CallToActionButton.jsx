import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled.div`
	padding: 40px 0 80px 0;

	a {
		border: 1px solid #000000;
		color: #000000;
		display: block;
		font-family: Cardo, serif;
		font-size: 26px;
		margin: 0 auto;
		padding: 18px;
		text-align: center;
		text-decoration: none;
		width: 140px;
	}

	a:hover {
		background: #000000;
		color: #ffffff;
	}
`;

export default (props) => (
	<Button>
		<Link to={props.to}>{props.text}</Link>
	</Button>
);
