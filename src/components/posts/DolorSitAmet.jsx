import { BlogPost, Photo } from './BlogPost';
import React from 'react';

export default (
	<BlogPost
		title="Amsterdam dolor sit amet"
		description="Lorem ipsum"
		date="2017-09-11"
	>
		<p>
			Amsterdam is the well-known city of freedom. You can be here who you
			are, and you don't have to be afraid of discrimination or
			negativity. But besides all of this, the city is utterly romantic
			too. As soon as you walk through the narrow streets and cross the
			canals on one of the million charming bridges you will immediately
			know what I mean. It is one of my favourite places on Earth. There
			is an other place too, less known but just as spectacular: Haarlem.
			This little town is exactly like a mini-Amsterdam. The reason I like
			is because it's not as crowded as the center of Amsterdam so it's
			easier to get the perfect photos here. Whatever location you prefer,
			leave the selfie stick home for now, and book a photo session with
			me instead! Contact me for further details and availability.
		</p>

		<Photo file="photo_walk_amsterdam/1.jpg" />
		<Photo file="photo_walk_amsterdam/2.jpg" />

		<p>
			I cannot imagine a more romantic background for either couple shoots
			or simple portrait sessions. If you feel like windmills, bridges,
			canals and flowers are something you'd like to see on your photos,
			message me by clicking the button below.
		</p>
	</BlogPost>
);
