import React from 'react';
import { Page, Photo } from '../Page';
import BookNowButton from '../BookNowButton';

export default () => (
	<Page title="Couple shoots" permalink="/couple-germany">
		<Photo
			file="couple_shoots/pled.jpg"
			alt="Couple laying on blanket laughing"
		/>
		<Photo
			file="couple_shoots/35197522211_52bbdc3a5f_k.jpg"
			alt="Cute couple in wheat-field laughing"
		/>
		<Photo
			file="couple_shoots/pipacs.jpg"
			alt="Couple photoshoot with red flower"
		/>
		<Photo
			file="couple_shoots/35327296405_ced9926185_k.jpg"
			alt="Couple laughing by water"
		/>
		<Photo
			file="couple_shoots/34939741490_6f1c0bc417_k.jpg"
			alt="Couple kissing on purple flower-field"
		/>
		<Photo
			file="couple_shoots/35197522641_a8a3b05128_k.jpg"
			alt="Couple standing in water"
		/>
		<Photo
			file="couple_shoots/35197523791_4e180460af_k.jpg"
			alt="Couple standing by water"
		/>
		<Photo
			file="couple_shoots/35197525161_cc09a2300d_k.jpg"
			alt="Couple holding hands in sunset"
		/>
		<BookNowButton />
	</Page>
);
