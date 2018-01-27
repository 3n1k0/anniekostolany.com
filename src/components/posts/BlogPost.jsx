import React from 'react';
import { Helmet } from 'react-helmet';

export default props => (
	<div>
		<Helmet>
			<title>{props.title}</title>
			<meta property="og:title" content={props.title} />
			<meta property="og:description" content={props.description} />
			<meta name="description" content={props.description} />
		</Helmet>
		<h2>{props.title}</h2>
		{props.children}
	</div>
);
