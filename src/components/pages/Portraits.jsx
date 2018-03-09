import React from 'react';
import AlbumPage from '../AlbumPage';
import Photo from '../Photo';
import CallToActionButton from '../CallToActionButton';
import { Link } from 'react-router-dom';

export default () => (
	<AlbumPage
		title="portraits"
		description="portraits by Annie"
		image="streetsyle/7.jpg"
	>
		<Link to="/blog/2018/02/10/dutch-model-fall-photoshoot">
			<Photo file="streetsyle/7.jpg" />
		</Link>
		<Photo file="streetsyle/palmak.jpg" />
		<Photo file="streetsyle/kady.jpg" />
		<Photo file="streetsyle/amanda8.jpg" />
		<Photo file="streetsyle/evi.jpg" />
		<Photo file="streetsyle/amanda.jpg" />
		<Link to="/blog/2018/02/10/dutch-model-fall-photoshoot">
			<Photo file="streetsyle/1.jpg" />
		</Link>
		<Photo file="streetsyle/35269218404_06c62d3003_k.jpg" />
		<Photo file="streetsyle/23539526988_24cbf3c0c5_k.jpg" />
		<Photo file="streetsyle/sitting3.jpg" />
		<CallToActionButton to="/contact" text="Book now" />
	</AlbumPage>
);
