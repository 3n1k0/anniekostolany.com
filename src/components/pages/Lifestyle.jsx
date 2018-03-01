import React from 'react';
import Page from '../Page';
import Photo from '../Photo';
import { Link } from 'react-router-dom';
import CallToActionButton from '../CallToActionButton';

export default () => (
	<Page
		title="Lifestyle photography"
		description="Capture the best moments of your life."
		image="coffee.jpg"
	>
		<h2>Lifestyle photography</h2>

		<Photo file="coffee.jpg" alt="Girl drinking coffee" />

		<p>
			Do you have a beautiful family and super cute kids? Let's take some
			photos of them!
			<br />The point of lifestyle photography is to capture the happiest
			everyday moments without stressing too much about planning the shoot
			and especially without forcing unnatural poses. Let's just meet in
			the cosiness of your home or at any other place you choose. Picking
			the location shows your style, your unique taste, way of living. And
			what is the most important: it tells your story.
			<br />You will have nothing to do, except having fun with the people
			you love. This way I can promise that your photos will turn out to
			be really candid and natural. My main locations are Haarlem &
			Amsterdam but I would be more than happy to travel to you.
		</p>

		<CallToActionButton to="/contact" text="Book now" />
	</Page>
);
