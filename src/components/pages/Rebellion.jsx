import React from 'react';
import Page from '../Page';
import Photo from '../Photo';
import CallToActionButton from '../CallToActionButton';

export default () => (
	<Page
		title="Rock'n roll girl"
		description="Rock'n roll spirit reborn in fashion"
		image="rebellion/korlat.jpg"
	>
		<h2>Rebellion</h2>
		<p>
			Nivine is a true rebel inside and out and she's not afraid to show
			it to the world. A strong and ambitious girl who's able to express
			herself through her way of living. The perfect model.
		</p>
		<Photo file="rebellion/cigi.jpg" />
		<Photo file="rebellion/kocsi.jpg" />
		<Photo file="rebellion/korlat.jpg" />
		<Photo file="rebellion/korlat2.jpg" />
		<Photo file="rebellion/sunset.jpg" />
		<Photo file="rebellion/cigi2.jpg" />
		<Photo file="rebellion/white.jpg" />
		<Photo file="rebellion/csikos.jpg" />
		<Photo file="rebellion/lines.jpg" />
		<p> Nivine Massoud, Amsterdam, 2017.</p>
		<CallToActionButton to="/contact" text="Book now" />
	</Page>
);
