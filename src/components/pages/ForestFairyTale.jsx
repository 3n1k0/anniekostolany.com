import React from 'react';
import TextPage from '../TextPage';
import Photo from '../Photo';
import CallToActionButton from '../CallToActionButton';

export default () => (
	<TextPage
		title="Forest fairy tale"
		description="This photoshoot in Den Bosch was inspired by ancient fairytales and my beautiful model, Celine."
		image="styled_bridal/bride1.jpg"
	>
		<h2>Wedding & bridal shoots</h2>
		<p>
			When I think about a bride, the first words that come to my mind are
			magnificent, graceful and delicate. This bohemian shoot took place
			on an early autumn morning. The grass was still frozen as Celine
			stepped on it with her bare foot.
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

		<CallToActionButton to="/contact" text="Book now" />
	</TextPage>
);
