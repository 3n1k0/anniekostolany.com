import React from 'react';
import { Page, Photo } from './Page';
import BookNowButton from '../BookNowButton';

export default () => (
	<Page>
		<h2> Photo walk Amsterdam & Haarlem </h2>
		<p> For most European people Amsterdam is the city of freedom. But besides that, it is utterly romantic too. As soon as you walk through the narrow streets and cross the canals on one of the million charming bridges you will immediately know what I mean. It is one of my favourite places on Earth. There is an other place too, less known but just as spectacular: Haarlem. This little town is exactly like a mini-Amsterdam but the reason I like is because it's not as crowded as the center of Amsterdam so it's easier to get the perfect photos here.
		Whatever city you prefer, leave the selfie stick home for now and book a photo session now! Contact me for further details and availability.</p>

		<Photo file="photo_walk_amsterdam/1.jpg"/>
		<Photo file="photo_walk_amsterdam/2.jpg"/>
		<Photo file="photo_walk_amsterdam/55.jpg"/>
		<Photo file="photo_walk_amsterdam/3.jpg"/>
		<Photo file="photo_walk_amsterdam/4.jpg"/>
		<Photo file="photo_walk_amsterdam/88.jpg"/>
		<Photo file="photo_walk_amsterdam/8.jpg"/>

		<p>I cannot imagine a more romantic background for either couple shoots or simple portrait sessions.
		If you feel like windmills, bridges, canals and flowers are something you'd like to see on your photos, message me by clicking the button below.</p>
		<BookNowButton />
	</Page>
);
