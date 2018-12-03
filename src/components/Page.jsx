import React from 'react';
import Helmet from 'react-helmet';

export default class Page extends React.Component {
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
		const {
			title,
			description,
			image,
			className
		} = this.props;

		return (
			<section className={className}>
				<Helmet>
					{title && [
						<title key="1">{title} | Annie Kostolany</title>,
						<meta
							property="og:title"
							content={title + ' | Annie Kostolany'}
							key="2"
						/>
					]}

					{description && [
						<meta
							name="description"
							content={description}
							key="1"
						/>,
						<meta
							property="og:description"
							content={description}
							key="2"
						/>
					]}

					{image && (
						<meta
							property="og:image"
							content={image}
						/>
					)}
				</Helmet>

				{this.props.children}
			</section>
		);
	}
}
