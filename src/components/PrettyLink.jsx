import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';

const PrettyLink = styled(Link)`
	display: block;
	position: relative;
`;

const Dimmer = styled.div`
	//${props => props.color}
	background: radial-gradient(ellipse at center, rgba(0,0,0,0) 0%,rgba(0,0,0,1) 100%);
	bottom: 0;
	display: block;
	opacity: 0;
	left: 0;
	position: absolute;
	right: 0;
	top: 0;
	transition: opacity 0.1s ease-in;
	will-change: transform, opacity;

	&:hover {
		opacity: 1;
	}

	@media (max-width: 500px) {
		background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.8) 100%);
		opacity: 1;
	}
`;

const Title = styled.span`
	bottom: 80px;
	color: rgba(255, 255, 255, 0.8);
	display: block;
	font-family: 'Open Sans', sans-serif;
	font-size: 24px;
	left: 40px;
	line-height: 1.5;
	position: absolute;
	width: 50%;

	@media (max-width: 500px) {
		bottom: 30px;
		font-size: 18px;
		left: 30px;
		line-height: 1.25;
	}
`;

export default props => (
	<PrettyLink {...props}>
		{props.children}
		<Dimmer background={props.background}>
			<Title color={props.color}>{props.title}</Title>
		</Dimmer>
	</PrettyLink>
);
