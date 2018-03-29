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
			<br />My sessions start from 220 eur 
			<br />Please message me to get my extensive guide with useful information about my pricing & packages. It includes location ideas, posing tips and inspiration for your own photo session.
			
			
		</p>
		<BookNowButton />
	</Page>
);
