import React from 'react';
import { Page } from './Page';
import BookNowButton from '../BookNowButton';
import RatesDownloadLink from '../RatesDownloadLink';

export default () => (
	<Page>
		<h3>Rates</h3>
		
		<h2>Children Holiday Minis for only 80 Eur!</h2>
		<p>
			<ul>
			<li>Great as Christmas card for grandmas, grandpas, and for any family member or friend</li>
			<li>Christmas-styled (fairy lights, really cute decoration!)</li> 
			<li>In my home-studio in Haarlem, really close to the train station</li>
			<li>30 minutes long  5 hand edited high resolution images</li>
			</ul></p>
		
		<p>For more information and detailed prices please see the following document: <RatesDownloadLink>anniekostolany_rates2017.pdf</RatesDownloadLink></p>

	
		
		
		<p>If you have any more questions, feel free to email me at mail@anniekostolany.com or by filling out the contact form.</p>
		<p>Delivery time can take up to 7 days.</p>
		<p>Event photography and mini sessions are excluded from promotion. </p>
		<p>50% discount is only valid for bookings made until 30. 11.</p>
		<BookNowButton />
	</Page>
);
