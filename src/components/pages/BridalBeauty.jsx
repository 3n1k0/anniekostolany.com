import React from 'react';
import { Page, Photo } from './Page';
import BookNowButton from '../BookNowButton';

export default () => (
	<Page
		title="Bridal beauty"
		description="Photoshoot in Budapest with breathtakingly beautiful models in a vintage studio."
		image="bridal_beauty/1.jpg"
	>
		<h2>Bridal beauty styled photoshoots</h2>
		<p>
			This is a selection of the numerous styled photos I took as a part
			of this project. It's not a secret that I'm obsessed with these
			beautiful dresses, sophisticated makeup and exciting details about
			weddings and bridal looks.
		</p>

		<Photo file="bridal_beauty/0.jpg" />
		<Photo file="bridal_beauty/1.jpg" />
		<Photo file="bridal_beauty/2.jpg" />
		<Photo file="bridal_beauty/3.jpg" />
		<Photo file="bridal_beauty/4.jpg" />
		<Photo file="bridal_beauty/5.jpg" />
		<Photo file="bridal_beauty/6.jpg" />
		<Photo file="bridal_beauty/7.jpg" />
		<Photo file="bridal_beauty/8.jpg" />
		<Photo file="bridal_beauty/9.jpg" />
		<Photo file="bridal_beauty/10.jpg" />
		<Photo file="bridal_beauty/11.jpg" />
		<Photo file="bridal_beauty/12.jpg" />
		<Photo file="bridal_beauty/13.jpg" />
		<Photo file="bridal_beauty/14.jpg" />

		<BookNowButton />
	</Page>
);
