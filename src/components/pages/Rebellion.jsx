import React from 'react';
import { Page, Photo } from './Page';
import BookNowButton from '../BookNowButton';
import Helmet from 'react-helmet';

export default () => (
	<Page>
		<Helmet>
			<meta
				name="description"
				content="Rock'n roll spirit reborn in fashion"
			/>
			<title>Rock'n roll girl | Annie Kostolany</title>

			<meta
				property="og:title"
				content="Rock'n roll girl | Annie Kostolany"
			/>
			<meta
				property="og:description"
				content="Rock'n roll spirit reborn in fashion"
			/>
			<meta
				property="og:image"
				content="https://anniekostolany.com/images/rebellion/korlat.jpg"
			/>
		</Helmet>

		<h2> Rebellion </h2>
		<p>
			{' '}
			Nivine is a true rebel inside and out and she's not afraid to show
			it to the world. A strong and ambitious girl who's able to express
			herself through her way of living. My ideal model.
		</p>
		<Photo file="rebellion/cigi.jpg" />
		<Photo file="rebellion/kocsi.jpg" />
		<Photo file="rebellion/korlat.jpg" />
		<Photo file="rebellion/korlat2.jpg" />
		<Photo file="rebellion/sunset.jpg" />
		<Photo file="rebellion/cigi2.jpg" />
		<Photo file="rebellion/white.jpg" />
		<Photo file="rebellion/csikos.jpg" />
		<Photo file="rebellion/lines.jpg" />
		<p> Nivine Massoud, Amsterdam, 2017.</p>
		<BookNowButton />
	</Page>
);
