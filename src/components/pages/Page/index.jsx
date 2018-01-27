import React from 'react';
import { page } from './style.scss';
import Helmet from 'react-helmet';

const IMAGE_PATH = 'https://anniekostolany.com/images/';

export var Photo = props => (
	<img src={IMAGE_PATH + props.file} alt={props.alt} />
);

export var Page = props => {
	const title = props.title ? props.title : '';

	const description = props.description ? props.description : '';

	return (
		<div className={page}>
			<Helmet>
				{props.title && [
					<title>{title} | Annie Kostolany</title>,
					<meta
						property="og:title"
						content={title + ' | Annie Kostolany'}
					/>
				]}

				{props.description && [
					<meta name="description" content={props.description} />,
					<meta
						property="og:description"
						content={props.description}
					/>
				]}

				{props.image && (
					<meta
						property="og:image"
						content={IMAGE_PATH + props.image}
					/>
				)}
			</Helmet>
			{props.children}
		</div>
	);
};
