import React from 'react';
import Page from '../Page';
import Photo from '../Photo';
import BookNowButton from '../BookNowButton';

export default () => (
	<Page
		title="fashion"
		description="fashion by Annie"
		image="fashion_confession/333.jpg"
	>
		<h2>fashion</h2>
		<Photo file="fashion_confession/tresor.jpg" />
		<Photo file="fashion_confession/anker4.jpg" />
		<Photo file="fashion_confession/annasand.jpg" />
		<Photo file="fashion_confession/cigi.jpg" />
		<Photo file="fashion_confession/333.jpg" />
		<Photo file="fashion_confession/korlat.jpg" />
		<Photo file="fashion_confession/lines.jpg" />
		<Photo file="fashion_confession/oszlop.jpg" />
		<Photo file="fashion_confession/legjobb.jpg" />
		<Photo file="fashion_confession/mezitlab.jpg" />
		<Photo file="fashion_confession/13.jpg" />
		<Photo file="fashion_confession/lepcso.jpg" />
		<Photo file="fashion_confession/9.jpg" />
		<BookNowButton />
	</Page>
);
