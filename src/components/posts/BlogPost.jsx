import React from 'react';
import { Page, Photo } from '../pages/Page';
import { Link } from 'react-router-dom';

export class BlogPost extends React.Component {
	render() {
		const { date, title, children, listed } = this.props;

		return (
			<Page {...(listed ? {} : this.props)}>
				<h2>
					<Link to={'/blog/' + BlogPost.getPermalink(date, title)}>
						{title}
					</Link>
				</h2>
				{children}
			</Page>
		);
	}

	static getPermalink(date, title) {
		const jsDate = new Date(date),
			year = jsDate.getFullYear(),
			month = jsDate.getMonth() + 1,
			day = jsDate.getDate(),
			monthLz = ('0' + month).slice(-2),
			dayLz = ('0' + day).slice(-2),
			urlifiedTitle = title
				.replace(/ /g, '-')
				.replace(/[^a-zA-Z0-9-]+/g, '')
				.toLowerCase();

		return year + '/' + monthLz + '/' + dayLz + '/' + urlifiedTitle;
	}
}

export { Photo };
