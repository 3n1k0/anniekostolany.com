import React from 'react';
import { Page, Photo } from './Page';
import BookNowButton from '../BookNowButton';

export default () => (
	<Page>
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
