import React from 'react';
import TextPage from './TextPage';
import BookNowButton from '../BookNowButton';

export default () => (
	<TextPage>
		<h2>Events</h2>

		<p>Are you planning a big family event, a birthday or an engagement party?<br />
		 Doesn't matter if your family is big or small, I can help you to capture these special moments so you can treasure them forever.</p>

		<p>These photos will also come in handy if you have loved-ones who cannot make it to the event and you don’t want them to feel to be left out.</p>
		
		<p>Session fee for events: 120 Eur/hour*</p>

		<p><a href="/contat">Send me an email</a> and we can set up a Skype call or meet for a coffee to discuss all the details.</p>
		
		<p>*Btw and travel cost in price is not included.</p>


		<BookNowButton />
	</TextPage>
);
