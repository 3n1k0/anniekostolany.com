import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Header from './Header';

const Page = styled.div`
	width: 60%;
	margin: 0 auto;

	@media (max-width: 1024px) {
		width: 80%;
	}

	@media (max-width: 400px) {
		width: 100%;
	}
`;

export default class ApplicationShell extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Page>
				<Helmet>
					<meta charset="utf-8" />
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"
					/>
					<meta
						name="description"
						content="Family, portrait &amp; pre-wedding photography with a dreamy touch. Based in Haarlem, Netherlands, available worldwide. Let's create magic!"
					/>
					<meta
						name="msvalidate.01"
						content="CC9A36425DA97869438FEFFB720A6432"
					/>

					<meta
						property="og:title"
						content="Portrait &amp; Event Photography in Haarlem | Annie Kostolany"
					/>
					<meta
						property="og:description"
						content="Family, portrait &amp; pre-wedding photography with a dreamy touch. Based in Haarlem, Netherlands, available worldwide. Let's create magic!"
					/>
					<meta property="og:type" content="website" />
					<meta property="og:locale" content="en_US" />

					<link
						href="https://fonts.googleapis.com/css?family=Cardo|Roboto|Open+Sans"
						rel="stylesheet"
					/>
					<link
						rel="stylesheet"
						href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
					/>

					<title>
						Portrait &amp; Event Photography in Haarlem | Annie
						Kostolany
					</title>
				</Helmet>

				<Header />

				{this.props.children}
			</Page>
		);
	}
}
