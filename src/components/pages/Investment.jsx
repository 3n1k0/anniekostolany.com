import React from 'react';
import TextPage from '../TextPage';
import Photo from '../Photo';
import CallToActionButton from '../CallToActionButton';

export default () => (
	<TextPage
		title="Investment"
		description="Rates, packages & information."
		image="investment/dorinaek.jpg"
	>
		<Photo
			file="couple_shoots/34939741490_6f1c0bc417_k.jpg"
			alt="Couple kissing on purple flower-field"
		/>
		<p>
			Portrait sessions start from 220 eur
			<br />Mini sessions from 99 eur
			<br /> Please contact me for my wedding package guide and other
			requests.
		</p>

		<CallToActionButton to="/contact" text="Book now" />
	</TextPage>
);
