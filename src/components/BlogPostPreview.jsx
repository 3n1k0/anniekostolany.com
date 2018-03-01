import React from 'react';
import BlogPost from './BlogPost';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Banner = styled.div`
	background-image: url(${props => props.src});
	background-position: center center;
	background-size: 100%;
	height: 200px;
	display: block;
	width: 100;
	transition: background-size 0.1s ease-out, opacity 0.1s ease-out;

	&:hover {
		background-size: 110%;
		opacity: 0.5;
	}
`;

const Title = styled.h2`
	color: #000000;
	line-height: 1.2em;
	margin: 0;
	padding: 1rem 0 0 0;
	text-decoration: none;
`;

const Description = styled.span`
	color: #000000;
	display: block;
	padding: 1rem 0 1rem 0;
`;

const ReadMore = styled.span`
	color: #336699;
	display: block;
	padding: 0 0 2rem 0;
`;

const StyledLink = styled(Link)`
	display: block;
	text-decoration: none;
`;

export default props => {
	const { date, title, permalink, image, description } = props;
	const permaLink = '/blog/' + BlogPost.getPermalink(date, title, permalink);

	return (
		<StyledLink to={permaLink}>
			<Banner src={'https://anniekostolany.com/images/' + image} />
			<Title>{title}</Title>
			<Description>{description}</Description>
			<ReadMore>Read more...</ReadMore>
		</StyledLink>
	);
};
