import React from 'react';
import TextPage from '../TextPage';
import Photo from '../Photo';
import CallToActionButton from '../CallToActionButton';

export default () => (
	<TextPage
		title="Investment"
		description="Rates, packages & information."
		image="investment/amsterdam.jpg"
	>
		<Photo
			file="investment/amsterdam.jpg"
			alt="Girl walking in Amsterdam"
		/>
		<p>
			Message me to get my extensive pricing and package guide with useful information, posing and location advice.
			<br />Sessions start from 99 eur
		</p>

		<CallToActionButton to="/contact" text="Book now" />
	</TextPage>
);
