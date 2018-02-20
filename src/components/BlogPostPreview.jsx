import React from 'react';
import BlogPost from './BlogPost';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Banner = styled.div`
	background-image: url(${props => props.src});
	background-position: center center;
	background-size: cover;
	height: 200px;
	display: block;
	width: 100;

	&:hover {
		opacity: 0.5;
	}
`;

const Title = styled.h2`
	padding: 1rem 1rem 0 1rem;
	margin: 0;
	color: #000000;
	text-decoration: none;
`;

const Description = styled.span`
	color: #000000;
	display: block;
	padding: 1rem 1rem 2rem 1rem;
`;

const StyledLink = styled(Link)`
	text-decoration: none;
`;

export default props => (
	<StyledLink
			to={
				'/blog/' +
				BlogPost.getPermalink(props.date, props.title, props.permalink)
			}
		>
			<Banner src={'https://anniekostolany.com/images/' + props.image} />
			<Title>{props.title}</Title>
			<Description>{props.description}</Description>
	</StyledLink>
);
