import React from 'react';
import { Page, Photo } from './Page';
import BookNowButton from '../BookNowButton';

export default () => (
	<Page
		title="Lost Bride"
		description="Moody styled beach photoshoot with a beautiful Dutch model."
		image="lost_bride/mermaid.jpg"
	>
		<h2>Lost Bride</h2>
		<p>
			Dramatic and moody photoshoot in the cold waves of Zandvoort beach.
			This is a story of a bride who once lost but then found herself.
		</p>

		<Photo file="lost_bride/mermaid.jpg" />
		<Photo file="lost_bride/lookingback.jpg" />
		<Photo file="lost_bride/csokornezo.jpg" />
		<Photo file="lost_bride/shadow.jpg" />
		<Photo file="lost_bride/backlit.jpg" />
		<Photo file="lost_bride/sunset.jpg" />
		<Photo file="lost_bride/szep.jpg" />
		<BookNowButton />
	</Page>
);
