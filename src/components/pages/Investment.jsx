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
			My sessions start from 220 eur
			<br />Please message me to get my extensive guide with useful information about my pricing & packages. It includes location ideas, posing tips and inspiration for your own photo session.
		</p>

		<CallToActionButton to="/contact" text="Book now" />
	</TextPage>
);
