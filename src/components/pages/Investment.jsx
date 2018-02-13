import React from 'react';
import { Photo, Page } from '../Page';
import BookNowButton from '../BookNowButton';

export default () => (
	<Page
		title="Investment"
		description="Rates, packages & information."
		image="investment/dorinaek.jpg"
	>
		<h2>Investment</h2>
		<Photo
			file="couple_shoots/34939741490_6f1c0bc417_k.jpg"
			alt="Couple kissing on purple flower-field"
		/>
		<p>
			<br />Portrait sessions start from 170 eur
			<br />Mini sessions from 90 eur
			<br /> Please contact me for my wedding package guide and other
			requests.
		</p>
		<BookNowButton />
	</Page>
);
