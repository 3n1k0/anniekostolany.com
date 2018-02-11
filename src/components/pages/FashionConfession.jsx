import React from 'react';
import { Page, Photo } from '../Page';
import BookNowButton from '../BookNowButton';

export default () => (
	<Page
		title="Fashion Confession"
		description="Street fashion photoshoot with a Southern European beauty"
		image="fashion_confession/oszlopok.jpg"
	>
		<h2>Fashion Confession</h2>
		<p>This girl is half Italian, half Greek and full of life.</p>
		<Photo file="fashion_confession/annasand.jpg" />
		<Photo file="fashion_confession/annasand1.jpg" />
		<Photo file="fashion_confession/fuggony.jpg" />
		<Photo file="fashion_confession/oszlopok.jpg" />
		<Photo file="fashion_confession/lepcso.jpg" />
		<Photo file="fashion_confession/kerites.jpg" />
		<Photo file="fashion_confession/mezitlab.jpg" />
		<Photo file="fashion_confession/yellow1.jpg" />
		<Photo file="fashion_confession/yellow2.jpg" />
		<BookNowButton />
	</Page>
);
