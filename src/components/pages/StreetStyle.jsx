import React from 'react';
import Page from '../Page';
import Photo from '../Photo';
import BookNowButton from '../BookNowButton';
import { Link } from 'react-router-dom';

export default () => (
	<Page
		title="portraits"
		description="portraits by Annie"
		image="streetsyle/7.jpg"
	>
		<h2>portraits</h2>
		<Link to="/blog/2018/02/10/dutch-model-fall-photoshoot"><Photo file="streetsyle/7.jpg" /></Link>
		<Photo file="streetsyle/palmak.jpg" />
		<Photo file="streetsyle/kady.jpg" />
		<Photo file="streetsyle/amanda8.jpg" />
		<Photo file="streetsyle/evi.jpg" />
		<Photo file="streetsyle/amanda.jpg" />
		<Photo file="streetsyle/1.jpg" />
		<Photo file="streetsyle/35269218404_06c62d3003_k.jpg" />
		<Photo file="streetsyle/23539526988_24cbf3c0c5_k.jpg" />
		<Photo file="streetsyle/sitting3.jpg" />
		<BookNowButton />
	</Page>
);
