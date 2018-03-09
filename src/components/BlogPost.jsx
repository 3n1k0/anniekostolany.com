import React from 'react';
import Page from './Page';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import moment from 'moment';
import PhotoSet from './PhotoSet';
import Photo from './Photo';
import Helmet from 'react-helmet';
import CallToActionButton from './CallToActionButton';

const StyledPage = styled(Page)`
	font-family: 'Open Sans', sans-serif;
	font-size: 16px;
	padding-top: 50px;

	p {
		margin: 0;
		padding: 20px;
	}

	img {
		padding: 20px 0;
	}
`;

const Title = styled.h2`
	font-family: Cardo, serif;
	font-size: 32px;
	font-weight: bold;
	line-height: 1.25;
	margin: 0;
	padding: 0 20px;

	a {
		color: #000000;
		text-decoration: none;
	}
`;

const PostDetails = styled.span`
	color: #999999;
	display: block;
	padding: 0 20px;
`;

export { PhotoSet, Photo };

export default class BlogPost extends React.Component {
	render() {
		const {
			date,
			title,
			children,
			permalink,
			image,
			description
		} = this.props;
		const formattedDate = moment(date).format('MMMM Do, YYYY');

		return (
			<StyledPage {...this.props}>
				<Helmet>
					<meta name="author" content="Annie Kostolany" />
					<meta property="og:type" content="article" />
				</Helmet>
				<Title>
					<Link
						to={
							'/blog/' +
							BlogPost.getPermalink(date, title, permalink)
						}
					>
						{title}
					</Link>
				</Title>
				<PostDetails>
					{formattedDate} &middot; Annie Kostolany
				</PostDetails>
				{children}
				<CallToActionButton to="/blog" text="Read more" />
			</StyledPage>
		);
	}

	static getPermalink(date, title, permalink) {
		const jsDate = new Date(date),
			year = jsDate.getFullYear(),
			month = jsDate.getMonth() + 1,
			day = jsDate.getDate(),
			monthLz = ('0' + month).slice(-2),
			dayLz = ('0' + day).slice(-2),
			urlifiedTitle = title
				.replace(/[^a-zA-Z0-9 ]+/g, '')
				.replace(/ +/g, '-')
				.toLowerCase();

		return (
			year +
			'/' +
			monthLz +
			'/' +
			dayLz +
			'/' +
			(permalink ? permalink : urlifiedTitle)
		);
	}
}
