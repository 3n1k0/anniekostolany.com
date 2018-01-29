import React from 'react';
import { Page, Photo } from './Page';
import BookNowButton from '../BookNowButton';

export default () => (
	<Page
		title="Lost Bride"
		description="Moody photoshoot in the ice-cold waves of Zandvoort beach."
		image="lost_bride/mermaid.jpg"
	>
		<h2>Lost Bride</h2>
		<p>
			Visual story-telling with my beautiful model and the dramatic, orange-red sunset.
		</p>

		<Photo file="lost_bride/mermaid.jpg" />
		<Photo file="lost_bride/lookingback.jpg" />
		<Photo file="lost_bride/csokornezo.jpg" />
		<Photo file="lost_bride/shadow.jpg" />
		<Photo file="lost_bride/backlit.jpg" />
		<Photo file="lost_bride/sunset.jpg" />
		<Photo file="lost_bride/szep.jpg" />
		<p>Jill Valerie, Zandvoort, 2017.</p>
		<BookNowButton />
	</Page>
);
