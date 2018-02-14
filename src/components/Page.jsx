import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

const PageContainer = styled.div`
	font-size: 16px;
	font-family: 'Open Sans', sans-serif;
	line-height: 1.5em;
	width: auto;

	@media (max-width: 768px) {
		padding: 40px 0 0 0;
	}

	h2 {
		font-weight: normal;
	}
`;

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
		const { title, description, image, isInListView } = this.props;

		return (
			<PageContainer>
				{!isInListView || (
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
								content={IMAGE_PATH + image}
							/>
						)}
					</Helmet>
				)}
				{this.props.children}
			</PageContainer>
		);
	}
}
