import React from 'react';
import Helmet from 'react-helmet';
import styled, { injectGlobal } from 'styled-components';
import Header from './Header';

injectGlobal`
	html {
		background: #ffffff;
	}

	body {
		background: #ffffff;
	}

	html, body {
		margin: 0;
		padding: 0;
	}
`;

const Page = styled.div`
	width: 60%;
	margin: 0 auto;
	padding: 0;

	@media (max-width: 1024px) {
		width: 80%;
	}

	@media (max-width: 900px) {
		//	padding-top: 50px;
	}

	@media (max-width: 600px) {
		width: 100%;
	}
`;

export default class ApplicationShell extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return [
			<Header />,
			<Page>
				<Helmet>
					<meta charset="utf-8" />
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"
					/>
					<meta
						name="description"
						content="Family, portrait &amp; pre-wedding photography with a dreamy touch. Based in Amsterdam, Netherlands, available worldwide. Let's create magic!"
					/>
					<meta
						name="msvalidate.01"
						content="CC9A36425DA97869438FEFFB720A6432"
					/>

					<meta
						property="og:title"
						content="Portrait &amp; Event Photography in Amsterdam | Annie Kostolany"
					/>
					<meta
						property="og:description"
						content="Family, portrait &amp; pre-wedding photography with a dreamy touch. Based in Amsterdam, Netherlands, available worldwide. Let's create magic!"
					/>
					<meta property="og:type" content="website" />
					<meta property="og:locale" content="en_US" />

					<link
						href="https://fonts.googleapis.com/css?family=Cardo|Roboto|Open+Sans"
						rel="stylesheet"
					/>
					<link
						href="https://use.fontawesome.com/releases/v5.0.8/css/all.css"
						rel="stylesheet"
					/>

					<title>
						Portrait &amp; Event Photography in Haarlem | Annie
						Kostolany
					</title>
				</Helmet>
				{this.props.children}
			</Page>
		];
	}
}
