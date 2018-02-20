import React from 'react';
import Page from './Page';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import moment from 'moment';
import PhotoSet from './PhotoSet';
import Photo from './Photo';

const Title = styled.h2`
	padding: 1rem 0 0 0;
	margin: 0;

	a {
		color: #000000;
		text-decoration: none;
	}
`;

const PostDate = styled.span`
	color: #999999;
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
			<Page {...this.props}>
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
				<PostDate>{formattedDate}</PostDate>
				{children}
			</Page>
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
