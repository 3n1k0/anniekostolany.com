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
`;

const Title = styled.span`
	bottom: 80px;
	color: rgba(255, 255, 255, 0.75);
	display: block;
	font-size: 24px;
	left: 40px;
	line-height: 1.5em;
	position: absolute;
	width: 50%;
`;

export default props => (
	<PrettyLink {...props}>
		{props.children}
		<Dimmer background={props.background}>
			<Title color={props.color}>{props.title}</Title>
		</Dimmer>
	</PrettyLink>
);
