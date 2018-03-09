import React from 'react';
import BlogPost from './BlogPost';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Banner = styled.div`
	background-image: url(${props => props.src});
	background-position: center center;
	background-repeat: no-repeat;
	background-size: 100%;
	padding-bottom: 60%;
	display: block;
	width: 100%;
	transition: background-size 0.1s ease-out, opacity 0.1s ease-out;

	&:hover {
		background-size: 110%;
		opacity: 0.5;
	}
`;

const Title = styled.h2`
	color: #333333;
	font-family: 'Open Sans', sans-serif;
	font-size: 24px;
	line-height: 1.25;
	margin: 0;
	padding: 1rem 1rem 0 1rem;
	text-decoration: none;
`;

const Description = styled.span`
	color: #999999;
	display: block;
	font-family: 'Open Sans', sans-serif;
	font-size: 16px;
	padding: 1rem 1rem 2rem 1rem;
`;

const ReadMore = styled.span`
	color: #336699;
`;

const StyledLink = styled(Link)`
	text-decoration: none;
`;

const BlogPostPreview = styled.article`
	display: block;
`;

export default props => {
	const { date, title, permalink, image, description } = props;
	const permaLink = '/blog/' + BlogPost.getPermalink(date, title, permalink);

	return (
		<BlogPostPreview>
			<StyledLink to={permaLink}>
				<Banner src={'https://anniekostolany.com/images/' + image} />
			</StyledLink>
			<StyledLink to={permaLink}>
				<Title>{title}</Title>
			</StyledLink>
			<Description>
				{description} <ReadMore>Read more...</ReadMore>
			</Description>
		</BlogPostPreview>
	);
};
