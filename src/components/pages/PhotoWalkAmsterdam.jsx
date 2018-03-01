import React from 'react';
import Page from '../Page';
import Photo from '../Photo';
import CallToActionButton from '../CallToActionButton';

export default () => (
	<Page
		title="Photo walk Amsterdam & Haarlem"
		description="Photo walk Amsterdam & Haarlem"
		image="rebellion/photo_walk_amsterdam/1.jpg"
	>
		<h2> Photo walk Amsterdam & Haarlem </h2>
		<p>
			Most people know Amsterdam as the city of freedom. Maybe because
			here you don't have to hide who you are and you will be accepted
			anyway. But besides this, the city has an utterly romantic
			atmosphere too. As soon as you walk through a narrow street and
			cross the canals on one of the million charming bridges you will
			immediately realize this. Amsterdam is one of my favourite places on
			Earth. Leave the selfie stick home for now, and book a professional
			photo session! Please contact for further details and availability.
		</p>

		<Photo file="photo_walk_amsterdam/1.jpg" />
		<Photo file="photo_walk_amsterdam/2.jpg" />
		<Photo file="photo_walk_amsterdam/55.jpg" />
		<Photo file="photo_walk_amsterdam/3.jpg" />
		<Photo file="photo_walk_amsterdam/4.jpg" />
		<Photo file="photo_walk_amsterdam/88.jpg" />
		<Photo file="photo_walk_amsterdam/8.jpg" />

		<CallToActionButton to="/contact" text="Book now" />
	</Page>
);
