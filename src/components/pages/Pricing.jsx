import React from 'react';
import { Photo, Page } from './Page';
import BookNowButton from '../BookNowButton';
import RatesDownloadLink from '../RatesDownloadLink';

export default () => (
	<Page>
		
	
		<Photo file="pricing.jpg" alt="Inspirational quote"/>
		
		<ul>
			<li>Portrait sessions start at 190 EUR</li>
		<li>Couple and family sessions start at 190 EUR</li>
		<li>Mini sessions from 90 EUR</li>
		<li>Weddings from 900EUR</li>
		</ul>
		
		<p>Event rate: 110 EUR/hour</p>

		
		<Photo file="cicuka-2.jpg" alt="Christmas cat"/>
		<h2>Children Holiday Minis</h2>
		
		<p>
			<ul>
				<li>Perfect as Christmas card to family members and friends</li>
				<li>1-3 children in one set</li>
				<li>Christmas-styled (fairy lights, really cute decoration!)</li>
				<li>In my home-studio in Haarlem, really close to the train station</li>
				<li>Relaxed environment</li>
				<li>30 minutes</li>
				<li>6 hand edited, high-resolution images</li>
			</ul>
		</p>

		<p>For more information and detailed prices please send me an email to mail@anniekostolany.com or fill out the contact form below.</p>
	
<BookNowButton />
	</Page>
);
