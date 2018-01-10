import React from 'react';
import { Page, Photo } from './Page';
import BookNowButton from '../BookNowButton';
import Helmet from 'react-helmet';

export default () => (
	<Page>
		<Helmet>
			<meta
				name="description"
				content="Moody styled beach photoshoot with a beautiful Dutch model."
			/>
			<title>Lost Bride | Annie Kostolany</title>

			<meta property="og:title" content="Lost Bride | Annie Kostolany" />
			<meta
				property="og:description"
				content="Moody styled beach photoshoot with a beautiful Dutch model."
			/>
			<meta
				property="og:image"
				content="https://anniekostolany.com/images/lost_bride/mermaid.jpg"
			/>
		</Helmet>
		<h2> Lost Bride </h2>
		<p>
			{' '}
			Dramatic and moody photoshoot in the cold waves of Zandvoort beach.
			This is a story of a bride who once lost but then found herself.
		</p>

		<Photo file="lost_bride/mermaid.jpg" />
		<Photo file="lost_bride/lookingback.jpg" />
		<Photo file="lost_bride/csokornezo.jpg" />
		<Photo file="lost_bride/shadow.jpg" />
		<Photo file="lost_bride/backlit.jpg" />
		<Photo file="lost_bride/sunset.jpg" />
		<Photo file="lost_bride/szep.jpg" />
		<BookNowButton />
	</Page>
);
