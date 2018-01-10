import React from 'react';
import { Page, Photo } from './Page';
import BookNowButton from '../BookNowButton';
import Helmet from 'react-helmet';

export default () => (
	<Page>
		<Helmet>
			<meta
				name="description"
				content="You cannot really go wrong with a naturally beautiful model and exotic palm trees."
			/>
			<title>Tropical Vibes | Annie Kostolany</title>

			<meta
				property="og:title"
				content="Tropical Vibes | Annie Kostolany"
			/>
			<meta
				property="og:description"
				content="You cannot really go wrong with a naturally beautiful model and exotic palm trees."
			/>
			<meta
				property="og:image"
				content="https://anniekostolany.com/images/tropical_vibes/palmak.jpg"
			/>
		</Helmet>

		<h2>Tropical Vibes</h2>
		<p>
			Zsofia is a naturally beautiful model who barely wore any makeup for
			these photos. She moved and posed like it was the most natural thing
			for her which I found truly amazing. The tall and graceful palm
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
