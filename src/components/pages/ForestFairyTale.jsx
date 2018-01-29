import React from 'react';
import { Page, Photo } from './Page';
import BookNowButton from '../BookNowButton';

export default () => (
	<Page
		title="Forest fairy tale"
		description="This photoshoot in Den Bosch was inspired by ancient fairytales and my beautiful model, Celine."
		image="styled_bridal/bride1.jpg"
	>
		<h2>Wedding & bridal shoots</h2>
		<p>
			When I think about a bride, the first words that come to my mind are
			magnificent, graceful and delicate. The reason I do styled bridal
			shoots is to show my perspective on how I picture these beautiful
			occasions.
			<br />Do you like my style? It is possible to book me for your own
			wedding, not only in the Netherlands but wherever you're planning to
			get married.
		</p>

		<Photo file="styled_bridal/bride1.jpg" />
		<Photo file="styled_bridal/bride2.jpg" />
		<Photo file="styled_bridal/bride3.jpg" />
		<Photo file="styled_bridal/bride4.jpg" />
		<Photo file="styled_bridal/bride5.jpg" />
		<Photo file="styled_bridal/bride6.jpg" />
		<Photo file="styled_bridal/bride7.jpg" />
		<Photo file="styled_bridal/bride8.jpg" />
		<Photo file="styled_bridal/bride10.jpg" />
		<Photo file="styled_bridal/bride11.jpg" />
		<Photo file="styled_bridal/bride12.jpg" />
		<Photo file="styled_bridal/bride13.jpg" />
		<Photo file="styled_bridal/bride14.jpg" />
		<Photo file="styled_bridal/bride15.jpg" />
		<Photo file="styled_bridal/bride16.jpg" />
		<Photo file="styled_bridal/bride17.jpg" />

		<p>
			This photoshoot in Den Bosch was inspired by fairytales and my
			beautiful model, Celine. Message me for more information by clicking
			the button below.
		</p>

		<BookNowButton />
	</Page>
);
