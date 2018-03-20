import React from 'react';
import Page from '../Page';
import Photo from '../Photo';
import BookNowButton from '../BookNowButton';

export default () => (
	<Page
		title="Investment"
		description="Rates, packages & information."
		image="investment/amsterdam.jpg"
	>
		<h2>Investment</h2>

		<Photo
			file="investment/amsterdam.jpg"
			alt="Girl walking in Amsterdam"
		/>
		<p>
			<br />Message me to get my extensive pricing and package guide with useful information, posing and location advice.
			<br />Sessions start from 99 eur
			
		</p>
		<BookNowButton />
	</Page>
);
