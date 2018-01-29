import React from 'react';
import { page } from './style.scss';
import Helmet from 'react-helmet';

const IMAGE_PATH = 'https://anniekostolany.com/images/';

export var Photo = props => (
	<img src={IMAGE_PATH + props.file} alt={props.alt} />
);

export class Page extends React.Component {
	static getPermalink(title) {
		return (
			'/' +
			title
				.replace(/[^a-zA-Z0-9 ]+/g, '')
				.replace(/ +/g, '-')
				.toLowerCase()
		);
	}

	render() {
		const { title, description, image } = this.props;

		return (
			<div className={page}>
				<Helmet>
					{title && [
						<title>{title} | Annie Kostolany</title>,
						<meta
							property="og:title"
							content={title + ' | Annie Kostolany'}
						/>
					]}

					{description && [
						<meta name="description" content={description} />,
						<meta property="og:description" content={description} />
					]}

					{image && (
						<meta
							property="og:image"
							content={IMAGE_PATH + image}
						/>
					)}
				</Helmet>
				{this.props.children}
			</div>
		);
	}
}
