import React from 'react';
import { Page, Photo } from './Page';
import BookNowButton from '../BookNowButton';

export default () => (
	<Page
		title="Tropical Vibes"
		description="You cannot really go wrong with a naturally beautiful model and exotic palm trees."
		image="tropical_vibes/palmak.jpg"
	>
		<h2>Tropical Vibes</h2>
		<p>
			Zsofia is a naturally beautiful model who barely wore any makeup for
			these photos. She's making modeling look easy by doing it so naturally. The tall and graceful palm
			trees are just the perfect match for her southern features.
		</p>

		<Photo file="tropical_vibes/kezekfent.jpg" />
		<Photo file="tropical_vibes/35269204374_c8de3c23cd_k.jpg" />
		<Photo file="tropical_vibes/sitting.jpg" />
		<Photo file="tropical_vibes/sitting3.jpg" />
		<Photo file="tropical_vibes/35269218404_06c62d3003_k.jpg" />
		<Photo file="tropical_vibes/borostyan.jpg" />
		<Photo file="tropical_vibes/36109559835_6c223f0283_k.jpg" />
		<Photo file="tropical_vibes/palmak.jpg" />
		<BookNowButton />

		<p>Zsofia Cank, Budapest, 2017.</p>
	</Page>
);
