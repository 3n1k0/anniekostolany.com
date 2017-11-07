import React from 'react';
import { Page } from './Page';
import BookNowButton from '../BookNowButton';
import RatesDownloadLink from '../RatesDownloadLink';

export default () => (
	<Page>
		<h2>Rates</h2>
		<p>All portrait sessions booked until 30th November (couple, family and baby) are discounted by 50%!</p>
		<p>For more information and detailed prices please see the following document: <RatesDownloadLink>anniekostolany_rates2017.pdf</RatesDownloadLink></p>

	
		
		
		<p>If you have any more questions, feel free to email me at mail@anniekostolany.com or by filling out the contact form.</p>
		<p>Delivery time can take up to 7 days.</p>
		<p>Event photography and mini sessions are excluded from promotion. </p>
		<p>50% discount is only valid for bookings made until 30. 11.</p>
		<BookNowButton />
	</Page>
);
