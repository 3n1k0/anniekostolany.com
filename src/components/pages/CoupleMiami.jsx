import React from 'react';
import Page from '../Page';
import Photo from '../Photo';
import CallToActionButton from '../CallToActionButton';

export default () => (
	<Page title="Couple shoots" permalink="/couple-miami">
		<Photo file="couple_shoots/35197522211_52bbdc3a5f_k.jpg" />
		<Photo file="couple_shoots/35327296405_ced9926185_k.jpg" />
		<Photo file="couple_shoots/34939741490_6f1c0bc417_k.jpg" />
		<Photo file="couple_shoots/35197522641_a8a3b05128_k.jpg" />
		<Photo file="couple_shoots/35197523791_4e180460af_k.jpg" />
		<Photo file="couple_shoots/35197525161_cc09a2300d_k.jpg" />

		<CallToActionButton to="/contact" text="Book now" />
	</Page>
);
