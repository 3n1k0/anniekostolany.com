import React from 'react';
import { Page, Photo } from './Page';
import BookNowButton from '../BookNowButton';
import Helmet from 'react-helmet';

export default () => (
	<Page>
		<Helmet>
			<meta
				name="description"
				content="Street fashion photoshoot with a Southern European beauty"
			/>
			<title>Fashion Confession | Annie Kostolany</title>

			<meta
				property="og:title"
				content="Fashion Confession | Annie Kostolany"
			/>
			<meta
				property="og:description"
				content="Street fashion photoshoot with a Southern European beauty"
			/>
			<meta
				property="og:image"
				content="https://anniekostolany.com/images/tropical_vibes/oszlopok.jpg"
			/>
		</Helmet>
		<h2>Fashion Confession</h2>
		<p>
			{' '}
			This girl is half Italian, half Greek and full of life. Maybe it's
			not so obvious from the photos but all of them were taken around and
			office in the business area of Amsterdam. I think it proves that
			location is key, but not everything.{' '}
		</p>
		<Photo file="fashion_confession/annasand.jpg" />
		<Photo file="fashion_confession/annasand1.jpg" />
		<Photo file="fashion_confession/fuggony.jpg" />
		<Photo file="fashion_confession/oszlopok.jpg" />
		<Photo file="fashion_confession/lepcso.jpg" />
		<Photo file="fashion_confession/kerites.jpg" />
		<Photo file="fashion_confession/mezitlab.jpg" />
		<Photo file="fashion_confession/yellow1.jpg" />
		<Photo file="fashion_confession/yellow2.jpg" />
		<BookNowButton />
	</Page>
);
